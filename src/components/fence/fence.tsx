import 'prismjs';

import * as React from 'react';

//@ts-ignore
import Prism from 'react-prism';
import useClipboard from 'react-use-clipboard';

import {
  ClipboardIcon,
  ClipboardDocumentCheckIcon,
} from '@heroicons/react/24/outline';

interface FenceProps {
  language: string;
  children: string;
}

function Fence(props: FenceProps) {
  let { language, children: code } = props;

  let [isCopied, setCopied] = useClipboard(code, {
    successDuration: 1000,
  });

  return (
    <div className="relative" aria-live="polite">
      <Prism key={language} component="pre" className={`language-${language}`}>
        {code}
      </Prism>
      <button
        className="
          absolute
          top-4
          right-4

          inline-flex
          items-center
          justify-center

          p-1
          text-white

          bg-slate-700
          rounded

          transition
          duration-100
          ease-in

          appearance-none
          cursor-pointer
          select-none

          focus:outline-none

          hover:text-slate-200
          hover:bg-slate-800
        "
        onClick={setCopied}
        title="copy"
      >
        {isCopied ? (
          <ClipboardDocumentCheckIcon className="h-4 w-4" />
        ) : (
          <ClipboardIcon className="h-4 w-4" />
        )}
      </button>
    </div>
  );
}

export default Fence;
