import { BookOpen, Home, Mail, ScrollText, type LucideIcon } from "lucide-react";
import type { NavigationIconKey } from "@/data/navigation";

export const navigationIcons: Record<NavigationIconKey, LucideIcon> = {
  home: Home,
  activity: ScrollText,
  notes: BookOpen,
  links: Mail,
};

