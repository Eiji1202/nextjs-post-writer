import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import Link from "next/link";

export default function Top() {
  return (
    <section className="text-center">
      <div className="container flex flex-col gap-4 items-center max-w-[1024px]">
        <Button
          asChild
          variant="secondary"
          className="rounded-full font-bold"
        >
          <Link
            href={siteConfig.links.x}
            target="_blank"
          >
            Xをフォローする
          </Link>
        </Button>
        <h1 className="font-extrabold text-2xl md:text-3xl lg:text-4xl">
          Post Writer
        </h1>
        <p className="whitespace-pre-line text-muted-foreground text-sm md:text-lg lg:text-xl leading-normal max-w-[672px]">
          {`このアプリケーションはNext.js AppRouterで作られたものです。
            ユーザーは自由に投稿をポストすることができます。`}
        </p>
        <div className="flex gap-4">
          <Button
            asChild
            size="lg"
          >
            <Link href={"/login"}>はじめる</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
          >
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
