import { List } from '@radix-ui/react-tabs';
import type { TabsListProps } from '@radix-ui/react-tabs';

function TabsList(props: TabsListProps) {
  return (
    <List
      className="
        relative
        p-2

        text-white

        rounded-t-md
        bg-gray-800
      "
      {...props}
    />
  );
}

export default TabsList;
