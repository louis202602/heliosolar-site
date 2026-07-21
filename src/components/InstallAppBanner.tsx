"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>;
};

const DISMISS_KEY = "heliosolar-install-banner-dismissed";

export function InstallAppBanner() {
  const [installPrompt, setInstallPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const alreadyInstalled = window.matchMedia("(display-mode: standalone)").matches;
    const dismissed = window.localStorage.getItem(DISMISS_KEY) === "true";
    if (alreadyInstalled || dismissed) return;

    const handlePrompt = (event: Event) => {
      event.preventDefault();
      setInstallPrompt(event as BeforeInstallPromptEvent);
      setVisible(true);
    };

    const handleInstalled = () => {
      setVisible(false);
      setInstallPrompt(null);
    };

    window.addEventListener("beforeinstallprompt", handlePrompt);
    window.addEventListener("appinstalled", handleInstalled);

    return () => {
      window.removeEventListener("beforeinstallprompt", handlePrompt);
      window.removeEventListener("appinstalled", handleInstalled);
    };
  }, []);

  if (!visible || !installPrompt) return null;

  const install = async () => {
    await installPrompt.prompt();
    const choice = await installPrompt.userChoice;
    if (choice.outcome === "accepted") setVisible(false);
    setInstallPrompt(null);
  };

  const dismiss = () => {
    window.localStorage.setItem(DISMISS_KEY, "true");
    setVisible(false);
  };

  return (
    <aside
      aria-label="Installer l’application HelioSolar"
      className="fixed inset-x-4 bottom-4 z-[80] mx-auto max-w-xl rounded-3xl border border-ocean-900/10 bg-white/95 p-4 shadow-[0_22px_80px_rgba(6,23,37,.22)] backdrop-blur-xl dark:border-white/10 dark:bg-ocean-950/95 sm:p-5"
    >
      <div className="flex items-start gap-4">
        <Image src="/brand/icon-192.png" alt="" width={48} height={48} className="h-12 w-12 rounded-2xl" />
        <div className="min-w-0 flex-1">
          <p className="font-bold text-ocean-950 dark:text-white">Installer HelioSolar</p>
          <p className="mt-1 text-sm leading-6 text-slatebrand-500 dark:text-ocean-100">
            Accédez plus rapidement au simulateur et à votre demande d’étude depuis l’écran d’accueil.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => void install()}
              className="rounded-full bg-ocean-700 px-4 py-2 text-sm font-bold text-white transition hover:bg-ocean-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ocean-600 dark:bg-solar-400 dark:text-ocean-950 dark:hover:bg-solar-300"
            >
              Installer
            </button>
            <button
              type="button"
              onClick={dismiss}
              className="rounded-full px-4 py-2 text-sm font-semibold text-ocean-700 transition hover:bg-ocean-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ocean-600 dark:text-ocean-100 dark:hover:bg-white/5"
            >
              Plus tard
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}
