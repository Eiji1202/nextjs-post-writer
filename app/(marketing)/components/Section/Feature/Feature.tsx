import StackCards from "./partials/StackCards";

export default function Feature() {
  return (
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
        <StackCards />
        <p className="text-muted-foreground md:text-lg lg:text-xl text-center">
          Post Writerは、ログインするとブログ投稿ができるようになります。
        </p>
      </div>
    </section>
  );
}
