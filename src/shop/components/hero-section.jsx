import Header from "../../constant/Header";

function HeroSection({cart}){
   const Sets = ['DINING ROOM SETS', 'SOFA SETS', 'BEDROOM SETS', 'LUXURY ', 'CUSTOMIZED SETS', 'PROMO']

   return(
      <section className="bg-shop">
         <Header />

         <div className="h-[80vh] flex flex-col justify-end ">
            <div className="w-[95%] md:w-[85%] my-auto space-y-6 mx-auto ">
               <h1 className="font-clash text-2xl md:text-[40px] font-semibold md:font-bold underline text-center ">Shop</h1>

               {/* Sets Container */}
               <div className="grid grid-cols-2 md:grid-cols-3 max-w-full md:max-w-[80%] mx-auto gap-x-4 gap-y-8">
                  {Sets.map((set, index) => (
                     <div key={index} className=" flex justify-center text-center font-clash font-semibold py-3 rounded-2xl border border-black text-sm md:text-3xl  items-center bg-[#D9D9D9]">
                           {set}
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>
   )
}

export default HeroSection;