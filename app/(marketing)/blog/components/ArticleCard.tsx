import { format, parseISO } from "date-fns";
import { Post } from "@/.contentlayer/generated";
import Image from "next/image";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import Link from "next/link";

type Props = {
  post: Post;
};

export default function ArticleCard(props: Props) {
  const { post } = props;

  return (
    <article key={post._id}>
      <Link href={post.slug}>
        <Card className="p-4 md:p-6 lg:p-8 space-y-1 md:space-y-2 lg:space-y-3">
          <Image
            src={post.image}
            alt={post.title}
            width={800}
            height={400}
            className="border rounded-md"
          />
          <CardTitle className="text-lg md:text-xl lg:text-2xl truncate">
            {post.title}
          </CardTitle>
          <CardDescription className="text-sm md:text-lg lg:text-xl">
            {post.description}
          </CardDescription>
          <p className="text-xs md:text-sm lg:text-lg text-muted-foreground">
            {format(parseISO(post.date), "yyyy/MM/dd")}
          </p>
        </Card>
      </Link>
    </article>
  );
}
