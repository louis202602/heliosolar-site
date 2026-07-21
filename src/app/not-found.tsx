import { Button } from "@/components/Button";
import { Section } from "@/components/Section";

export default function NotFound() {
  return (
    <Section className="min-h-[65vh] py-24 text-center">
      <p className="font-mono text-sm uppercase tracking-[0.24em] text-copper-700 dark:text-copper-300">
        Erreur 404
      </p>
      <h1 className="mt-4 font-display text-4xl font-bold text-ink dark:text-steel-50 sm:text-5xl">
        Cette page n’existe pas.
      </h1>
      <p className="mx-auto mt-5 max-w-xl text-base text-steel-700 dark:text-steel-100 sm:text-lg">
        Le lien est peut-être incorrect ou la page a été déplacée.
      </p>
      <div className="mt-8 flex justify-center">
        <Button href="/">Retour à l’accueil</Button>
      </div>
    </Section>
  );
}
