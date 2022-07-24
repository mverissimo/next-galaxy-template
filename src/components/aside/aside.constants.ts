type NavCollection = {
  title: string;
  slug: string;
  children?: {
    title: string;
    slug: string;
    status?: string;
  }[];
}[];

const NAV: NavCollection = [
  {
    title: 'Getting Started',
    slug: 'getting-started',
  },
  {
    title: 'Design Tokens',
    slug: 'design-tokens',
    children: [
      {
        title: 'Color',
        slug: 'color',
      },
      {
        title: 'Typography',
        slug: 'typography',
      },
      {
        title: 'Shadow',
        slug: '/',
      },
      {
        title: 'Spacing',
        slug: 'spacing',
      },
      {
        title: 'Radius',
        slug: 'radius',
      },
      {
        title: 'Viewport',
        slug: 'viewport',
      },
    ],
  },
  {
    title: 'Layout',
    slug: 'layout',
    children: [
      {
        title: 'Container',
        slug: 'container',
      },
      {
        title: 'Grid',
        slug: 'grid',
      },
      {
        title: 'Paper',
        slug: 'paper',
        status: 'new',
      },
      {
        title: 'Simple Grid',
        slug: 'simple-grid',
        status: 'new',
      },
      {
        title: 'Spacer',
        slug: 'spacer',
        status: 'new',
      },
      {
        title: 'Stack',
        slug: 'stack',
      },
    ],
  },
  {
    title: 'Forms',
    slug: 'forms',
    children: [
      {
        title: 'Button',
        slug: 'button',
      },
      {
        title: 'Checkbox',
        slug: 'checkbox',
      },
      {
        title: 'Form Control',
        slug: 'form-control',
        status: 'new',
      },
      {
        title: 'Icon Button',
        slug: 'icon-button',
      },
      {
        title: 'Input',
        slug: 'input',
      },
      {
        title: 'Number Input',
        slug: 'number-input',
        status: 'new',
      },
      {
        title: 'Radio',
        slug: 'radio',
      },
      {
        title: 'Select',
        slug: 'select',
      },
      {
        title: 'Switch',
        slug: 'switch',
        status: 'new',
      },
      {
        title: 'Textarea',
        slug: 'textarea',
      },
    ],
  },
  {
    title: 'Data display',
    slug: 'data-display',
    children: [
      {
        title: 'Badge',
        slug: 'components/badge',
      },
      {
        title: 'Divider',
        slug: 'divider',
        status: 'new',
      },
      {
        title: 'Table',
        slug: 'table',
        status: 'new',
      },
      {
        title: 'Tag',
        slug: 'tag',
        status: 'new',
      },
    ],
  },
  {
    title: 'Feedback',
    slug: 'feedback',
    children: [
      {
        title: 'Alert',
        slug: 'alert',
      },
      {
        title: 'Skeleton',
        slug: 'skeleton',
        status: 'new',
      },
      {
        title: 'Spinner',
        slug: 'spinner',
      },
      {
        title: 'Toast',
        slug: 'toast',
      },
    ],
  },
  {
    title: 'Typography',
    slug: 'typography',
    children: [
      {
        title: 'Heading',
        slug: 'heading',
      },
      {
        title: 'Text',
        slug: 'text',
      },
    ],
  },
  {
    title: 'Overlay',
    slug: 'overlay',
    children: [
      {
        title: 'Alert Dialog',
        slug: 'alert-dialog',
      },
      {
        title: 'Drawer',
        slug: 'drawer',
        status: 'new',
      },
      {
        title: 'Menu',
        slug: 'menu',
        status: 'new',
      },
      {
        title: 'Modal',
        slug: 'modal',
      },
      {
        title: 'Popover',
        slug: 'popover',
      },
      {
        title: 'Tooltip',
        slug: 'tooltip',
      },
    ],
  },
  {
    title: 'Disclosure',
    slug: 'disclosure',
    children: [
      {
        title: 'Accordion',
        slug: 'accordion',
        status: 'new',
      },
      {
        title: 'Tabs',
        slug: 'tabs',
      },
      {
        title: 'Visually Hidden',
        slug: 'visually-hidden',
        status: 'new',
      },
    ],
  },
  {
    title: 'Media',
    slug: 'media',
    children: [
      {
        title: 'Icon',
        slug: 'icon',
      },
      {
        title: 'Close Button',
        slug: 'close-button',
      },
    ],
  },
];

export default NAV;
