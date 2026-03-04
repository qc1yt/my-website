import { z, defineCollection } from 'astro:content';

// 日記コレクションの定義
const diaryCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    tags: z.array(z.string()).optional(), // タグは無くても可
  }),
});

// コレクションをエクスポート
export const collections = {
  'diary': diaryCollection,
};
