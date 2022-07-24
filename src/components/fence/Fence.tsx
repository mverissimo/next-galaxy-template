import 'prismjs';

import * as React from 'react';

//@ts-ignore
import Prism from 'react-prism';
import useClipboard from 'react-use-clipboard';

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
      <Prism
        key={language}
        component="pre"
        className={`language-${language} !py-4 !text-sm !leading-6 !font-mono !bg-slate-800`}
      >
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

          bg-slate-600
          rounded

          transition
          duration-100
          ease-in

          appearance-none
          cursor-pointer
          select-none

          focus:ring-1
          focus:ring-gray-600
          focus:outline-none

          active:bg-slate-800

          hover:text-slate-200
          hover:bg-slate-700
        "
        onClick={setCopied}
        title="copy"
      >
        {isCopied ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
            />
          </svg>
        )}
      </button>
    </div>
  );
}

export default Fence;
