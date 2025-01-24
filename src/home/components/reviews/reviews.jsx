import reviewsList from "./reviews";
import { MdOutlineRateReview } from "react-icons/md";
import transcorp from '../../../assets/companies/transcorp.png';
import continental from '../../../assets/companies/lagos continental.png';
import grandhill from '../../../assets/companies/grand hill hotel.png';
import diamond from '../../../assets/companies/black diamond.png';
import bayrock from '../../../assets/companies/bayrock.png';

function Reviews() {
  return (
    <div className="mt-14 flex flex-col py-10 gap-8 mx-auto items-center h-auto max-w-[1200px]">
      {/* Section Title */}
      <h1 className="font-clash text-2xl font-bold text-center md:text-[45px]">
        What our happy clients say
      </h1>
      <p className="font-sans font-regular text-xl md:text-2xl text-center px-4 leading-relaxed max-w-[750px] mx-auto">
        We have provided services to thousands of people across Nigeria, and these are some of the reviews we got from our clients.
      </p>

      {/* Reviews Section */}
      <div className="grid mx-auto w-[90%] md:w-full gap-y-10 md:gap-y-14 gap-x-5 grid-cols-1 md:grid-cols-3 mt-8">
        {reviewsList.map((review) => (
          <div className="flex flex-col gap-6 pt-8 shadow-inset-dark rounded-3xl px-6 py-8 justify-evenly border border-[#E0EAFE] transition-transform hover:scale-[1.02]">
            <MdOutlineRateReview className="h-8 w-8 text-gray-700 mx-auto" />
            <h1 className="font-sans font-regular text-base md:text-xl px-4 text-center">
              {`"${review.message}"`}
            </h1>
            <div className="flex items-center justify-evenly gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <img
                  src={review.customerImage}
                  alt="customer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="font-sans flex flex-col items-center gap-2 font-bold text-base md:text-xl">
                <h1>{review.customerName}</h1>
                <h1>Customer</h1>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Trusted Companies Section */}
      <div className="mt-16">
        <h1 className="font-bold font-clash text-2xl text-center md:text-[45px]">
          Trusted by over 1K+ companies
        </h1>
        <div className="grid grid-cols-2 gap-6 mx-auto md:grid-cols-5 mt-10">
          {[transcorp, bayrock, continental, diamond, grandhill].map((company, index) => (
            <div key={index} className="shadow-md rounded-md p-4 flex items-center justify-center">
              <img src={company} alt={`company-${index}`} className="max-w-[100px] h-auto" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Reviews;
