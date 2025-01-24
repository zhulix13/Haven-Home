import Header from "../../constant/Header"
import room1 from '../../assets/product-categories/Rectangle 85.png'
import room2 from '../../assets/product-categories/Rectangle 86.png'

function Categories(){
   return(
      <section>
         <Header />
         <div className="py-28 mx-auto">
            <div className="flex flex-col  max-w-[90%] justify-between space-y-3 mx-auto md:flex-row  ">
               <div className=" space-y-5 ">
                  <h1 className="font-clash text-3xl md:text-4xl max-w-lg font-semibold">Discover our products categories.</h1>
                  <p className="font-sans font-regular text-base text-wrap max-w-lg md:text-xl">
                     Explore our wide range of high-quality products designed to suit every need. Whether you're looking for the latest trends, eco-friendly options, or budget-friendly solutions, we have something perfect just for you.
                  </p>
               </div>
               <div className="flex  gap-6">
                     <div><img src={room1} alt="room" className="rounded-lg shadow-lg" /></div>
                     <div><img src={room2} alt="room" className="rounded-lg shadow-lg" /></div>
                  </div>
            </div>
         </div>
      </section>
   )
}

export default Categories
