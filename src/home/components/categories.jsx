import image1 from '../../assets/livin room.png'
import image2 from '../../assets/furniture.png'
import image3 from '../../assets/Dining room.png'

function Categories() {
   return(
      <div className='mt-7 h-full flex flex-col justify-between gap-5'>
         <h1 className='text-center font-clash font-bold text-[45px]'>Product Categories</h1>
         <p className='font-sans font-regular text-2xl text-center px-4 leading-relaxed'>
            We have different types of furnitures that will suit every angle <br /> of your home, they are categorized as below
         </p>
         <div className='flex mx-auto mt-10 gap-2 items-center'>
            <div>
               <img src={image1} alt="living-room" />
            </div>
            
            <span className='px-2'>
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
                     stroke-width="2"
                     stroke-linecap="round"
                     stroke-linejoin="round"
                  />
               </svg>
            </span>

               <div>
                  <img src={image2} alt="living-room" />
               </div>

               <span className='px-2'>

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
                     stroke-width="2"
                     stroke-linecap="round"
                     stroke-linejoin="round"
                  />
                  </svg>               


               </span>
               <div>
                     <img src={image3} alt="living-room" />
                </div>

         </div>
      </div>
   )
}

export default Categories;
