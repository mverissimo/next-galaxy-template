import * as React from 'react';
import type { HTMLAttributes } from 'react';

interface ArticleProps extends HTMLAttributes<HTMLElement> {
  frontmatter: {
    title: string;
    description: string;
  };
}

function Article(props: ArticleProps) {
  let { frontmatter, children } = props;

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
          "
        >
          {frontmatter.title}
        </h1>
        <p
          className="
          block
          mt-0
    
          text-base
          text-gray-500
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
