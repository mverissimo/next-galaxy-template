import Link from 'next/link';

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';

import { usePagination } from './use-pagination';

function Pagination() {
  let { prev, next } = usePagination();

  return (
    <div
      className="
        flex
        gap-4
        w-full
      "
    >
      {prev?.slug && (
        <Link href={prev.slug} passHref>
          <a
            href={prev.slug}
            rel="previous"
            className="
              flex
              justify-between
              items-center

              py-4
              px-6

              w-full

              text-right
            text-slate-600
            dark:text-slate-100

            border
            border-gray-200
            hover:border-gray-200
            dark:border-gray-100/5

            bg-white
            hover:bg-gray-50
            active:bg-gray-100
            dark:active:bg-gray-800/20
            dark:hover:bg-gray-800/10
            dark:bg-gray-800/5

              rounded-md
  
              ease-in
              duration-150
              transition-colors
  
              focus:ring-2
            focus:ring-gray-100
            focus:border-gray-200
              focus:outline-none
            dark:focus:ring-gray-600/10
            "
          >
            <ChevronLeftIcon
              className="
                relative
                -left-3
              
                w-8
                h-8
              "
            />
            <div>
              <span
                className="
                  block

                  text-xs
                  text-slate-500
                "
              >
                previous
              </span>
              <span
                className="
                  block

                  text-base
                  text-slate-600
                  dark:text-slate-100
                  md:text-lg
                  font-semibold

                  line-clamp-1
                "
              >
                {prev.title}
              </span>
            </div>
          </a>
        </Link>
      )}

      {next?.slug && (
        <Link href={next.slug} passHref>
          <a
            href={next.slug}
            rel="next"
            className="
              flex
              justify-between
              items-center

              py-4
              px-6

              w-full

              text-left
            text-slate-600
            dark:text-slate-100

            border
            border-gray-200
            hover:border-gray-200
            dark:border-gray-100/5

            bg-white
            hover:bg-gray-50
            active:bg-gray-100
            dark:active:bg-gray-800/20
            dark:hover:bg-gray-800/10
            dark:bg-gray-800/5

              rounded-md
  
              ease-in
              duration-150
              transition-colors
  
              focus:ring-2
            focus:ring-gray-100
            focus:border-gray-200
              focus:outline-none
            dark:focus:ring-gray-600/10
            "
          >
            <div>
              <span
                className="
                  block

                  text-xs
                  text-slate-500
                "
              >
                next
              </span>
              <span
                className="
                  block

                  text-base
                  text-slate-600
                  dark:text-slate-100
                  lg:text-lg

                  font-semibold
                  line-clamp-1
                "
              >
                {next.title}
              </span>
            </div>
            <ChevronRightIcon
              className="
                relative
                -right-3

                w-8
                h-8
              "
            />
          </a>
        </Link>
      )}
    </div>
  );
}

export default Pagination;
