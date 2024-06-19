"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Post } from "@prisma/client";
import { EllipsisVertical, Trash2 } from "lucide-react";
import Link from "next/link";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { set } from "date-fns";
import Image from "next/image";

async function deletePost(id: Post["id"]) {
  try {
    const res = await fetch(`/api/posts/${id}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      throw new Error("Failed to delete post");
    }

    toast({
      title: "投稿を削除しました。",
    });

    return true;
  } catch (error) {
    toast({
      title: "問題が発生しました。",
      description: "投稿の削除に失敗しました。もう一度お試しください。",
      variant: "destructive",
      action: (
        <ToastAction altText="もう一度確かめる">もう一度確かめる</ToastAction>
      ),
    });
  }
}

type Props = {
  post: Pick<Post, "id" | "title">;
};

export default function PostOperations(props: Props) {
  const { post } = props;
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
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
          <DropdownMenuItem
            className="cursor-pointer"
            onClick={openModal}
          >
            削除
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <AlertDialog open={isModalOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>本当にこの記事を削除しますか？</AlertDialogTitle>
            <AlertDialogDescription>
              この記事を削除すると、元に戻すことはできません。
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={closeModal}>
              キャンセル
            </AlertDialogCancel>
            <Button
              disabled={isLoading}
              variant="destructive"
              onClick={async (e) => {
                e.preventDefault();
                setIsLoading(true);
                const deleted = await deletePost(post.id);

                if (deleted) {
                  closeModal();
                  router.refresh();
                  setIsLoading(false);
                }
              }}
              className="flex items-center gap-1"
            >
              {isLoading ? (
                <Image
                  src="loader.svg"
                  alt="loading"
                  width={16}
                  height={16}
                  className="animate-spin"
                />
              ) : (
                <Trash2 />
              )}
              はい
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
