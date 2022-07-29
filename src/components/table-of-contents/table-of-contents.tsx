import React from 'react';
import type { RenderableTreeNode } from '@markdoc/markdoc';

import { useHeadings } from './use-headings';
import { useHeadingsObserver } from './use-headings-observer';

interface TableOfContentsProps {
  contents: RenderableTreeNode;
}

function TableOfContents(props: TableOfContentsProps) {
  let { contents } = props;

  let { headings } = useHeadings(contents);
  let { currentId } = useHeadingsObserver();

  if (!Boolean(headings.length)) {
    return null;
  }

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

                    ${level === 2 ? 'py-2 font-medium' : 'py-1 ml-4'}

                    ${
                      currentId === id
                        ? 'text-blue-500 hover:text-blue-600'
                        : 'text-slate-500 hover:text-slate-600'
                    }
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
