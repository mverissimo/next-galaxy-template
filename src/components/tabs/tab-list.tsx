import { Tab } from '@headlessui/react';
import type { ReactNode } from 'react';

export interface TabListProps {
  children: ReactNode;
}

function TabList(props: TabListProps) {
  let { children, ...rest } = props;

  return (
    <Tab.List
      className="p-2 bg-gray-50 dark:bg-gray-800 rounded-t-md"
      {...rest}
    >
      {children}
    </Tab.List>
  );
}

export default TabList;
