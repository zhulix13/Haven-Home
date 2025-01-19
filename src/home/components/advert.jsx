import Sale from '../../assets/sale.png'

function Advert (){
   return(
      <section className="mt-7 md:flex ">
         <div className='flex-1 '>
            <img src={Sale} alt='advert' className='w-full ' />
         </div>

         <div className='flex-1 flex items-center justify-center bg-[#E0EAFE]'>
            <div className='flex flex-col  w-full items-center gap-4 '>
               <h1 className='font-clash font-bold text-[36px] text-center md:text-[45px] max-w-[500px] text-wrap '>Join our 20% discount 
               sales every friday.
               </h1>
               <div><button className='px-6 py-2 font-sans border border-black font-regular text-2xl rounded-3xl '>Shop Here </button></div>
            </div>
         </div>
      </section>
   )
}

export default Advert