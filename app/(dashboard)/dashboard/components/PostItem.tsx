import { Post } from "@prisma/client";
import { format } from "date-fns";
import Link from "next/link";
import PostOperations from "./PostOperations";

type Props = {
  post: Pick<Post, "id" | "title" | "published" | "createdAt">;
};

export default function PostItem(props: Props) {
  const { post } = props;
  return (
    <div className="flex items-center justify-between p-4">
      <div className="space-y-1">
        <Link
          href={`/editor/${post.id}`}
          className="font-semibold hover:underline underline-offset-2"
        >
          {post.title}
        </Link>
        <div>
          <p className="text-xs md:text-sm text-muted-foreground tracking-wide">
            {format(post.createdAt, "yyyy/MM/dd HH:mm")}
          </p>
        </div>
      </div>
      <PostOperations post={post} />
    </div>
  );
}
