import Header from "../../constant/Header"

function FirstPage(){
   return(
      <div className="h-[100vh] bg-main ">
         <Header/>
         <div className=" w-[90%] bg-[#FFFFFF] mx-auto grid grid-cols-1 md:grid-cols-3 rounded-2xl py-4 shadow-lg mt-[50vh] px-2">
               <div className="flex gap-5 items-center flex-col">
                  <h1 className="font-clash font-semibold text-[35px]">
                  2+ Years Experience
                  </h1>
                  <p className="text-center ">
                     More than 2 years experience 
                      in production of furnitures
                  </p>
               </div>

               <div className="flex gap-5 items-center flex-col">
                  <h1 className="font-clash font-semibold text-[35px]">
                  500+ Happy Clients
                  </h1>
                  <p className="text-center ">
                     We are dedicated to making our clients happy and we are glad to have achieved that.
                  </p>
               </div>

               <div className="flex gap-5 items-center flex-col">
                  <h1 className="font-clash font-semibold text-[35px]">
                  1k+ Projects Finished
                  </h1>
                  <p className="text-center ">
                  In the past years till date, we have concluded 2000+ projectss
                  </p>
               </div>
         </div>
      </div>
   )
}

export default FirstPage