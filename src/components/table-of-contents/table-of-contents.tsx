import React from 'react';
import type { RenderableTreeNode } from '@markdoc/markdoc';

import { collectHeadings } from './table-of-contents.utils';

interface TableOfContentsProps {
  contents: RenderableTreeNode;
}

type Headings = {
  id: string;
  level: number;
  title: string;
};

function TableOfContents(props: TableOfContentsProps) {
  let { contents } = props;

  let headings: Headings[] = collectHeadings(contents).filter(
    (item: Headings) => item.id && (item.level === 2 || item.level === 3)
  );

  return (
    <aside>
      <div
        className="
          hidden

          sticky
          top-20
        
          w-64
          py-12

          2xl:block
        "
      >
        <h2
          className="
            block
            mb-4
        
            text-sm
            text-slate-900
        
            font-semibold
            tracking-wide
        
          "
        >
          On this page
        </h2>
        <nav aria-label="Table of contents" className="overflow-x-hidden">
          <ul>
            {headings.map(({ id, level, title }) => {
              return (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className={`
                    block
                    text-sm
                    text-slate-500
                    hover:text-slate-600

                    ${level === 2 ? 'py-2 font-medium' : 'py-1 ml-4'}
                  `}
                  >
                    {title}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </aside>
  );
}

export default React.memo(TableOfContents);
