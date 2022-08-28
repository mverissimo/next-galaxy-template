import { Callout } from '@/components/callout';
import type { MarkdocNextJsSchema } from '@markdoc/next.js';

export const callout: MarkdocNextJsSchema = {
  render: Callout,
  attributes: {
    appearance: {
      type: String,
    },
    title: {
      type: String,
    },
    children: {
      type: String,
    },
  },
};
