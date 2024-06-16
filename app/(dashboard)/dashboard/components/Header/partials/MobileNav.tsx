import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { dashboardConfig } from "@/config/dashboard";
import { siteConfig } from "@/config/site";
import { Menu } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function MobileNav() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="md:hidden p-2 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground dark:border">
        <Menu />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="md:hidden ml-8">
        <Button
          asChild
          variant="ghost"
          className="m-0 w-full font-bold flex justify-start"
        >
          <Link href="/">{siteConfig.name}</Link>
        </Button>
        <DropdownMenuSeparator className="mx-1" />
        <div className="flex flex-col">
          {dashboardConfig.nav.map((item, index) => (
            <Button
              asChild
              variant="ghost"
              className="flex justify-start py-1"
              key={index}
            >
              <Link href={item.href}>{item.title}</Link>
            </Button>
          ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
