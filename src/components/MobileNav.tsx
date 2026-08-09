"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "./nav-items";
import { Button } from "./Button";

const emptySubscribe = () => () => {};

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  // true on the client (after hydration), false during SSR — safe portal guard.
  const mounted = useSyncExternalStore(emptySubscribe, () => true, () => false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const overlay = (
    <>
      {/* Backdrop */}
      <div
        onClick={() => setOpen(false)}
        aria-hidden="true"
        className={`fixed inset-0 z-[90] bg-ocean-950/50 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navigation"
        className={`fixed inset-y-0 right-0 z-[95] flex w-[86%] max-w-sm flex-col bg-white shadow-panel transition-transform duration-300 ease-premium dark:bg-ocean-950 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-ocean-900/10 px-5 py-4 dark:border-white/10">
          <Image
            src="/brand/heliosolar-logo-header.png"
            alt="HelioSolar"
            width={180}
            height={76}
            className="h-10 w-auto object-contain dark:rounded-md dark:bg-white/95 dark:px-1.5"
          />
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Fermer le menu"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-ocean-900/10 text-ocean-950 transition-colors hover:border-solar-500 dark:border-white/15 dark:text-white"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-4 py-6" aria-label="Navigation mobile">
          {navItems.map((item) => {
            const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                aria-current={active ? "page" : undefined}
                className={`flex items-center justify-between rounded-2xl px-4 py-3.5 text-base font-semibold transition-colors ${
                  active
                    ? "bg-solar-500/12 text-ocean-950 dark:bg-white/10 dark:text-white"
                    : "text-ocean-900 hover:bg-ocean-50 dark:text-ocean-100 dark:hover:bg-white/5"
                }`}
              >
                {item.label}
                <svg viewBox="0 0 24 24" className="h-4 w-4 text-solar-500" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <path d="M9 6l6 6-6 6" />
                </svg>
              </Link>
            );
          })}
        </nav>

        <div className="border-t border-ocean-900/10 p-5 dark:border-white/10">
          <Button href="/demande-etude" className="w-full" onClick={() => setOpen(false)}>
            Demander mon étude gratuite
          </Button>
        </div>
      </div>
    </>
  );

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Ouvrir le menu"
        aria-expanded={open}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-ocean-900/10 text-ocean-950 transition-colors hover:border-solar-500 dark:border-white/15 dark:text-white dark:hover:border-solar-300"
      >
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
        </svg>
      </button>

      {mounted ? createPortal(overlay, document.body) : null}
    </div>
  );
}
