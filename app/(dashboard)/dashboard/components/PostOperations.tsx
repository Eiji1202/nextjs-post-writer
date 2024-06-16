"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Post } from "@prisma/client";
import { EllipsisVertical } from "lucide-react";
import Link from "next/link";

type Props = {
  post: Pick<Post, "id" | "title">;
};

export default function PostOperations(props: Props) {
  const { post } = props;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <EllipsisVertical size={20} />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <Link
            href={`/editor/${post.id}`}
            className="w-full"
          >
            編集
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator className="mx-1" />
        <DropdownMenuItem className="cursor-pointer">削除</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
