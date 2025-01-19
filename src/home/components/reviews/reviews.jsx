import reviewsList from "./reviews"
import { MdOutlineRateReview } from "react-icons/md";
import transcorp from '../../../assets/companies/transcorp.png'
import continental from '../../../assets/companies/lagos continental.png'
import grandhill from '../../../assets/companies/grand hill hotel.png'
import diamond from '../../../assets/companies/black diamond.png'
import bayrock from '../../../assets/companies/bayrock.png'

function Reviews () {
   return(
     <div className= 'mt-14 flex flex-col md:w-[90%] py-10 gap-4 mx-auto items-center h-auto'>
          <h1 className="font-clash text-[45px] font-bold text-center">What our happy clients say</h1>
          <p className="font-sans font-regular text-2xl w-3/4 text-center mt-3">
            We have provided services to thousands of people  across Nigeria and these are some of the reviews we got from our clients.
          </p>
          <div className="grid mx-auto gap-x-5 grid-cols-1 md:grid-cols-3  mt-8 ">
            {reviewsList.map((review) => (
               <div className="flex flex-col gap-7 pt-8 shadow-inset-dark rounded-3xl px-3 py-3  justify-evenly border  w-[400px] border-[#E0EAFE]">
                  <MdOutlineRateReview className="h-10 w-10"/>
                  <h1 className="font-sans font-regular px-4 text-center text-[20px]">{`"${review.message}"`}</h1>
                  <div className="flex items-center justify-evenly gap-2">
                     <div><img src={review.customerImage} alt='customer-image' /></div>
                     <div className="font-sans flex flex-col items-center gap-3  font-bold text-2xl">
                        <h1>{review.customerName}</h1>
                        <h1>Customer</h1>
                     </div>
                  </div>
               </div>
            ))}
          </div>
          <div className="mt-16">
          <h1 className="font-bold font-clash text-[45px]  text-center">Trusted by over 1K+ companies</h1>
          <div className="grid grid-cols-2 mx-auto space-x-4 md:grid-cols-5 mt-10 ">
            <div className="shadow-md">
               <img src={transcorp} alt="" className="mx-auto mt-3" />
            </div>
            <div className="shadow-md">
               <img src={bayrock} alt="" className="mx-auto mt-3" />
            </div>
            <div className="shadow-md">
               <img src={continental} alt="" className="mx-auto mt-3"/>
            </div>
            <div className="shadow-md">
               <img src={diamond} alt="" className="mx-auto mt-3"/>
            </div>
            <div className="shadow-md">
               <img src={grandhill} alt="" className="mx-auto mt-3"/>
            </div>
         </div>
          </div>
     </div>
   )
}

export default Reviews