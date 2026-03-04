import { z, defineCollection } from 'astro:content';

// 全セクション共通のスキーマ（ルール）
const commonSchema = z.object({
  title: z.string(),
  date: z.date(),
  description: z.string().optional(), // カードに表示する説明文（なくてもOK）
  tags: z.array(z.string()).optional(),
});

// 4つのコレクションを定義
export const collections = {
  'diary': defineCollection({ type: 'content', schema: commonSchema }),
  'tech': defineCollection({ type: 'content', schema: commonSchema }),
  'software': defineCollection({ type: 'content', schema: commonSchema }),
  'papers': defineCollection({ type: 'content', schema: commonSchema }),
};
