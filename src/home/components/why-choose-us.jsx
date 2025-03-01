import Quality from '../../assets/quality.png';
import Delivery from '../../assets/delivery.png';
import Money from '../../assets/money.png';
import Warranty from '../../assets/warranty.png';

function WhyChooseUs() {
   return (
      <section className="md:flex w-full md:w-[85%] mx-auto items-start h-auto md:h-[90vh]">
         <div className="flex-1 gap-4  items-center   flex flex-col">
            <h1 className="font-clash font-bold text-2xl md:text-[45px] text-center ">Why  Choose Us?</h1> 
               <p className="font-sans font-regular text-xl md:text-2xl text-center  w-4/5 text-wrap ">
                  We offer unique and quality furnitures for your homes and offices, our top-notch furnitures will give a good and beautiful look to your space. We have more than 1000+ projects completed and looking to do more.
               </p>
            
         </div>

         <div className="flex flex-1 justify-center items-center gap-12 flex-wrap">
            {/* First Group: Contains the first 2 children */}
            <div className="flex flex-col md:flex-row mt-12 gap-6">
               <div className="flex justify-center hover:scale-105 transition-all duration-300 items-center flex-col border gap-3 rounded-3xl p-6 shadow-custom-inset w-[250px]">
                  <img src={Quality} alt="High-quality" className="mx-auto mb-4" />
                  <h3 className="font-bold  text-xl md:text-2xl font-sans">High-quality</h3>
                  <p className="text-center font-sans  font-regular text-base md:text-xl">
                     Our furniture materials are built to last.
                  </p>
               </div>
               <div className="flex justify-center hover:scale-105 transition-all duration-300 items-center flex-col border gap-3 rounded-3xl p-6 shadow-custom-inset w-[250px]">
                  <img src={Money} alt="Affordable" className="mx-auto mb-4" />
                  <h3 className="font-bold text-xl md:text-2xl font-sans">Affordable</h3>
                  <p className="text-center font-sans font-regular text-base md:text-xl">
                     We offer competitive pricing without sacrificing quality.
                  </p>
               </div>
            </div>

            {/* Second Group: Contains the last 2 children */}
            <div className="flex flex-col md:flex-row gap-6">
               <div className="flex justify-center hover:scale-105 transition-all duration-300 items-center flex-col border gap-3 rounded-3xl p-6 shadow-custom-inset w-[250px]">
                  <img src={Delivery} alt="Fast-Delivery" className="mx-auto mb-4" />
                  <h3 className="font-bold text-xl md:text-2xl font-sans">Fast Delivery</h3>
                  <p className="text-center font-sans font-regular text-base md:text-xl">
                     We provide timely delivery.
                  </p>
               </div>
               <div className="flex justify-center hover:scale-105 transition-all duration-300 items-center flex-col border gap-3 rounded-3xl p-6 shadow-custom-inset w-[250px]">
                  <img src={Warranty} alt="Warranty" className="mx-auto mb-4" />
                  <h3 className="font-bold text-xl md:text-2xl font-sans">Warranty</h3>
                  <p className="text-center font-sans font-regular text-base md:text-xl">
                     We offer guarantees on our products & a solid return policy.
                  </p>
               </div>
            </div>
         </div>
      </section>
   );
}

export default WhyChooseUs;
