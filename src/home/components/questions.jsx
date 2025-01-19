import { useState } from "react";

function Questions() {
   const [isHeld, setIsHeld] = useState({});

   const Inquiry = [
      {
         question: 'What are your return policies?',
         answer: 'We offer a 30-day return policy for unused and undamaged furniture. If you are not satisfied with your purchase, you can return it within 30 days of delivery for a refund or exchange. Please ensure the item is in its original packaging. Return shipping fees may apply.',
      },
      {
         question: 'Do you give guarantees for your products?',
         answer: 'Yes, we provide a 1-year warranty on all our furniture. This covers manufacturing defects and structural issues. If you encounter any problems within this period, please contact us with proof of purchase, and we will assist with repairs or replacements.',
      },
      {
         question: 'What are your delivery options?',
         answer: 'We offer standard delivery, scheduled delivery, and premium white-glove delivery. Standard delivery ensures your furniture arrives within 5-7 business days, while scheduled delivery allows you to pick a convenient date. Our white-glove delivery includes assembly and placement of your furniture in the desired location.',
      }
   ];

   function toggleHeld(index) {
      setIsHeld(prev => ({ ...prev, [index]: !prev[index] }));
   }

   return (
      <section className="my-[100px] max-w-[1200px] mx-auto md:p-4">
         <h1 className="font-clash font-bold text-5xl text-center">You Must Have Questions Right?</h1>
         <p className="font-sans font-regular text-2xl mt-9 text-wrap text-center max-w-[850px] mx-auto">
            Our customer support is always available to provide answers to any of your questions but to begin with, here are some of our most asked questions
         </p>
         <div className="flex flex-col gap-y-3 mt-11">
            {
               Inquiry.map((inquiry, index) => (
                  <div className="flex border rounded-[20px] flex-col max-w-[1250px] w-full px-7 py-7 justify-center border-black mx-auto transition-all duration-1000">
                     <div className="flex items-center justify-between">
                        <p className="font-clash font-semibold text-[30px]">{inquiry.question}</p>
                        <div onClick={() => toggleHeld(index)} className="cursor-pointer hover:scale-110 transition duration-200">
                           {isHeld[index] ? (
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                 <polyline points="6 15 12 9 18 15" />
                              </svg>
                           ) : (
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                 <polyline points="6 9 12 15 18 9" />
                              </svg>
                           )}
                        </div>
                     </div>
                     {isHeld[index] && (
                        <div className="mt-5 transition-all duration-1000">
                           <h1 className="font-sans font-medium text-xl">{inquiry.answer}</h1>
                        </div>
                     )}
                  </div>
               ))
            }
         </div>
      </section>
   );
}

export default Questions;
