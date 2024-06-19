import React from "react";
import Editor from "../components/Editor";
import { Post, User } from "@prisma/client";
import { db } from "@/lib/db";
import { getCurrentUser } from "@/lib/session";
import { notFound } from "next/navigation";

const getPostForUser = async (postId: Post["id"], userId: User["id"]) => {
  const post = await db.post.findFirst({
    where: {
      id: postId,
      authorId: userId,
    },
  });

  return post;
};

export default async function EditorPage({
  params,
}: {
  params: { id: string };
}) {
  const user = await getCurrentUser();
  const postId = params.id;

  const post = await getPostForUser(postId, user.id);

  if (!post) {
    notFound();
  }

  return <Editor post={post} />;
}
