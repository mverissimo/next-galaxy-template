import React from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/20/solid/index.js';

function Burger() {
  const [active, setActive] = React.useState(false);

  React.useEffect(() => {
    const aside = document.querySelector('#aside');

    if (active) {
      aside?.classList.remove('hidden');
    } else {
      aside?.classList.add('hidden');
    }
  }, [active]);

  return (
    <button
      id="burger"
      type="button"
      aria-label={active ? 'Close menu' : 'Open menu'}
      className="
        lg:hidden

        inline-flex 
        items-center 
        justify-center 

        p-1.5
        mr-4

        text-slate-600 

        border 
        border-solid 
        rounded-md 
        bg-transparent
        
        transition 
        duration-200 
        ease-in 
        
        appearance-none 
        select-none

        focus:ring-2 
        focus:ring-blue-600 
        focus:outline-none 
        focus:bg-gray-100

        dark:text-white
        dark:bg-gray-900
        dark:border-gray-800
        dark:focus-visible:border-blue-500
      "
      onClick={() => setActive((prev) => !prev)}
    >
      {active ? (
        <XMarkIcon className="w-5 h-5" />
      ) : (
        <Bars3Icon className="w-5 h-5" />
      )}
    </button>
  );
}

export default Burger;
