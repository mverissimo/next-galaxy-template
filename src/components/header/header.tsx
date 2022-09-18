import Link from 'next/link';
import dynamic from 'next/dynamic';

import { SelectTheme } from './select-theme';

const Burger = dynamic(() => import('./burger'));

function Header() {
  return (
    <header
      className="
        sticky
        top-0
        z-20

        flex

        w-full
        h-[4rem]
        py-3

        mx-auto

        border-b
        border-gray-200

        backdrop-blur
        supports-backdrop-blur:bg-white/80

        dark:border-gray-800
        dark:supports-backdrop-blur:bg-gray-900/25
      "
    >
      <div
        className="
          flex
          items-center
          justify-between

          px-4

          w-full
          h-full
          mx-auto
          max-w-full

          lg:max-w-8xl
        "
      >
        <div className="flex items-center">
          <Burger />
          <Link
            href="/"
            className="
              flex
              flex-row
              items-center
        
              font-bold
              text-gray-600

              dark:text-white
            "
            passHref
          >
            🔮 Galaxy
          </Link>
        </div>

        <SelectTheme />
      </div>
    </header>
  );
}

export default Header;
