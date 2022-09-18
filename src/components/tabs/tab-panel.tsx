import React from 'react';
import type { ReactNode } from 'react';

import { Tab } from '@headlessui/react';
import { cn } from '@/utils/classnames';

export interface TabPanelProps {
  children: ReactNode;
}

function TabPanel(props: TabPanelProps) {
  let { children, ...rest } = props;

  return (
    <Tab.Panel
      className="bg-gray-100 dark:bg-gray-700/5 rounded-b-md text-sm focus:outline-none"
      {...rest}
    >
      {React.Children.map(children, (child) => {
        return (
          <div
            className={cn(
              '[&>p]:m-0 [&>div>pre]:m-0 [&>div>pre]:rounded-t-none [&>div>pre]:dark:!bg-gray-700/5 [&>div>pre]:dark:border-t-0',
              //@ts-ignore
              Boolean(child?.props.language) ? '' : 'p-4 '
            )}
          >
            {child}
          </div>
        );
      })}
    </Tab.Panel>
  );
}

export default TabPanel;
