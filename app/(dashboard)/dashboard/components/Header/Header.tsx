import { ModeToggle } from "@/components/ui/ModeToggle";
import { Button } from "@/components/ui/button";
import { dashboardConfig } from "@/config/dashboard";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import React from "react";
import MobileNav from "./partials/MobileNav";

export default function Header() {
  return (
    <header className="container h-16 flex items-center justify-between md:justify-normal gap-4 md:gap-8 sticky top-0 z-40 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <MobileNav />
      <Link
        href="/"
        className="hidden md:flex font-bold md:text-2xl lg:text-3xl"
      >
        {siteConfig.name}
      </Link>
      <nav className="hidden md:flex items-center flex-1">
        {dashboardConfig.nav.map((item, index) => (
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="dark:border"
            key={index}
          >
            <Link href={item.href}>{item.title}</Link>
          </Button>
        ))}
      </nav>
      <ModeToggle />
    </header>
  );
}
