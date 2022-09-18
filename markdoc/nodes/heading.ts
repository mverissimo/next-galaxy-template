import { Tag } from '@markdoc/markdoc';

import type { RenderableTreeNodes } from '@markdoc/markdoc';
import type { MarkdocNextJsSchema } from '@markdoc/next.js';

import { Heading } from '@/components/heading';

function generateID(
  children: RenderableTreeNodes[],
  attributes: MarkdocNextJsSchema['attributes']
) {
  if (attributes?.id && typeof attributes.id === 'string') {
    return attributes.id;
  }

  return children
    ?.filter((child) => typeof child === 'string')
    .join(' ')
    .replace(/[?]/g, '')
    .replace(/\s+/g, '-')
    .toLowerCase();
}

const heading: MarkdocNextJsSchema = {
  render: Heading,
  children: ['inline'],
  attributes: {
    id: {
      type: String,
    },
    level: {
      type: Number,
      required: true,
      default: 1,
    },
  },
  transform(node, config) {
    const attributes = node.transformAttributes(config);
    const children = node.transformChildren(config);
    const id = generateID(children, attributes);

    return new Tag(
      this.render as string,
      {
        ...attributes,
        id,
      },
      children
    );
  },
};

export default heading;
