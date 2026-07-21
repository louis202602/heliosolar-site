"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

const inputClass =
  "w-full rounded-2xl border border-ocean-900/10 bg-white px-4 py-3.5 text-sm text-ocean-950 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-solar-500 focus:ring-4 focus:ring-solar-400/15 dark:border-white/10 dark:bg-white/[.045] dark:text-white dark:placeholder:text-ocean-200/50";

type Status = "idle" | "sending" | "success" | "error";

export function EtudeForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setMessage("");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/demande-etude", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = (await response.json()) as { message?: string };

      if (!response.ok) throw new Error(result.message || "La demande n’a pas pu être envoyée.");

      setStatus("success");
      setMessage(result.message || "Votre demande a bien été transmise.");
      form.reset();
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Une erreur est survenue.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-7" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Nom complet" required>
          <input className={inputClass} required name="nom" autoComplete="name" minLength={2} />
        </Field>
        <Field label="Téléphone" required>
          <input className={inputClass} required name="telephone" type="tel" autoComplete="tel" inputMode="tel" />
        </Field>
        <Field label="E-mail" required>
          <input className={inputClass} required name="email" type="email" autoComplete="email" />
        </Field>
        <Field label="Code postal" required>
          <input className={inputClass} required name="codePostal" inputMode="numeric" autoComplete="postal-code" pattern="[0-9]{5}" maxLength={5} />
        </Field>
        <Field label="Type de projet" required>
          <select className={inputClass} required name="typeProjet" defaultValue="">
            <option value="" disabled>Sélectionner</option>
            <option value="residentiel">Maison individuelle</option>
            <option value="professionnel">Commerce / tertiaire</option>
            <option value="industriel">Bâtiment industriel</option>
            <option value="agricole">Bâtiment agricole</option>
          </select>
        </Field>
        <Field label="Statut du projet" required>
          <select className={inputClass} required name="statutProjet" defaultValue="">
            <option value="" disabled>Sélectionner</option>
            <option value="information">Je souhaite m’informer</option>
            <option value="etude">Je souhaite une étude</option>
            <option value="devis">Je souhaite un devis</option>
            <option value="urgent">Projet à court terme</option>
          </select>
        </Field>
        <Field label="Consommation annuelle (kWh)">
          <input className={inputClass} name="consommationAnnuelle" type="number" min="0" inputMode="numeric" placeholder="Ex. 7 000" />
        </Field>
        <Field label="Surface disponible estimée (m²)">
          <input className={inputClass} name="surfaceDisponible" type="number" min="0" inputMode="numeric" placeholder="Ex. 250" />
        </Field>
      </div>

      <Field label="Adresse ou ville du projet" required>
        <input className={inputClass} required name="localisation" autoComplete="street-address" />
      </Field>

      <Field label="Décrivez votre projet">
        <textarea className={inputClass} name="message" rows={5} maxLength={2000} placeholder="Type de toiture, objectif, contraintes, calendrier…" />
      </Field>

      <div className="hidden" aria-hidden="true">
        <label>Site internet<input name="website" tabIndex={-1} autoComplete="off" /></label>
      </div>

      <label className="flex items-start gap-3 text-sm leading-6 text-slatebrand-500 dark:text-ocean-100">
        <input required name="consentement" value="oui" type="checkbox" className="mt-1 size-4 rounded border-ocean-900/20 accent-solar-500" />
        <span>
          J’accepte que HelioSolar utilise ces informations pour traiter ma demande. Voir la{" "}
          <Link href="/politique-confidentialite" className="font-semibold text-ocean-800 underline underline-offset-4 dark:text-solar-300">
            politique de confidentialité
          </Link>.
        </span>
      </label>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex min-h-12 items-center justify-center rounded-full bg-solar-400 px-7 py-3 text-sm font-extrabold text-ocean-950 shadow-[0_14px_35px_rgba(250,192,45,.25)] transition hover:-translate-y-0.5 hover:bg-solar-300 disabled:cursor-wait disabled:opacity-60"
        >
          {status === "sending" ? "Envoi en cours…" : "Demander mon étude"}
        </button>
        <p className="text-xs leading-5 text-slatebrand-500 dark:text-ocean-200">Réponse humaine après analyse des informations transmises.</p>
      </div>

      {message && (
        <div role="status" className={`rounded-2xl border p-4 text-sm ${status === "success" ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-800 dark:text-emerald-200" : "border-red-500/30 bg-red-500/10 text-red-800 dark:text-red-200"}`}>
          {message}
        </div>
      )}
    </form>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-ocean-950 dark:text-white">
      <span>{label}{required && <span className="ml-1 text-solar-600" aria-hidden="true">*</span>}</span>
      {children}
    </label>
  );
}
