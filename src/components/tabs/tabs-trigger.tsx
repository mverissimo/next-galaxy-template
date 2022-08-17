import { Trigger } from '@radix-ui/react-tabs';
import type { TabsTriggerProps } from '@radix-ui/react-tabs';

function TabsTrigger(props: TabsTriggerProps) {
  let { value, ...rest } = props;

  return (
    <Trigger
      className="
        relative

        px-2
        py-1.5

        text-sm
        text-white
        tracking-tight

        rounded-lg
      "
      value={value}
      {...rest}
    >
      {value}
    </Trigger>
  );
}

export default TabsTrigger;
