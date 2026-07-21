import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-solar-500 disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary:
    "bg-solar-500 text-ocean-950 shadow-[0_10px_35px_rgba(245,183,0,0.24)] hover:-translate-y-0.5 hover:bg-solar-300 hover:shadow-[0_16px_45px_rgba(245,183,0,0.32)]",
  secondary:
    "border border-ocean-900/15 bg-white/70 text-ocean-950 backdrop-blur hover:-translate-y-0.5 hover:border-solar-500 dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:border-solar-300",
  ghost: "text-ocean-700 hover:text-solar-600 dark:text-ocean-100 dark:hover:text-solar-300",
};

interface ButtonAsLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: Variant;
}

interface ButtonAsButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: undefined;
  variant?: Variant;
}

type Props = ButtonAsLinkProps | ButtonAsButtonProps;

export function Button({ variant = "primary", className = "", ...props }: Props) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if ("href" in props && props.href) {
    const { href, ...rest } = props;
    return <Link href={href} className={classes} {...rest} />;
  }

  const buttonProps = props as ButtonHTMLAttributes<HTMLButtonElement>;
  return <button className={classes} {...buttonProps} />;
}
