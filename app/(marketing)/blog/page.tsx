import { compareDesc } from "date-fns";
import { allPosts, Post } from "@/.contentlayer/generated";
import ArticleCard from "./components/ArticleCard";

export default function BlogPage() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <div className="container max-w-4xl py-6 md:py-10 lg:py-14">
      <div>
        <div className="space-y-4">
          <h1 className="font-extrabold text-2xl md:text-3xl lg:text-4xl">
            Blog
          </h1>
          <p className="text-muted-foreground text-sm md:text-lg lg:text-xl leading-normal">
            ContentlayerとMDXで書いてます。
          </p>
        </div>
        <hr className="my-6" />
        <div className="grid sm:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
          {posts.length >= 1 ? (
            posts.map((post: Post) => (
              <ArticleCard
                key={post._id}
                post={post}
              />
            ))
          ) : (
            <p className="text-center md:text-lg lg:text-xl">
              まだ記事がありません。
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
