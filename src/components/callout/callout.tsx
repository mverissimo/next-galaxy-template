import React from 'react';
import type { ReactNode, ReactElement } from 'react';

import {
  LightBulbIcon,
  ExclamationCircleIcon,
  ExclamationTriangleIcon,
  FireIcon,
  InformationCircleIcon,
} from '@heroicons/react/20/solid';

export interface CalloutProps {
  /**
   * Semantic appearance
   */
  appearance?: 'caution' | 'danger' | 'info' | 'tip' | 'note';

  /**
   * Optional title
   */
  title?: string;

  /**
   *
   */
  children: ReactNode;
}

const APPEARANCES = {
  caution: {
    title: 'caution',
    icon: ExclamationTriangleIcon,
    className: 'text-yellow-700 bg-yellow-50',
  },
  danger: {
    title: 'danger',
    icon: FireIcon,
    className: 'text-red-700 bg-red-50',
  },
  info: {
    title: 'info',
    icon: ExclamationCircleIcon,
    className: 'text-blue-700 bg-blue-50',
  },
  tip: {
    title: 'tip',
    icon: LightBulbIcon,
    className: 'text-green-700 bg-green-50',
  },
  note: {
    title: 'note',
    icon: InformationCircleIcon,
    className: 'text-gray-700 bg-gray-50',
  },
};

function Callout(props: CalloutProps) {
  let { appearance = 'note', title, children, ...rest } = props;

  let element = APPEARANCES[appearance];

  return (
    <div
      className={`
        p-4
        mb-6

        border
        border-l-4
        border-l-current

        rounded-md
        text-sm


        ${element.className}
      `}
      {...rest}
    >
      <div
        className="
          flex
          flex-col
        "
      >
        <div
          className="
            flex
            items-center

            uppercase
            font-bold
          "
        >
          {React.createElement(element.icon, {
            className: 'w-6 h-6 mr-2',
          })}
          {title ?? element.title}
        </div>
        {React.Children.toArray(children).map((child, index) =>
          React.cloneElement(child as ReactElement, {
            key: index,
            className: 'mt-1 mb-0 text-slate-700',
          })
        )}
      </div>
    </div>
  );
}

export default Callout;
