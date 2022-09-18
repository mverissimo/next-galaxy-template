import type { ReactNode } from 'react';
import { Disclosure as DisclosureBase } from '@headlessui/react';

interface DisclosureProps {
  children: ReactNode;
}

function Disclosure(props: DisclosureProps) {
  let { children } = props;

  return <DisclosureBase.Panel>{children}</DisclosureBase.Panel>;
}

export default Disclosure;
