import type { RenderableTreeNode } from '@markdoc/markdoc';

import { collectHeadings } from './table-of-contents.utils';

type Heading = {
  id: string;
  level: number;
  title: string;
};

export function useHeadings(contents: RenderableTreeNode): {
  headings: Heading[];
} {
  let headings: Heading[] = collectHeadings(contents).filter(
    (item: Heading) => item.id && (item.level === 2 || item.level === 3)
  );

  return {
    headings,
  };
}
