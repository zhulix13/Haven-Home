import image1 from '../../assets/livin room.png';
import image2 from '../../assets/furniture.png';
import image3 from '../../assets/Dining room.png';

function Categories() {
  return (
    <div className="my-[100px] flex flex-col gap-8">
      {/* Section Title */}
      <h1 className="text-center font-clash font-bold text-[35px] md:text-[45px]">
        Product Categories
      </h1>
      <p className="font-sans font-regular text-2xl md:text-2xl text-center px-4 leading-relaxed max-w-[750px] mx-auto">
        We have different types of furniture that will suit every angle of your home. 
        They are categorized as below.
      </p>

      {/* Categories Section */}
      <div className="flex flex-col md:flex-row md:justify-center md:items-center md:gap-10 mx-auto mt-10 w-full md:w-4/5">
        {/* Living Room */}
        <div className="flex flex-col items-center">
          <img
            src={image1}
            alt="living-room"
            className="w-full max-w-[300px] h-auto rounded-lg shadow-lg"
          />
          <h1 className="mt-5 text-center font-clash font-semibold text-2xl md:text-2xl">
            Living Room
          </h1>
        </div>

        {/* Arrow for Medium and Larger Screens */}
        <span className="hidden md:block px-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 150 20"
            fill="none"
            stroke="currentColor"
            width="150"
            height="20"
          >
            <path
              d="M0,10 H120 M120,10 L100,5 M120,10 L100,15"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>

        {/* Bed Room */}
        <div className="flex flex-col items-center">
          <img
            src={image2}
            alt="bed-room"
            className="w-full max-w-[300px] h-auto rounded-lg shadow-lg"
          />
          <h1 className="mt-5 text-center font-clash font-semibold text-2xl md:text-2xl">
            Bed Room
          </h1>
        </div>

        {/* Arrow for Medium and Larger Screens */}
        <span className="hidden md:block px-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 150 20"
            fill="none"
            stroke="currentColor"
            width="150"
            height="20"
          >
            <path
              d="M0,10 H120 M120,10 L100,5 M120,10 L100,15"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>

        {/* Dining Room */}
        <div className="flex flex-col items-center">
          <img
            src={image3}
            alt="dining-room"
            className="w-full max-w-[300px] h-auto rounded-lg shadow-lg"
          />
          <h1 className="mt-5 text-center font-clash font-semibold text-2xl md:text-2xl">
            Dining Room
          </h1>
        </div>
      </div>

      {/* Mobile Arrows */}
      <div className="md:hidden flex items-center justify-center mt-5 gap-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 150 20"
          fill="none"
          stroke="currentColor"
          width="150"
          height="20"
        >
          <path
            d="M0,10 H120 M120,10 L100,5 M120,10 L100,15"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 150 20"
          fill="none"
          stroke="currentColor"
          width="150"
          height="20"
        >
          <path
            d="M0,10 H120 M120,10 L100,5 M120,10 L100,15"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}

export default Categories;
