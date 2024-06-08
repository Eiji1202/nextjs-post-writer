import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import Link from "next/link";

export default function Contact() {
  return (
    <section id="contact">
      <div className="container max-w-[1024px] py-4 md:py-8 lg:py-12 space-y-4 flex flex-col gap-4 items-center">
        <h2 className="font-extrabold text-2xl md:text-3xl lg:text-4xl">
          お問い合わせ
        </h2>
        <p className="text-center whitespace-pre-line text-muted-foreground text-sm md:text-lg lg:text-xl leading-normal max-w-[672px]">
          {`もしもWebサービスが気に入った場合は、下記XからDMでご連絡ください。
          お仕事の依頼お待ちしております。`}
        </p>
        <Button
          asChild
          variant="secondary"
          className="rounded-full font-bold"
        >
          <Link
            href={siteConfig.links.x}
            target="_blank"
            rel="noreferrer"
          >
            お仕事はXまで
          </Link>
        </Button>
      </div>
    </section>
  );
}
