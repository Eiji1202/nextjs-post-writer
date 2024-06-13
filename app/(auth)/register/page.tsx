import Link from "next/link";
import UserAuthForm from "../components/UserAuthForm";
import { Button } from "@/components/ui/button";

export default function RegisterPage() {
  return (
    <div className="flex flex-col h-screen justify-center items-center text-center">
      <div className="flex flex-col gap-4 md:gap-6 max-w-[400px]">
        <div className="space-y-1 md:space-y-2">
          <h1 className="font-extrabold text-2xl md:text-3xl lg:text-4xl">
            アカウントの作成
          </h1>
          <p className="text-muted-foreground text-xs md:text-sm lg:text-lg leading-normal">
            メールアドレスを入力してアカウント作成してください。
          </p>
        </div>
        <UserAuthForm buttonLabel="登録" />
        <div className="space-x-2 md:space-x-4">
          <Link
            href="/terms"
            className="underline underline-offset-4 text-muted-foreground text-xs md:text-sm lg:text-lg hover:opacity-70 transition-opacity"
          >
            利用規約
          </Link>
          <Link
            href="/privacy-policy"
            className="underline underline-offset-4 text-muted-foreground text-xs md:text-sm lg:text-lg hover:opacity-70 transition-opacity"
          >
            プライバシーポリシー
          </Link>
        </div>
        <Button
          asChild
          variant="secondary"
        >
          <Link href="/login">ログインページはこちら</Link>
        </Button>
      </div>
    </div>
  );
}
