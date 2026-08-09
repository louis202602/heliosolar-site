import { Button } from "@/components/Button";
import { Section } from "@/components/Section";

export default function NotFound() {
  return (
    <Section className="min-h-[65vh] py-24 text-center">
      <p className="text-sm font-bold uppercase tracking-[0.24em] text-solar-600 dark:text-solar-300">
        Erreur 404
      </p>
      <h1 className="mt-4 font-display text-4xl font-bold text-ocean-950 dark:text-white sm:text-5xl">
        Cette page n’existe pas.
      </h1>
      <p className="mx-auto mt-5 max-w-xl text-base text-slatebrand-500 dark:text-ocean-100 sm:text-lg">
        Le lien est peut-être incorrect ou la page a été déplacée.
      </p>
      <div className="mt-8 flex justify-center">
        <Button href="/">Retour à l’accueil</Button>
      </div>
    </Section>
  );
}
