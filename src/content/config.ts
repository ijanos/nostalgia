import { z, defineCollection } from 'astro:content';

const screenshotCollection = defineCollection({
  type: 'content',
  schema: ({image}) => z.object({
    image: image(),
  }),
});

export const collections = {
  'screenshot': screenshotCollection,
};
