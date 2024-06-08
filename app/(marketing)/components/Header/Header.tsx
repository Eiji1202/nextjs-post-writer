"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useState } from "react";
import { ModeToggle } from "./partials/ModeToggle";
import { Menu } from "lucide-react";
import MobileNav from "./partials/MoblieNav";
import { siteConfig } from "@/config/site";

export default function Header() {
  return (
    <header className="container h-16 flex items-center gap-4 md:gap-8 sticky top-0 z-40 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <MobileNav />
      <Link
        href="/"
        className="hidden md:flex font-bold md:text-2xl lg:text-3xl"
      >
        {siteConfig.name}
      </Link>
      <nav className="flex items-center flex-1 justify-between">
        <div className="hidden md:flex items-center md:gap-2">
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="dark:border"
          >
            <Link href="/blog">ブログ</Link>
          </Button>
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="dark:border"
          >
            <Link href="/#feature">特徴</Link>
          </Button>
        </div>
        <div className="flex items-center gap-2 md:gap-4 ml-auto">
          <Button
            asChild
            variant="outline"
            size="sm"
          >
            <Link href={"/login"}>ログイン</Link>
          </Button>
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
}
