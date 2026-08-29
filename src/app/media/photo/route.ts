import { readFile } from "node:fs/promises";
import path from "node:path";

const MEDIA: Record<string, string> = {
  hero: "hero-agri.svg",
  industrial: "realisation-industrial.svg",
};

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function decodeBase64(value: string): ArrayBuffer {
  const buffer = Buffer.from(value.replace(/\s+/g, ""), "base64");
  const bytes = new Uint8Array(buffer.byteLength);
  bytes.set(buffer);
  return bytes.buffer as ArrayBuffer;
}

export async function GET(request: Request) {
  const name = new URL(request.url).searchParams.get("name") ?? "hero";
  const filename = MEDIA[name];
  if (!filename) return new Response("Not found", { status: 404 });

  const svg = await readFile(path.join(process.cwd(), "public", "media", filename), "utf8");
  const match = svg.match(/data:image\/jpeg;base64,([^\"]+)/);
  const payload = match?.[1];
  if (!payload) return new Response("Image unavailable", { status: 404 });

  return new Response(decodeBase64(payload), {
    headers: {
      "Content-Type": "image/jpeg",
      "Cache-Control": "public, max-age=86400, s-maxage=86400, stale-while-revalidate=604800",
    },
  });
}
