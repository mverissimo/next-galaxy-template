import type { RenderableTreeNode, Tag } from '@markdoc/markdoc';

export function collectHeadings(
  node: RenderableTreeNode,
  sections: Tag['attributes'] = []
) {
  if (node && typeof node !== 'string') {
    if (node?.name === 'Heading') {
      sections.push({
        title: node.children[0],
        ...node.attributes,
      });
    }

    if (node?.children) {
      for (const child of node.children) {
        collectHeadings(child as Tag, sections);
      }
    }
  }

  return sections;
}
