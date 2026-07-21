import type { ReactNode } from "react";

interface CardProps {
  eyebrow?: string;
  title: string;
  children?: ReactNode;
  className?: string;
}

export function Card({ eyebrow, title, children, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-mist bg-white/60 p-6 transition-colors hover:border-copper-500 dark:border-steel-700 dark:bg-steel-900/40 dark:hover:border-copper-300 ${className}`}
    >
      {eyebrow && (
        <p className="mb-2 font-mono text-xs uppercase tracking-[0.18em] text-copper-700 dark:text-copper-300">
          {eyebrow}
        </p>
      )}
      <h3 className="mb-2 text-lg font-semibold text-ink dark:text-steel-50">{title}</h3>
      {children && <div className="text-sm leading-relaxed text-steel-700 dark:text-steel-100">{children}</div>}
    </div>
  );
}
