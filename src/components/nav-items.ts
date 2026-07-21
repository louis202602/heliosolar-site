export interface NavItem {
  href: string;
  label: string;
}

export const navItems: NavItem[] = [
  { href: "/solutions", label: "Solutions" },
  { href: "/professionnels-industriels", label: "Professionnels & industriels" },
  { href: "/residentiel", label: "Résidentiel" },
  { href: "/realisations", label: "Réalisations" },
  { href: "/simulateur", label: "Simulateur" },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
];
