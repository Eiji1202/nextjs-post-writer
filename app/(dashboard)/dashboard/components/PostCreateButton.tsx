"use client";

import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { FilePlus } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function PostCreateButton() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  // 記事を投稿する関数
  const handleCreatePost = async () => {
    setIsLoading(true);

    const res = await fetch("/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "Untitled Post",
      }),
    });

    setIsLoading(false);

    if (!res.ok) {
      return toast({
        title: "問題が発生しました。",
        description: "投稿が作成されませんでした。もう一度お試しください。",
        variant: "destructive",
      });
    }

    const post = await res.json();

    router.refresh();
    router.push(`/editor/${post.id}`);
  };

  return (
    <Button
      variant="secondary"
      className={"flex items-center gap-1"}
      disabled={isLoading}
      onClick={handleCreatePost}
    >
      <>
        {isLoading ? (
          <Image
            src="loader.svg"
            alt="loading"
            width={16}
            height={16}
            className="animate-spin"
          />
        ) : (
          <FilePlus size={16} />
        )}
        <span>投稿する</span>
      </>
    </Button>
  );
}
