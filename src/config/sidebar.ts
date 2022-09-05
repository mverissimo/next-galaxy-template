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
        title: 'Installation',
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
        title: 'Tabs',
        slug: '/docs/components/tabs',
      },
    ],
  },
];
