import Image from "next/image";
import Link from "next/link";
import { navItems } from "./nav-items";
import { ThemeToggle } from "./ThemeToggle";
import { MobileNav } from "./MobileNav";
import { Button } from "./Button";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-ocean-900/10 bg-white/88 backdrop-blur-xl dark:border-white/10 dark:bg-ocean-950/88">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center" aria-label="HelioSolar — Accueil">
          <Image
            src="/brand/heliosolar-logo-header.png"
            alt="HelioSolar — L’énergie de votre avenir"
            width={230}
            height={98}
            priority
            className="h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02] dark:rounded-lg dark:bg-white/95 dark:px-2"
          />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Navigation principale">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[13px] font-semibold text-ocean-800 transition-colors hover:text-solar-600 dark:text-ocean-100 dark:hover:text-solar-300"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />
          <div className="hidden sm:block">
            <Button href="/demande-etude" className="px-5 py-2.5 text-xs">
              Étude gratuite
            </Button>
          </div>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
