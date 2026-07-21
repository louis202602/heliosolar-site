import { NextResponse } from "next/server";

export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const POSTCODE_RE = /^\d{5}$/;

export async function POST(request: Request) {
  const contentType = request.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) {
    return NextResponse.json({ message: "Format de requête non pris en charge." }, { status: 415 });
  }

  const contentLength = Number(request.headers.get("content-length") ?? "0");
  if (contentLength > 25_000) {
    return NextResponse.json({ message: "La demande est trop volumineuse." }, { status: 413 });
  }

  const allowedOrigin = process.env.NEXT_PUBLIC_SITE_URL;
  const origin = request.headers.get("origin");
  if (allowedOrigin && origin && origin !== allowedOrigin) {
    return NextResponse.json({ message: "Origine de requête refusée." }, { status: 403 });
  }

  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ message: "Données invalides." }, { status: 400 });
  }

  if (String(body.website || "").trim()) {
    return NextResponse.json({ message: "Demande reçue." });
  }

  const required = ["nom", "telephone", "email", "codePostal", "typeProjet", "statutProjet", "localisation", "consentement"];
  const missing = required.some((key) => !String(body[key] || "").trim());
  if (missing) return NextResponse.json({ message: "Merci de compléter tous les champs obligatoires." }, { status: 400 });

  const email = String(body.email).trim().toLowerCase();
  const codePostal = String(body.codePostal).trim();
  if (!EMAIL_RE.test(email)) return NextResponse.json({ message: "Adresse e-mail invalide." }, { status: 400 });
  if (!POSTCODE_RE.test(codePostal)) return NextResponse.json({ message: "Code postal invalide." }, { status: 400 });

  const webhookUrl = process.env.N8N_STUDY_WEBHOOK_URL;
  if (!webhookUrl) {
    return NextResponse.json(
      { message: "Le formulaire est prêt, mais sa connexion sécurisée à HelioSolar n’est pas encore activée." },
      { status: 503 },
    );
  }

  const payload = {
    source: "heliosolar-site",
    submittedAt: new Date().toISOString(),
    nom: String(body.nom).trim().slice(0, 120),
    telephone: String(body.telephone).trim().slice(0, 40),
    email,
    codePostal,
    typeProjet: String(body.typeProjet).trim().slice(0, 50),
    statutProjet: String(body.statutProjet).trim().slice(0, 50),
    localisation: String(body.localisation).trim().slice(0, 250),
    consommationAnnuelle: String(body.consommationAnnuelle || "").trim().slice(0, 20),
    surfaceDisponible: String(body.surfaceDisponible || "").trim().slice(0, 20),
    message: String(body.message || "").trim().slice(0, 2000),
    consentement: true,
  };

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10_000);
  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(process.env.N8N_WEBHOOK_TOKEN ? { Authorization: `Bearer ${process.env.N8N_WEBHOOK_TOKEN}` } : {}),
      },
      body: JSON.stringify(payload),
      signal: controller.signal,
      cache: "no-store",
    });
    if (!response.ok) throw new Error(`Webhook response ${response.status}`);
    return NextResponse.json({ message: "Votre demande a bien été transmise. HelioSolar reviendra vers vous après analyse." });
  } catch {
    return NextResponse.json({ message: "Service momentanément indisponible. Vous pouvez écrire à contact@heliosolarpro.fr." }, { status: 502 });
  } finally {
    clearTimeout(timeout);
  }
}
