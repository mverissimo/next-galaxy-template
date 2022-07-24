import * as React from 'react';
import type { HTMLAttributes } from 'react';

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  level: 1 | 2 | 3 | 4 | 5 | 6;
}

function Heading(props: HeadingProps) {
  const { id, level = 1, children } = props;

  return React.createElement(
    `h${level}`,
    {
      id,
    },
    children
  );
}

export default Heading;
