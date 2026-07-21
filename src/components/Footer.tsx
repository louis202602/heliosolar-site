import Image from "next/image";
import Link from "next/link";
import { navItems } from "./nav-items";

const legalLinks = [
  { href: "/mentions-legales", label: "Mentions légales" },
  { href: "/politique-confidentialite", label: "Politique de confidentialité" },
  { href: "/cgv", label: "Conditions générales de vente" },
];

export function Footer() {
  return (
    <footer className="border-t border-ocean-900/10 bg-white dark:border-white/10 dark:bg-ocean-950">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <Image
              src="/brand/heliosolar-logo-full.png"
              alt="HelioSolar — L’énergie de votre avenir"
              width={280}
              height={150}
              className="h-auto w-56 object-contain dark:rounded-xl dark:bg-white/95 dark:p-3"
            />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ocean-700 dark:text-ocean-100">
              Études, conception et réalisation de solutions photovoltaïques pour le résidentiel, le professionnel et
              l&apos;industriel.
            </p>
          </div>

          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-ocean-500 dark:text-ocean-300">
              Navigation
            </p>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-ocean-700 hover:text-solar-600 dark:text-ocean-100 dark:hover:text-solar-300">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-ocean-500 dark:text-ocean-300">
              Informations légales
            </p>
            <ul className="space-y-2">
              {legalLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-ocean-700 hover:text-solar-600 dark:text-ocean-100 dark:hover:text-solar-300">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-4 rounded-md border border-solar-500/25 bg-solar-100/55 px-3 py-2 text-xs leading-relaxed text-ocean-800 dark:bg-solar-500/10 dark:text-solar-100">
              Pages provisoires — contenu à valider avant la mise en ligne publique.
            </p>
          </div>
        </div>

        <p className="mt-10 border-t border-ocean-900/10 pt-6 text-xs text-ocean-500 dark:border-white/10 dark:text-ocean-300">
          © {new Date().getFullYear()} HelioSolar. Tous droits réservés. Site en construction — environnement de prévisualisation.
        </p>
      </div>
    </footer>
  );
}
