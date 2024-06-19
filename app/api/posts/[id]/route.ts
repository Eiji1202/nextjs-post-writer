import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import { postSchema } from "@/lib/validations/post";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const routeContextSchema = z.object({
  params: z.object({
    id: z.string(),
  }),
});

// api/posts/[id]
export async function PATCH(
  req: NextRequest,
  context: z.infer<typeof routeContextSchema>
) {
  try {
    const { params } = routeContextSchema.parse(context);

    const hasAccess = await verifyCurrentUserHasAccessToPost(params.id);

    if (!hasAccess) {
      return NextResponse.json("Unauthorized", { status: 403 });
    }

    const json = await req.json();
    const body = postSchema.parse(json);

    await db.post.update({
      where: {
        id: params.id,
      },
      data: {
        title: body.title,
        content: body.content,
      },
    });
    return NextResponse.json(null, { status: 200 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(error.issues, { status: 422 });
    } else {
      return NextResponse.json(null, { status: 500 });
    }
  }
}

export async function DELETE(
  req: NextRequest,
  context: z.infer<typeof routeContextSchema>
) {
  try {
    const { params } = routeContextSchema.parse(context);

    const hasAccess = await verifyCurrentUserHasAccessToPost(params.id);

    if (!hasAccess) {
      return NextResponse.json("Unauthorized", { status: 403 });
    }

    await db.post.delete({
      where: {
        id: params.id,
      },
    });
    return new Response(null, { status: 204 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(error.issues, { status: 422 });
    } else {
      return NextResponse.json(null, { status: 500 });
    }
  }
}

async function verifyCurrentUserHasAccessToPost(postId: string) {
  const session = await getServerSession(authOptions);
  const postCount = await db.post.count({
    where: {
      id: postId,
      authorId: session?.user.id,
    },
  });

  return postCount > 0;
}
