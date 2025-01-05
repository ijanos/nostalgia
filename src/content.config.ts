import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const screenshotCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/screenshot" }),
  schema: ({image}) => z.object({
    image: image(),
  }),
});

export const collections = {
  'screenshot': screenshotCollection,
};
