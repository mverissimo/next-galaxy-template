function SkipToContent() {
  return (
    <a
      href="#overview"
      className="
        sr-only 
        focus:not-sr-only 
        focus-visible:not-sr-only 

        focus-visible:fixed 
        focus-visible:top-6 
        focus-visible:left-6 

        focus-visible:z-30

        focus-visible:py-4 
        focus-visible:px-4 

        focus-visible:text-slate-900 
        focus-visible:text-base 

        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-blue-600

        focus-visible:rounded-lg
        focus-visible:bg-gray-100
      "
    >
      Skip to Content
    </a>
  );
}

export default SkipToContent;
