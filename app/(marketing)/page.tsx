import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function IndexPage() {
  return (
    <div className="py-8 md:py-12 lg:py-16 space-y-14">
      <section className="text-center">
        <div className="container flex flex-col gap-4 items-center max-w-[1024px]">
          <Button
            asChild
            variant="secondary"
            className="rounded-full"
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

      <section id="features">
        <div className="container max-w-[1024px] bg-muted py-4 md:py-8 lg:py-12 space-y-4">
          <div className="flex flex-col gap-4 items-center">
            <h2 className="font-extrabold text-2xl md:text-3xl lg:text-4xl">
              サービスの特徴
            </h2>
            <p className="text-center whitespace-pre-line text-muted-foreground text-sm md:text-lg lg:text-xl leading-normal max-w-[672px]">
              {`このプロジェクトは、モダンな技術スタックを使って作られたWebアプリケーションです。
              Next.js AppRouterやcontentLayerを利用して、マークダウン形式でブログ投稿ができます。`}
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <Card className="p-4 space-y-1">
              <Image
                src="next.svg"
                alt="Next.js"
                width={50}
                height={50}
                className="dark:border rounded-full"
              />
              <CardTitle className="text-lg md:text-xl lg:text-2xl">
                Next.js
              </CardTitle>
              <CardDescription className="text-xs md:text-sm">
                AppRouter/Layouts/APIRoutesの技術を使用
              </CardDescription>
            </Card>
            <Card className="p-4 space-y-1">
              <Image
                src="typescript.svg"
                alt="TypeScript"
                width={50}
                height={50}
                className="rounded-md"
              />
              <CardTitle className="text-lg md:text-xl lg:text-2xl">
                TypeScript
              </CardTitle>
              <CardDescription className="text-xs md:text-sm">
                型安全で、生産性とコードの品質を向上
              </CardDescription>
            </Card>
            <Card className="p-4 space-y-1">
              <Image
                src="react-hook-form.svg"
                alt="ReactHookForm"
                width={50}
                height={50}
              />
              <CardTitle className="text-lg md:text-xl lg:text-2xl">
                React Hook Form
              </CardTitle>
              <CardDescription className="text-xs md:text-sm">
                フォームのバリデーションはReact Hook Formを使用
              </CardDescription>
            </Card>
            <Card className="p-4 space-y-1">
              <Image
                src="supabase.svg"
                alt="Supabase"
                width={50}
                height={50}
              />
              <CardTitle className="text-lg md:text-xl lg:text-2xl">
                Supabase
              </CardTitle>
              <CardDescription className="text-xs md:text-sm">
                DBはBaaSのSupabaseを使用
              </CardDescription>
            </Card>
            <Card className="p-4 space-y-1">
              <Image
                src="next-auth.svg"
                alt="NextAuth.js"
                width={50}
                height={50}
              />
              <CardTitle className="text-lg md:text-xl lg:text-2xl">
                NextAuth.js
              </CardTitle>
              <CardDescription className="text-xs md:text-sm">
                認証にはNextAuth.jsを使用
              </CardDescription>
            </Card>
            <Card className="p-4 space-y-1">
              <Image
                src="prisma.svg"
                alt="Prisma"
                width={50}
                height={50}
              />
              <CardTitle className="text-lg md:text-xl lg:text-2xl">
                Prisma
              </CardTitle>
              <CardDescription className="text-xs md:text-sm">
                ORMはPrismaを使用
              </CardDescription>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
