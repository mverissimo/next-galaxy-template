export type SidebarItem = {
  title: string;
  slug?: string;
  children: Array<{
    title: string;
    slug: string;
    status?: string;
  }>;
};

export const SIDEBAR: Array<SidebarItem> = [
  {
    title: 'Getting Started',
    children: [
      {
        title: 'Overview',
        slug: '/docs',
      },
    ],
  },
  {
    title: 'Components',
    children: [
      {
        title: 'Callout',
        slug: '/docs/components/callout',
      },
      {
        title: 'Disclosure',
        slug: '/docs/components/disclosure',
      },
      {
        title: 'Tabs',
        slug: '/docs/components/tabs',
      },
    ],
  },
  {
    title: 'Advanced',
    children: [
      {
        title: 'Configuration',
        slug: '/docs/advanced/configuration',
      },
      {
        title: 'Code Highlighting',
        slug: '/docs/advanced/code-highlighting',
      },
    ],
  },
];
