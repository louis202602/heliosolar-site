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
    <section id={id} className={`mx-auto w-full max-w-6xl px-6 py-16 sm:py-20 lg:px-8 ${className}`}>
      {(eyebrow || title || description) && (
        <div className="mb-10 max-w-2xl">
          {eyebrow && (
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-copper-700 dark:text-copper-300">
              {eyebrow}
            </p>
          )}
          {title && (
            <h2 className="text-2xl font-semibold sm:text-3xl text-ink dark:text-steel-50">{title}</h2>
          )}
          {description && (
            <p className="mt-3 text-base leading-relaxed text-steel-700 dark:text-steel-100">{description}</p>
          )}
        </div>
      )}
      {children}
    </section>
  );
}
