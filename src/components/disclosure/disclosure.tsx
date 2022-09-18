import type { ReactNode } from 'react';
import { Disclosure as DisclosureBase } from '@headlessui/react';

interface DisclosureProps {
  children: ReactNode;
}

function Disclosure(props: DisclosureProps) {
  let { children } = props;

  return (
    <div className="mb-6">
      <DisclosureBase>{children}</DisclosureBase>
    </div>
  );
}

export default Disclosure;
