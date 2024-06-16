import React from "react";
import DashboardShell from "./components/DashboardShell";
import DashboardHeader from "./components/DashboardHeader";
import PostCreateButton from "./components/PostCreateButton";
import { db } from "@/lib/db";
import { getCurrentUser } from "@/lib/session";
import PostItem from "./components/PostItem";

export default async function DashboardPage() {
  const user = await getCurrentUser();
  const posts = await db.post.findMany({
    where: {
      authorId: user?.id,
    },
    select: {
      id: true,
      title: true,
      published: true,
      createdAt: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <>
      <DashboardHeader
        title="記事投稿"
        description="記事の投稿と管理"
      >
        <PostCreateButton />
      </DashboardHeader>
      {posts.length >= 0 ? (
        <div className="border rounded-md divide-y shadow">
          {posts.map((post) => (
            <PostItem
              key={post.id}
              post={post}
            />
          ))}
        </div>
      ) : (
        <div className="text-center text-muted-foreground md:text-lg">
          投稿がありません。
        </div>
      )}
    </>
  );
}
