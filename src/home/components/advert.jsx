import Sale from '../../assets/sale.png'
import { useNavigate } from 'react-router-dom'

function Advert (){
   const navigate = useNavigate()

   const goToShop = () => {
      navigate('/shop')
   }


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
               <div><button 
               onClick={goToShop}
               className='px-6 py-2 font-sans border border-black font-regular text-2xl rounded-3xl '>Shop Here </button></div>
            </div>
         </div>
      </section>
   )
}

export default Advert