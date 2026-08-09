"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navItems } from "./nav-items";
import { ThemeToggle } from "./ThemeToggle";
import { MobileNav } from "./MobileNav";
import { Button } from "./Button";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-all duration-300 ease-premium ${
        scrolled
          ? "border-ocean-900/10 bg-white/90 shadow-[0_8px_30px_rgba(6,23,37,0.06)] backdrop-blur-xl dark:border-white/10 dark:bg-ocean-950/90"
          : "border-transparent bg-white/70 backdrop-blur-md dark:bg-ocean-950/60"
      }`}
    >
      <div
        className={`container-px flex items-center justify-between transition-all duration-300 ease-premium ${
          scrolled ? "h-[68px]" : "h-[80px]"
        }`}
      >
        <Link href="/" className="group flex items-center" aria-label="HelioSolar — Accueil">
          <Image
            src="/brand/heliosolar-logo-header.png"
            alt="HelioSolar — L’énergie de votre avenir"
            width={230}
            height={98}
            priority
            className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02] dark:rounded-lg dark:bg-white/95 dark:px-2 sm:h-14"
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigation principale">
          {navItems.map((item) => {
            const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`relative rounded-full px-3.5 py-2 text-[13px] font-semibold transition-colors duration-200 ${
                  active
                    ? "text-ocean-950 dark:text-white"
                    : "text-ocean-800/80 hover:text-ocean-950 dark:text-ocean-100/80 dark:hover:text-white"
                }`}
              >
                {item.label}
                <span
                  className={`absolute inset-x-3.5 -bottom-0.5 h-0.5 rounded-full bg-solar-500 transition-all duration-300 ease-premium ${
                    active ? "opacity-100" : "opacity-0"
                  }`}
                />
              </Link>
            );
          })}
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
