import { Icon } from "lucide-react";

export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    x: string;
    github: string;
  };
  keywords: string[];
  authors: {
    name: string;
    url: string;
  }[];
};

export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
};

export type MarketingConfig = {
  nav: NavItem[];
};

export type sidebarNavItem = {
  title: string;
  disabled?: boolean;
  external?: boolean;
  icon: string;
} & ( // hrefがある場合itemsはない
  | {
      href: string;
      items?: never;
    }
  // hrefがない場合itemsがある
  | {
      href?: string;
      items: sidebarNavItem[];
    }
);

export type DashboardConfig = {
  nav: NavItem[];
  sidebarNav: sidebarNavItem[];
};
