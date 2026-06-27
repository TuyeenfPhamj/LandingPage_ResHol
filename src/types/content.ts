import type { LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  title: string;
  tag: string;
  description: string;
  image: string;
  icon: LucideIcon;
}

export interface GalleryItem {
  title: string;
  caption: string;
  image: string;
  wide?: boolean;
}

export interface Reason {
  title: string;
  description: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}
