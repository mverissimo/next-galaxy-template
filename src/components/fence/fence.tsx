import * as React from 'react';

import Highlight, { Prism, defaultProps } from 'prism-react-renderer';
import type { Language } from 'prism-react-renderer';

import useClipboard from 'react-use-clipboard';

import { calculateLinesToHighlight } from './fence.utils';

import { ClipboardIcon, CheckIcon } from '@heroicons/react/24/outline';

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

/** NOTE:
 * https://github.com/markdoc/docs/blob/main/components/Code.js#L9
 */
//@ts-ignore
Prism.languages.markdoc = {
  tag: {
    pattern: /{%(.|\n)*?%}/i,
    inside: {
      tagType: {
        pattern: /^({%\s*\/?)(\w*|-)*\b/i,
        lookbehind: true,
      },
      id: /#(\w|-)*\b/,
      string: /".*?"/,
      equals: /=/,
      number: /\b\d+\b/i,
      variable: {
        pattern: /\$[\w.]+/i,
        inside: {
          punctuation: /\./i,
        },
      },
      function: /\b\w+(?=\()/,
      punctuation: /({%|\/?%})/i,
      boolean: /false|true/,
    },
  },
  variable: {
    pattern: /\$\w+/i,
  },
  function: {
    pattern: /\b\w+(?=\()/i,
  },
};

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
        Prism={Prism}
        language={language}
        code={code.trim()}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={style}>
            {tokens.map((line, index) => {
              const lineProps = getLineProps({ line, key: index });

              if (shouldHighlightLine(index)) {
                lineProps.className = `${lineProps.className} -mx-4 pl-3 pr-4 border-l-4 border-blue-600 bg-blue-300/10 dark:border-blue-600/80 dark:bg-gray-700/20`;
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

          bg-gray-600
          rounded

          transition
          duration-100
          ease-in

          appearance-none
          cursor-pointer
          select-none

          focus:outline-none

          hover:text-slate-200
          hover:bg-gray-700
          
          dark:bg-gray-600/20
          dark:hover:bg-gray-700/10
        "
        onClick={setCopied}
        title={isCopied ? 'copied' : 'copy'}
      >
        {isCopied ? (
          <CheckIcon className="h-4 w-4" />
        ) : (
          <ClipboardIcon className="h-4 w-4" />
        )}
      </button>
    </div>
  );
}

export default Fence;
