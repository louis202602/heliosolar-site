import Image from "next/image";
import Link from "next/link";
import { navItems } from "./nav-items";
import { Button } from "./Button";

const legalLinks = [
  { href: "/mentions-legales", label: "Mentions légales" },
  { href: "/politique-confidentialite", label: "Politique de confidentialité" },
  { href: "/cgv", label: "Conditions générales de vente" },
];

const contactLinks = [
  { href: "mailto:contact@heliosolarpro.fr", label: "contact@heliosolarpro.fr" },
  { href: "/contact", label: "Marseille & région Sud" },
];

export function Footer() {
  return (
    <footer className="border-t border-ocean-900/10 bg-white dark:border-white/10 dark:bg-ocean-950">
      {/* Final conversion strip */}
      <div className="border-b border-ocean-900/10 dark:border-white/10">
        <div className="container-px flex flex-col items-start justify-between gap-6 py-12 sm:flex-row sm:items-center">
          <div>
            <p className="eyebrow">Prêt à avancer</p>
            <p className="mt-3 max-w-xl text-2xl font-bold tracking-[-0.03em] text-ocean-950 dark:text-white sm:text-3xl">
              Estimez le potentiel solaire de votre site en quelques minutes.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button href="/demande-etude">Demander mon étude</Button>
            <Button href="/simulateur" variant="secondary">
              Simuler ma production
            </Button>
          </div>
        </div>
      </div>

      <div className="container-px py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <Image
              src="/brand/heliosolar-logo-full.png"
              alt="HelioSolar — L’énergie de votre avenir"
              width={280}
              height={150}
              className="h-auto w-52 object-contain dark:rounded-xl dark:bg-white/95 dark:p-3"
            />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-slatebrand-500 dark:text-ocean-100">
              Études, conception et réalisation de solutions photovoltaïques pour le résidentiel, le professionnel,
              l&apos;industriel et l&apos;agricole.
            </p>
            <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-ocean-900/10 bg-ocean-50 px-3.5 py-1.5 text-xs font-bold text-ocean-700 dark:border-white/10 dark:bg-white/5 dark:text-ocean-100">
              <span className="h-1.5 w-1.5 rounded-full bg-solar-500" />
              Qualification QualiPV 500
            </p>
          </div>

          <FooterColumn title="Navigation" links={navItems} />
          <FooterColumn title="Contact" links={contactLinks} />
          <FooterColumn title="Informations légales" links={legalLinks} />
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-ocean-900/10 pt-6 text-xs text-slatebrand-500 dark:border-white/10 dark:text-ocean-300 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} HelioSolar. Tous droits réservés.</p>
          <p>Ingénierie photovoltaïque — Marseille & région Sud</p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <div>
      <p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-ocean-500 dark:text-ocean-300">{title}</p>
      <ul className="space-y-2.5">
        {links.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="text-sm text-slatebrand-700 transition-colors hover:text-solar-600 dark:text-ocean-100 dark:hover:text-solar-300"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
