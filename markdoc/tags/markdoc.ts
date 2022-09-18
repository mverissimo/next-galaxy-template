import { Tag } from '@markdoc/markdoc';
import type { MarkdocNextJsSchema } from '@markdoc/next.js';

import { Fence } from '@/components/fence';

const markdoc: MarkdocNextJsSchema = {
  render: Fence,
  attributes: {},
  transform(node, config) {
    const attributes = node.transformAttributes(config);
    const { content, language } = node.children[0].attributes;

    return new Tag(
      this.render as string,
      {
        ...attributes,
        language,
      },
      [content]
    );
  },
};

export default markdoc;
