import { Fence } from '@/components/fence';

export const fence = {
  render: Fence,
  attributes: {
    content: {
      type: String,
    },
    high: {
      type: String,
    },
    highlight: {
      type: String,
    },
    language: {
      type: String,
    },
  },
};
