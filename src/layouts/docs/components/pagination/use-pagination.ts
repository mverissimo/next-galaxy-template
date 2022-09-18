import { SIDEBAR } from '@/config/sidebar';
import type { SidebarItem } from '@/config/sidebar';

import { useRouter } from 'next/router';

type LinkItem = Pick<SidebarItem, 'title' | 'slug'>;

export function usePagination() {
  let router = useRouter();

  let prev: LinkItem | undefined;
  let next: LinkItem | undefined;

  let links = SIDEBAR.reduce<LinkItem[]>(
    (prev, next) => prev.concat(next.children),
    []
  );

  let makeURL = ({ title, slug }: LinkItem) => {
    return {
      title,
      slug,
    };
  };

  let getIndex = links.findIndex((item) => {
    return router.pathname === item?.slug;
  });

  if (getIndex > 0) {
    prev = makeURL(links[getIndex - 1]);
  }

  if (getIndex !== -1 && getIndex < links.length - 1) {
    next = makeURL(links[getIndex + 1]);
  }

  return {
    prev,
    next,
  };
}
