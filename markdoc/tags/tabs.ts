import type { MarkdocNextJsSchema } from '@markdoc/next.js';

import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/tabs';

export const tabs: MarkdocNextJsSchema = {
  render: Tabs,
  attributes: {
    defaultValue: {
      type: String,
    },
  },
};

export const list: MarkdocNextJsSchema = {
  render: TabsList,
  attributes: {
    'aria-label': {
      type: String,
    },
  },
};

export const trigger: MarkdocNextJsSchema = {
  render: TabsTrigger,
  selfClosing: true,
  attributes: {
    value: {
      type: String,
    },
    children: {
      type: String,
    },
  },
};

export const content: MarkdocNextJsSchema = {
  render: TabsContent,
  attributes: {
    value: {
      type: String,
    },
  },
};

export const config = {
  tags: {
    tabs,
    list,
    trigger,
    content,
  },
};
