import type { ReactNode } from 'react';

import { Aside } from './components/aside';
import { Pagination } from './components/pagination';
import { TableOfContents } from './components/table-of-contents';

interface DocsLayoutProps {
  markdoc: Record<string, any> | undefined;
  children: ReactNode;
}

function DocsLayout(props: DocsLayoutProps) {
  const { markdoc, children } = props;

  return (
    <div
      className="
        relative
        px-4

        w-full
        max-w-full
        mx-auto

        lg:flex
        xl:max-w-8xl
      "
    >
      <Aside />
      <main
        className="
          flex-auto

          py-12
          w-full
          max-w-4xl

          lg:px-12
        "
      >
        <header className="mb-9">
          <h1
            className="
              block

              mb-2

              text-3xl
              text-slate-900
              tracking-tight
              font-semibold

              dark:text-white
            "
          >
            {markdoc?.frontmatter.title}
          </h1>
          <p
            className="
              block
              mt-0
        
              text-base
              text-slate-500

              dark:text-slate-400
            "
          >
            {markdoc?.frontmatter.description}
          </p>
          <hr className="block my-12 bg-gray-200" />
        </header>

        {children}

        <Pagination />
      </main>

      <TableOfContents contents={markdoc?.content} />
    </div>
  );
}

export default DocsLayout;
