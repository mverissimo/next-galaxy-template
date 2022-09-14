---
title: Configuration
description: This section cover some configurations that you need do after clone the template.
---

## Sidebar

The sidebar is directly linked with `pagination`, so be careful when modifying this file.

```tsx
/*
 * Example
 */
export const SIDEBAR = [
  {
    title: 'Getting Started',
    children: [
      {
        title: 'Overview',
        slug: '/docs',
      },
    ],
  },
];
```

### Edit page

Every page has a button `Edit this page on GitHub`, so don't forget to set the repository url
