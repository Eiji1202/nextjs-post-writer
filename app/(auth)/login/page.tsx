import Link from "next/link";
import UserAuthForm from "../components/UserAuthForm";

export default function LoginPage() {
  return (
    <div className="container flex flex-col h-screen justify-center items-center text-center">
      <div className="flex flex-col gap-4 md:gap-6 max-w-[400px]">
        <div className="space-y-1 md:space-y-2">
          <h1 className="font-extrabold text-2xl md:text-3xl lg:text-4xl">
            Welcome Back
          </h1>
          <p className="text-muted-foreground text-xs md:text-sm lg:text-lg leading-normal">
            メールアドレスを入力してログインできます。
          </p>
        </div>
        <UserAuthForm buttonLabel="ログイン" />
        <Link
          href="/register"
          className="underline underline-offset-4 text-muted-foreground text-xs md:text-sm lg:text-lg hover:opacity-70 transition-opacity"
        >
          アカウントを持っていませんか?
        </Link>
      </div>
    </div>
  );
}
