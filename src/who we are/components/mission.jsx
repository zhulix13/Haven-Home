function Mission() {
  return (
    <section className="flex flex-col items-center space-y-4 mt-4">
      <h1 className="text-center font-clash font-semibold text-[35px] md:text-[45px] max-w-[500px]">
        Our Mission
      </h1>
      <p className="text-center text-wrap font-sans text-base md:text-2xl font-regular max-w-[450px]">
        We have attended thousands of events across Nigeria and these are some
        of them.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 max-w-[90%] space-y-3 gap-x-4 mx-auto">
  {/* First Card */}
  <div className="relative flex flex-col items-start gap-6 bg-[#EAEBED] shadow-inset-gray p-8 rounded-lg">
    {/* SVG Icon Positioned Top-Right */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="absolute top-4 right-4 w-8 h-8 text-black"
      fill="none"
      viewBox="0 0 32 32"
      stroke="currentColor"
      strokeWidth="3"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 26L26 6m0 0v12m0-12H14" />
    </svg>
    <h1 className="font-clash font-semibold md:text-2xl text-xl">
      Quality assurance is our top priority
    </h1>
    <p className="text-sans font-regular text-base md:text-xl">
      Ensuring excellence in all our products.
    </p>
  </div>

  {/* Second Card */}
  <div className="relative flex flex-col items-start gap-6 bg-[#EAEBED] shadow-inset-gray p-8 rounded-lg">
    {/* SVG Icon Positioned Top-Right */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="absolute top-4 right-4 w-8 h-8 text-black"
      fill="none"
      viewBox="0 0 32 32"
      stroke="currentColor"
      strokeWidth="3"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 26L26 6m0 0v12m0-12H14" />
    </svg>
    <h1 className="font-clash font-semibold md:text-2xl text-xl">
      Product durability & reliability
    </h1>
    <p className="text-sans font-regular text-base md:text-xl">
      Our products boast durability and reliability, lasting satisfaction.
    </p>
  </div>

  {/* Third Card */}
  <div className="relative flex flex-col items-start gap-6 bg-[#EAEBED] shadow-inset-gray p-8 rounded-lg">
    {/* SVG Icon Positioned Top-Right */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="absolute top-4 right-4 w-8 h-8 text-black"
      fill="none"
      viewBox="0 0 32 32"
      stroke="currentColor"
      strokeWidth="3"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 26L26 6m0 0v12m0-12H14" />
    </svg>
    <h1 className="font-clash font-semibold md:text-2xl text-xl">
      High ecological standards
    </h1>
    <p className="text-sans font-regular text-base md:text-xl">
      Upholding high ecological standards in all facets of our operations.
    </p>
  </div>
</div>

    </section>
  );
}

export default Mission;
