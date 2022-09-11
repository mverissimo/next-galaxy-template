import Link from 'next/link';

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';

import { usePagination } from './use-pagination';

function Pagination() {
  let { prev, next } = usePagination();

  return (
    <div
      className="
        flex
        flex-col
        gap-4

        w-full

        md:flex-row
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
              text-gray-700

              border
              border-gray-100
              border-solid
              rounded-md

              transition
              duration-150

              focus:ring-2
              focus:ring-blue-100
              focus:border-blue-200
              focus:outline-none

              hover:border-gray-200
              hover:bg-gray-50
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
                  text-gray-500
                "
              >
                previous
              </span>
              <span
                className="
              block

              text-lg
              text-gray-700

              font-semibold
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
              text-gray-700

              border
              border-gray-100
              border-solid
              rounded-md

              transition
              duration-150

              focus:ring-2
              focus:ring-blue-100
              focus:border-blue-200
              focus:outline-none

              hover:border-gray-200
              hover:bg-gray-50
            "
          >
            <div>
              <span
                className="
                  block

                  text-xs
                  text-gray-500
                "
              >
                next
              </span>
              <span
                className="
                  block

                  text-lg
                  text-gray-700

                  font-semibold
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
