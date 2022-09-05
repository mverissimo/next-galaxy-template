import * as tags from './tags';
import * as nodes from './nodes';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  tags: {
    callout: tags.callout,
    markdoc: tags.markdoc,
    'tab-group': tags.group,
    tab: tags.tab,
    'tab-list': tags.list,
    'tab-panels': tags.panels,
    'tab-panel': tags.panel,
  },
  nodes,
};
