import type { MarkdocNextJsSchema } from '@markdoc/next.js';

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@/components/disclosure';

export const disclosure: MarkdocNextJsSchema = {
  render: Disclosure,
  attributes: {
    defaultOpen: {
      type: Boolean,
    },
  },
};

export const disclosureButton: MarkdocNextJsSchema = {
  render: DisclosureButton,
  selfClosing: true,
  attributes: {
    label: {
      type: String,
    },
  },
};

export const disclosurePanel: MarkdocNextJsSchema = {
  render: DisclosurePanel,
};
