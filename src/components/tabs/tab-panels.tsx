import { Tab } from '@headlessui/react';
import type { ReactNode } from 'react';

import { cn } from '@/utils/classnames';

export interface TabPanelsProps {
  children: ReactNode;
}

function TabPanels(props: TabPanelsProps) {
  let { children, ...rest } = props;

  return (
    <Tab.Panels className={cn('rounded-b-md bg-gray-100')} {...rest}>
      {children}
    </Tab.Panels>
  );
}

export default TabPanels;
