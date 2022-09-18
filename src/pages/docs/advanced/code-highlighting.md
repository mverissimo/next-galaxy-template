---
title: Code Highlighting
description: Build acessible and beautiful interfaces.
---

## Usage

This template use `Prism` and `prism-react-renderer` to highlight the code blocks. This section covers how you can customize it.

### Line highlight

To markup single lines, use the [attribute](https://markdoc.dev/docs/attributes) `{% highlight="{1,2,3,4,5}" %}` or `{% highlight="{1-5}" %}` to highlight a range.

```tsx {% highlight="{2}" %}
function Button(props) {
  let { children } = props;

  return <button>{children}</button>;
}
```
