import Image from "next/image";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";

export default function StackCards() {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
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
          alt="auth.js"
          width={50}
          height={50}
        />
        <CardTitle className="text-lg md:text-xl lg:text-2xl">
          Auth.js
        </CardTitle>
        <CardDescription className="text-xs md:text-sm">
          認証にはAuth.jsを使用
        </CardDescription>
      </Card>
      <Card className="p-4 space-y-1">
        <Image
          src="prisma.svg"
          alt="Prisma"
          width={50}
          height={50}
        />
        <CardTitle className="text-lg md:text-xl lg:text-2xl">Prisma</CardTitle>
        <CardDescription className="text-xs md:text-sm">
          ORMはPrismaを使用
        </CardDescription>
      </Card>
    </div>
  );
}
