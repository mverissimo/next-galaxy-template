import React from 'react';

import { Listbox, Transition } from '@headlessui/react';
import {
  MoonIcon,
  SunIcon,
  DesktopComputerIcon,
  CheckIcon,
} from '@heroicons/react/outline';

import { useTheme } from 'next-themes';
import { useIsMounted } from './use-is-mounted';

const THEMES = {
  dark: {
    id: 'dark',
    name: 'Dark',
    icon: MoonIcon,
  },
  light: {
    id: 'light',
    name: 'Light',
    icon: SunIcon,
  },
  system: {
    id: 'system',
    name: 'System',
    icon: DesktopComputerIcon,
  },
};

export function SelectTheme() {
  const isMounted = useIsMounted();
  const { theme, setTheme } = useTheme();

  const currentTheme = theme as keyof typeof THEMES;

  if (!isMounted()) {
    return null;
  }

  return (
    <Listbox value={theme} onChange={setTheme}>
      <div className="relative">
        <Listbox.Button
          className="
            inline-flex
            items-center

            px-3
            py-1.5

            text-sm
            text-slate-600
            font-medium

            border
            border-gray-200
            rounded-lg
            bg-white

            transition
            duration-150

            focus:ring-1
            focus:outline-none
            focus:ring-blue-500
            focus:border-blue-500

            hover:bg-slate-50
          "
        >
          {React.createElement(THEMES[currentTheme].icon, {
            className: 'w-4 h-4 mr-1',
          })}
          {currentTheme}
        </Listbox.Button>
        <Transition
          as={React.Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options
            className="
              absolute
              mt-1.5

              overflow-auto

              w-28
              max-h-60

              py-1.5

              border
              border-gray-200
              rounded-lg
              bg-white

              shadow-xs

              focus:outline-none
            "
          >
            {Object.values(THEMES).map(({ id, name }) => (
              <Listbox.Option
                key={id}
                value={id}
                className={({ active }) => `
                  flex
                  items-center
                  justify-between

                  px-3
                  py-1.5

                  cursor-pointer
                  select-none

                  text-sm
                  font-medium

                  transition-colors
                  duration-300

                  hover:text-blue-600
                  hover:bg-blue-50

                  ${
                    active
                      ? 'text-blue-600 bg-slate-50'
                      : 'text-slate-500 bg-white'
                  }
                `}
              >
                {({ selected }) => (
                  <React.Fragment>
                    {name}
                    {selected ? (
                      <CheckIcon className="h-4 w-4" aria-hidden="true" />
                    ) : null}
                  </React.Fragment>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
}
