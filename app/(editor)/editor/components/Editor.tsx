"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useCallback, useEffect, useRef, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import LinkTool from "@editorjs/link";
import List from "@editorjs/list";
import Code from "@editorjs/code";
import ImageTool from "@editorjs/image";
import { Post } from "@prisma/client";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PostSchemaType, postSchema } from "@/lib/validations/post";
import { toast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { ToastAction } from "@radix-ui/react-toast";
import Image from "next/image";

type Props = {
  post: Pick<Post, "id" | "title" | "content" | "published">;
};

export default function Editor(props: Props) {
  const { post } = props;
  const ref = useRef<EditorJS>();
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);
  const initializeEditor = useCallback(async () => {
    const body = postSchema.parse(post);

    const editor = new EditorJS({
      holder: "editor",
      onReady: () => {
        ref.current = editor;
      },
      placeholder: "記事を入力",
      data: body.content,
      inlineToolbar: true,
      tools: {
        header: Header,
        linkTool: LinkTool,
        list: List,
        code: Code,
        image: ImageTool,
      },
    });
  }, [post]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMounted(true);
    }
  }, []);

  useEffect(() => {
    if (isMounted) {
      initializeEditor();
    }

    return () => {
      ref.current?.destroy();
      ref.current = undefined;
    };
  }, [isMounted, initializeEditor]);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<PostSchemaType>({
    resolver: zodResolver(postSchema),
  });

  const onSavePost: SubmitHandler<PostSchemaType> = async (data) => {
    const content = await ref.current?.save();

    const res = await fetch(`/api/posts/${post.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: data.title,
        content,
      }),
    });

    if (!res.ok) {
      return toast({
        title: "問題が発生しました。",
        description: "記事が保存されませんでした。。もう一度お試しください。",
        variant: "destructive",
        action: (
          <ToastAction altText="もう一度確かめる">もう一度確かめる</ToastAction>
        ),
      });
    }

    router.push("/dashboard");

    return toast({
      description: "記事が保存されました。",
    });
  };

  return (
    <form onSubmit={handleSubmit(onSavePost)}>
      <div className="flex flex-col gap-8">
        <div className="flex items-center w-full justify-between">
          <div className="flex items-center gap-10">
            <Button
              asChild
              variant="ghost"
            >
              <Link href="/dashboard">戻る</Link>
            </Button>
            <p className="text-sm text-muted-foreground">公開</p>
          </div>
          <Button
            type="submit"
            disabled={isSubmitting}
          >
            {!isSubmitting ? (
              <>保存</>
            ) : (
              <Image
                src="/loader.svg"
                alt="loading"
                width={16}
                height={16}
                className="animate-spin"
              />
            )}
          </Button>
        </div>
        <div className="md:w-[650px] md:mx-auto">
          <TextareaAutosize
            placeholder="タイトル"
            className="bg-trans-parent text-xl md:text-2xl lg:text-3xl font-bold focus:outline-none resize-none"
            defaultValue={post.title}
            {...register("title")}
          />
        </div>
        {/* EditorJS will be mounted here */}
        <div
          id="editor"
          className="min-h-[500px]"
        />
        <p className="text-sm md:text-base text-muted-foreground">
          Use{" "}
          <kbd className="border mg-muted py-1 px-1.5 font-bold rounded-md shadow">
            Tab
          </kbd>{" "}
          to open the command menu
        </p>
      </div>
    </form>
  );
}
