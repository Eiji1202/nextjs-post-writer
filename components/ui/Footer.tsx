import { siteConfig } from "@/config/site";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="container h-20 md:h-24 flex items-center justify-center border-t">
      <p className="md:text-xl lg:text-xl tracking-wide">
        Built By {""}
        <Link
          href={siteConfig.links.x}
          className="underline underline-offset-4 hover:text-muted-foreground transition-all font-semibold"
          target="_blank"
          rel="noreferrer"
        >
          Eiji
        </Link>
        . Hosted on {""}
        <Link
          href="https://vercel.com"
          className="underline underline-offset-4 hover:text-muted-foreground transition-all font-semibold"
          target="_blank"
          rel="noreferrer"
        >
          Vercel
        </Link>
      </p>
    </footer>
  );
}
