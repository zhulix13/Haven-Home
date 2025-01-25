import vector from '../../../assets/shop/Vector.png'


function Products (){
   return(
      <section className='mt-8 flex flex-col items-center'>
         <div className='flex items-center gap-2'>
         <img src={vector} alt="filter" className='h-6 w-6' />
         <p className='font-sans text-xl md:text-2xl'>Filter</p>
         </div>
         
      </section>
   )
}

export default Products;