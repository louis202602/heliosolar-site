import Image from "next/image";

export default function Loading() {
  return (
    <div className="grid min-h-[70vh] place-items-center bg-paper dark:bg-ocean-950" role="status" aria-label="Chargement">
      <div className="flex flex-col items-center gap-5">
        <div className="relative grid h-28 w-28 place-items-center rounded-full border border-solar-500/30 bg-white shadow-glow dark:bg-white/95">
          <span className="absolute inset-[-8px] animate-spin rounded-full border-2 border-transparent border-t-solar-500" />
          <Image src="/brand/heliosolar-mark.png" alt="" width={76} height={76} className="h-16 w-16 object-contain" priority />
        </div>
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-ocean-600 dark:text-ocean-200">HelioSolar</p>
      </div>
    </div>
  );
}
