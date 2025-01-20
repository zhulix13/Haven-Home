function CustomerService() {
   return (
     <section className="flex flex-col gap-3 mt-7 space-y-3 max-w-[90%] mx-auto items-center">
       <h1 className="font-clash text-[35px] md:text-[45px] font-semibold">Customer Service</h1>
       <p className="font-sans text-base md:text-2xl max-w-[500px] text-wrap text-center">
         We have a 24/7 support team available to respond to all enquiries.
       </p>
       <div className="max-w-[80%] w-full h-[300px] md:h-[400px] bg-customer rounded-lg"></div>
     </section>
   );
 }
 
 export default CustomerService;
 