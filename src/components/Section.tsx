import type { ReactNode } from "react";

interface SectionProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  children?: ReactNode;
  className?: string;
  id?: string;
}

export function Section({ eyebrow, title, description, children, className = "", id }: SectionProps) {
  return (
    <section id={id} className={`mx-auto w-full max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8 ${className}`}>
      {(eyebrow || title || description) && (
        <div className="mb-12 max-w-2xl">
          {eyebrow && (
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-solar-600 dark:text-solar-300">
              {eyebrow}
            </p>
          )}
          {title && (
            <h2 className="text-3xl font-bold tracking-[-0.035em] text-ocean-950 dark:text-white sm:text-4xl">
              {title}
            </h2>
          )}
          {description && (
            <p className="mt-4 text-base leading-8 text-slatebrand-500 dark:text-ocean-100">{description}</p>
          )}
        </div>
      )}
      {children}
    </section>
  );
}
