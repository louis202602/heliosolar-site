import { readFile } from "node:fs/promises";
import path from "node:path";

const MEDIA: Record<string, string> = {
  hero: "hero-agri.svg",
  industrial: "realisation-industrial.svg",
};

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function base64ToArrayBuffer(value: string): ArrayBuffer {
  const binary = atob(value);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i += 1) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes.buffer;
}

export async function GET(request: Request) {
  const name = new URL(request.url).searchParams.get("name") ?? "hero";
  const filename = MEDIA[name];
  if (!filename) return new Response("Not found", { status: 404 });

  const svg = await readFile(path.join(process.cwd(), "public", "media", filename), "utf8");
  const match = svg.match(/data:image\/jpeg;base64,([^\"]+)/);
  const payload = match?.[1];
  if (!payload) return new Response("Image unavailable", { status: 404 });

  return new Response(base64ToArrayBuffer(payload), {
    headers: {
      "Content-Type": "image/jpeg",
      "Cache-Control": "public, max-age=86400, s-maxage=86400, stale-while-revalidate=604800",
    },
  });
}
