import { allPosts } from "@/.contentlayer/generated";
import { notFound } from "next/navigation";
import { format, parseISO } from "date-fns";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Mdx from "./component/Mdx";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";

async function getPostFromSlug(slug: string) {
  const post = allPosts.find((post) => post.slug === `/blog/${slug}`);
  return post;
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const page = await getPostFromSlug(params.slug);

  if (!page) return {};

  return {
    title: page.title,
    description: page.description,
    openGraph: {
      title: page.title,
      description: page.description,
      siteName: siteConfig.name,
      type: "article",
      url: `https://example.com/blog/${page.slug}`,
      images: {
        url: page.image,
        width: 850,
        height: 400,
        alt: page.title,
      },
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug;
  const post = await getPostFromSlug(slug);
  if (!post) return notFound();

  return (
    <article className="container max-w-4xl py-6 md:py-10 lg:py-14">
      <div className="space-y-2">
        <time className="text-muted-foreground">
          Published on {format(parseISO(post.date), "yyyy/MM/dd")}
        </time>
        <h1 className="font-extrabold text-2xl md:text-3xl lg:text-4xl">
          {post.title}
        </h1>
      </div>
      {post.image && (
        <Image
          src={post.image}
          alt={post.title}
          width={850}
          height={400}
          className="my-4 md:my-6 lg:my-8 border rounded-md"
        />
      )}
      <Mdx code={post.body.code} />
      <hr className="my-4 md:my-6 lg:my-8" />
      <div className="flex items-center justify-center">
        <Button
          asChild
          variant="secondary"
          className=""
        >
          <Link href="/blog">すべての記事を見る</Link>
        </Button>
      </div>
    </article>
  );
}
