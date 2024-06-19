import { z } from "zod";

export const postSchema = z.object({
  title: z
    .string()
    .min(1, { message: "タイトルは1文字以上で入力してください" })
    .max(100, { message: "タイトルは100文字以内で入力してください。" }),
  content: z.any().optional(),
});

export type PostSchemaType = z.infer<typeof postSchema>;
