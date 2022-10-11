import { Callout } from '@/components/callout';
import type { MarkdocNextJsSchema } from '@markdoc/next.js';

const callout: MarkdocNextJsSchema = {
  render: Callout,
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
  },
};

export default callout;
