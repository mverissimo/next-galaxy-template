import * as React from 'react';
import type { HTMLAttributes } from 'react';

interface ArticleProps extends HTMLAttributes<HTMLElement> {
  frontmatter: Record<string, any> | undefined;
}

function Article(props: ArticleProps) {
  let { frontmatter, children } = props;

  if (!frontmatter?.title || !frontmatter?.description) {
    return null;
  }

  return (
    <React.Fragment>
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
          {frontmatter.title}
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
          {frontmatter.description}
        </p>
        <hr className="block my-12 bg-gray-200" />
      </header>

      {children}
    </React.Fragment>
  );
}

export default Article;
