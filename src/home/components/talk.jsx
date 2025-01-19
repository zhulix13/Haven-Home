function Talk() {
   return (
     <section className="my-10 px-4">
       <h1 className="font-bold font-clash text-[45px] text-center">Talk to us</h1>
       <p className="text-center my-8 font-sans mx-auto text-wrap text-2xl max-w-[1000px]">
         You might want to have a chat with us, let’s start a conversation. We’re listening.
       </p>
       <div>
         <form action="" className="flex flex-col items-center justify-center gap-6">
           {/* Input Fields */}
           <div className="flex flex-col md:flex-row gap-4 w-full max-w-[1000px]">
             {/* Full Name Input */}
             <div className="flex-1">
               <input
                 type="text"
                 placeholder="Full Name:"
                 className="w-full py-2 px-3 outline-gray-700 border bg-[#E0EAFE] rounded-3xl font-clash font-semibold text-base  text-black placeholder-gray-700"
               />
             </div>
             {/* Email Input */}
             <div className="flex-1">
               <input
                 type="email"
                 placeholder="Email:"
                 className="w-full py-2 px-3 outline-gray-700 border bg-[#E0EAFE] rounded-3xl font-clash font-semibold text-base  text-black placeholder-gray-700"
               />
             </div>
           </div>
           {/* Textarea */}
           <div className="w-full max-w-[1000px]">
             <textarea
               placeholder="Write your message here..."
               className="w-full h-[200px] p-4 outline-gray-700 border bg-[#E0EAFE] rounded-3xl font-clash font-semibold text-base  text-black placeholder-gray-700 resize-none"
             ></textarea>
           </div>
           {/* Submit Button */}
           <div>
             <button
               type="submit"
               className="px-10 py-3 bg-black text-white font-clash font-semibold text-base sm:text-2xl rounded-full shadow-md hover:shadow-lg transition-shadow duration-300"
             >
               Send Message
             </button>
           </div>
         </form>
       </div>
     </section>
   );
 }
 
 export default Talk;
 