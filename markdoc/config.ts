import * as tags from './tags';
import * as nodes from './nodes';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  tags: {
    callout: tags.callout,
    markdoc: tags.markdoc,
    'tab-group': tags.tabGroup,
    tab: tags.tab,
    'tab-list': tags.tabList,
    'tab-panels': tags.tabPanels,
    'tab-panel': tags.tabPanel,
    disclosure: tags.disclosure,
    'disclosure-button': tags.disclosureButton,
    'disclosure-panel': tags.disclosurePanel,
  },
  nodes,
};
