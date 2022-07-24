import Link from 'next/link';

function Header() {
  return (
    <header
      className="
        sticky
        top-0
        z-50

        flex
        flex-none

        w-full
        h-[4rem]
        py-3

        mx-auto

        border-b
        border-gray-200
        bg-white
      "
    >
      <div
        className="
          flex
          px-4
          sm:px-6

          w-full
          h-full
          mx-auto
          max-w-full

          lg:max-w-8xl
        "
      >
        <Link href="/" passHref>
          <a
            href="/"
            className="
              flex
              flex-row
              items-center
        
              font-bold
              text-gray-600
            "
          >
            🔮 next-docs
          </a>
        </Link>
      </div>
    </header>
  );
}

export default Header;
