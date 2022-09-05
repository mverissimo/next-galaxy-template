import type { MarkdocNextJsSchema } from '@markdoc/next.js';

import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@/components/tabs';

export const group: MarkdocNextJsSchema = {
  render: TabGroup,
  attributes: {
    defaultIndex: {
      type: Number,
    },
  },
};

export const list: MarkdocNextJsSchema = {
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

export const panels: MarkdocNextJsSchema = {
  render: TabPanels,
};

export const panel: MarkdocNextJsSchema = {
  render: TabPanel,
  attributes: {
    language: {
      type: String,
    },
  },
};

// // eslint-disable-next-line import/no-anonymous-default-export
// export default {
//   'tab-group': group,
//   tab,
//   'tab-list': list,
//   'tab-panels': panels,
//   'tab-panel': panel,
// };
