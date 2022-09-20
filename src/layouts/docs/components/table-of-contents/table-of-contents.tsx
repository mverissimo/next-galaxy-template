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
    <aside className="sticky inset-0 w-64 h-full">
      <div
        className="
          hidden

          sticky
          top-64
        
          py-12

          lg:block
        "
      >
        <h2
          className="
            block
            mb-4
        
            text-sm
            text-slate-900
            dark:text-white
        
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
                        ? 'text-blue-800 hover:text-blue-900'
                        : 'text-slate-500 dark:text-slate-300 hover:text-slate-600 dark:hover:text-slate-400'
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
