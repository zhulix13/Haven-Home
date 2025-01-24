import Header from "../../constant/Header";

function FirstPage() {
  return (
    <div className="bg-main">
      <Header />
      <div className="h-[100vh] md:h-[80vh]  flex flex-col justify-end ">
        <div className="w-[95%] md:w-[85%] mb-[150px] md:mb-10 bg-[#FFFFFF] text-center mx-auto grid grid-cols-1 md:grid-cols-3 rounded-2xl py-6 shadow-lg px-6">
          {/* Experience Section */}
          <div className="flex gap-5 flex-shrink items-center flex-col border-b-2 md:border-b-0 border-[#E0EAFE] pb-6 md:pb-0">
            <h1 className="font-clash font-semibold text-[25px] md:text-[40px]">
              2+ Years Experience
            </h1>
            <p className="text-center text-base md:text-xl">
              More than 2 years experience in production of furnitures
            </p>
          </div>

          {/* Clients Section */}
          <div className="flex gap-5 flex-shrink items-center flex-col border-b md:border-b-0 border-[#E0EAFE] pb-6 md:pb-0">
            <h1 className="font-clash font-semibold text-[25px] md:text-[40px]">
              500+ Happy Clients
            </h1>
            <p className="text-center text-base md:text-xl">
              We are dedicated to making our clients happy and we are glad to
              have achieved that.
            </p>
          </div>

          {/* Projects Finished Section */}
          <div className="flex gap-5 flex-shrink items-center flex-col border-b md:border-b-0 border-[#E0EAFE] pb-6 md:pb-0">
            <h1 className="font-clash font-semibold text-[25px] md:text-[40px]">
              1k+ Projects Finished
            </h1>
            <p className="text-center text-lg md:text-xl">
              In the past years till date, we have concluded 2000+ projects
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstPage;
