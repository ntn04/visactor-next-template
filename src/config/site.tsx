import { Gauge, type LucideIcon, MessagesSquare } from "lucide-react";

export type SiteConfig = typeof siteConfig;
export type Navigation = {
  icon: LucideIcon;
  name: string;
  href: string;
};

export const siteConfig = {
  title: "RH+",
  description: "Gerência de RH",
};

export const navigations: Navigation[] = [
  {
    icon: Gauge,
    name: "Dashboard",
    href: "/",
  },
  {
    icon: MessagesSquare,
    name: "Vagas",
    href: "/vagas",
  },
  {
    icon: MessagesSquare,
    name: "Materiais",
    href: "/materiais",
  },
];
