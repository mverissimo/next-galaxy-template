import * as React from 'react';

import Highlight, { defaultProps } from 'prism-react-renderer';
import type { Language } from 'prism-react-renderer';

import useClipboard from 'react-use-clipboard';

import { calculateLinesToHighlight } from './fence.utils';

import {
  ClipboardIcon,
  ClipboardDocumentCheckIcon,
} from '@heroicons/react/24/outline';

interface FenceProps {
  /**
   * Prism language
   */
  language: Language;

  /**
   * Lines to highlight
   */
  highlight: string;

  /**
   *
   */
  children: string;
}

function Fence(props: FenceProps) {
  let { language, highlight, children: code } = props;

  let [isCopied, setCopied] = useClipboard(code, {
    successDuration: 1000,
  });

  let shouldHighlightLine = calculateLinesToHighlight(highlight);

  return (
    <div className="relative" aria-live="polite">
      <Highlight
        {...defaultProps}
        code={code.trim()}
        language={language}
        theme={undefined}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={style}>
            {tokens.map((line, index) => {
              const lineProps = getLineProps({ line, key: index });

              if (shouldHighlightLine(index)) {
                lineProps.className = `${lineProps.className} -mx-4 pl-3 pr-4 border-l-4 border-purple-400 bg-purple-300/[0.10]`;
              }

              return (
                <div key={index} {...lineProps}>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </div>
              );
            })}
          </pre>
        )}
      </Highlight>

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
