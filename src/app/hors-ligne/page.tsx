import Link from "next/link";

export const metadata = {
  title: "Hors connexion",
  description: "HelioSolar est momentanément hors connexion.",
};

export default function OfflinePage() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden py-24">
      <div className="solar-grid absolute inset-0 opacity-30" />
      <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-6">
        <p className="text-xs font-bold uppercase tracking-[.22em] text-solar-600 dark:text-solar-300">Mode hors connexion</p>
        <h1 className="mt-5 text-4xl font-black tracking-[-.04em] text-ocean-950 dark:text-white sm:text-6xl">
          La connexion internet est indisponible.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slatebrand-500 dark:text-ocean-100">
          Les pages déjà consultées peuvent rester accessibles. Reconnectez-vous pour envoyer une demande d’étude ou actualiser les données.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link href="/" className="rounded-full bg-ocean-700 px-6 py-3 font-bold text-white transition hover:bg-ocean-800 dark:bg-solar-400 dark:text-ocean-950 dark:hover:bg-solar-300">
            Retour à l’accueil
          </Link>
          <Link href="/simulateur" className="rounded-full border border-ocean-900/15 px-6 py-3 font-bold text-ocean-900 transition hover:bg-ocean-50 dark:border-white/15 dark:text-white dark:hover:bg-white/5">
            Ouvrir le simulateur
          </Link>
        </div>
      </div>
    </section>
  );
}
