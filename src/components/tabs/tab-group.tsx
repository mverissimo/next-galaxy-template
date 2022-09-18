import { Tab } from '@headlessui/react';
import type { ReactNode } from 'react';

export interface TabGroupProps {
  children: ReactNode;
}

function TabGroup(props: TabGroupProps) {
  let { children, ...rest } = props;

  return (
    <div className="w-full my-6">
      <Tab.Group {...rest}>{children}</Tab.Group>
    </div>
  );
}

export default TabGroup;
