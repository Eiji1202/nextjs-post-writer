import { DashboardConfig } from "@/types";

export const dashboardConfig: DashboardConfig = {
  nav: [
    {
      title: "ドキュメント",
      href: "/docs",
    },
    {
      title: "サポート",
      href: "/support",
      disabled: true,
    },
  ],
  sidebarNav: [
    {
      title: "記事投稿",
      href: "/dashboard",
      icon: "FileText",
    },
    {
      title: "お支払い",
      href: "/dashboard/payments",
      icon: "CreditCard",
    },
    {
      title: "設定",
      href: "/dashboard/settings",
      icon: "Settings",
    },
  ],
};
