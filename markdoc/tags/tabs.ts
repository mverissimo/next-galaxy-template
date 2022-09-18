import type { MarkdocNextJsSchema } from '@markdoc/next.js';

import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@/components/tabs';

export const tabGroup: MarkdocNextJsSchema = {
  render: TabGroup,
  attributes: {
    defaultIndex: {
      type: Number,
    },
  },
};

export const tabList: MarkdocNextJsSchema = {
  render: TabList,
  attributes: {
    'aria-label': {
      type: String,
    },
  },
};

export const tab: MarkdocNextJsSchema = {
  render: Tab,
  selfClosing: true,
  attributes: {
    disabled: {
      type: Boolean,
    },
    label: {
      type: String,
    },
    children: {
      type: String,
    },
  },
};

export const tabPanels: MarkdocNextJsSchema = {
  render: TabPanels,
};

export const tabPanel: MarkdocNextJsSchema = {
  render: TabPanel,
  attributes: {
    language: {
      type: String,
    },
  },
};
