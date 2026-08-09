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
      className={`card-premium p-6 hover:-translate-y-1 hover:border-solar-500/40 hover:shadow-card-hover ${className}`}
    >
      {eyebrow && (
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-solar-600 dark:text-solar-300">
          {eyebrow}
        </p>
      )}
      <h3 className="mb-2 text-lg font-bold text-ocean-950 dark:text-white">{title}</h3>
      {children && (
        <div className="text-sm leading-relaxed text-slatebrand-500 dark:text-ocean-100">{children}</div>
      )}
    </div>
  );
}
