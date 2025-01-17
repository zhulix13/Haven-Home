import reviewsList from "./reviews"

function Reviews () {
   return(
     <div className= 'mt-14 flex flex-col md:w-[90%]  mx-auto items-center h-[75vh]'>
          <h1 className="font-clash text-[45px] font-bold text-center">What our happy clients say</h1>
          <p className="font-sans font-regular text-2xl w-3/4 text-center mt-3">
            We have provided services to thousands of people  across Nigeria and these are some of the reviews we go from our clients.
          </p>
          <div className="grid grid-cols-3 ">
            <div className="flex flex-col border border-[#E0EAFE] relative">
            <div class="absolute top-0 left-0  border-[10px] border-black rotate-[30deg]"></div>
            <div class="absolute top-1 left-2 w-1.5  bg-black rotate-[30deg]"></div>
               <div>wfwvfifwifgwujkfwfhvjkcvbsicsyicwhfwvhfwvifvwfvwfvuh</div>
            </div>
          </div>
     </div>
   )
}

export default Reviews