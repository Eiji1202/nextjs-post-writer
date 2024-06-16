"use client";

import { sidebarNavItem } from "@/types";
import { CreditCard, FileText, Settings } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const iconMap: { [key: string]: React.FC<React.SVGProps<SVGSVGElement>> } = {
  FileText,
  CreditCard,
  Settings,
};

type Props = {
  items: sidebarNavItem[];
};

export default function DashboardNav(props: Props) {
  const { items } = props;
  const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-2">
      {items.map((item, index) => {
        const IconComponent = iconMap[item.icon];
        return (
          <Link
            key={index}
            href={item.href!}
            className={`p-2 flex items-center gap-2 rounded-md hover:bg-accent text-accent-foreground ${pathname === item.href ? "bg-accent" : "bg-transparent"}`}
          >
            <IconComponent
              width={20}
              height={20}
            />
            <span>{item.title}</span>
          </Link>
        );
      })}
    </nav>
  );
}
