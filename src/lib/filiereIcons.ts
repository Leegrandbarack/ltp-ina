import {
  FileText, Calculator, ShoppingCart, Zap, BrickWall, Car, Compass, PenTool,
  Monitor, Droplets, Building2, GraduationCap,
  type LucideIcon,
} from 'lucide-react';

export const FILIERE_ICONS: Record<string, LucideIcon> = {
  FileText, Calculator, ShoppingCart, Zap, BrickWall, Car, Compass, PenTool,
  Monitor, Droplets, Building2, GraduationCap,
};

export const FILIERE_ICON_NAMES = Object.keys(FILIERE_ICONS);

export const getFiliereIcon = (name: string | null | undefined): LucideIcon =>
  (name && FILIERE_ICONS[name]) || GraduationCap;
