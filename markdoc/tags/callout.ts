import { Callout } from '@/components/callout';
import type { MarkdocNextJsSchema } from '@markdoc/next.js';

export const callout: MarkdocNextJsSchema = {
  render: Callout,
  selfClosing: true,
  children: ['paragraph', 'tag', 'list'],
  attributes: {
    appearance: {
      type: String,
      default: 'note',
      matches: ['caution', 'danger', 'info', 'note', 'tip'],
      errorLevel: 'critical',
    },
    title: {
      type: String,
    },
    children: {
      type: String,
    },
  },
};
