import type { MarkdocNextJsSchema } from '@markdoc/next.js';

import { Fence } from '@/components/fence';

export const fence: MarkdocNextJsSchema = {
  render: Fence,
  attributes: {
    children: {
      type: String,
      required: true,
    },
    highlight: {
      type: String,
    },
    language: {
      type: String,
      required: true,
    },
  },
};
