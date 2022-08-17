import { Root } from '@radix-ui/react-tabs';
import type { TabsProps as TabsPropsBase } from '@radix-ui/react-tabs';

interface TabsProps extends TabsPropsBase {}

function Tabs(props: TabsProps) {
  return <Root {...props} />;
}

export default Tabs;
