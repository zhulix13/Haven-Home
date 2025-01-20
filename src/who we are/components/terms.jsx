

function Terms() {
   return (
     <section className="max-w-[90%] mx-auto mt-5 py-8">
       {/* Main Heading */}
       <div className="text-center mb-8">
         <h1 className="font-clash text-3xl md:text-4xl font-bold">
           Our Terms
         </h1>
       </div>
 
       {/* Return Policy */}
       <div className="mb-12">
         <h2 className="font-clash text-2xl md:text-3xl font-semibold mb-4">
           Return Policy
         </h2>
         <p className="font-sans text-base md:text-lg text-gray-700 mb-4">
           At HavenHome, we want you to be completely satisfied with your purchase. If you are not
           happy with your furniture for any reason, we offer a flexible return policy to ensure
           your peace of mind.
         </p>
 
         {/* Eligibility for Returns */}
         <h3 className="font-clash text-xl md:text-2xl font-medium mb-3">
           Eligibility for Returns
         </h3>
         <ul className="font-sans text-base md:text-lg text-gray-700 space-y-2 pl-5 list-disc">
           <li>
             <strong>Time Frame:</strong>
             <ul className="list-disc pl-5 space-y-1">
               <li>
                 <em>In-Store Purchases:</em> Items can be returned within 30 days of purchase.
               </li>
               <li>
                 <em>Online Purchases:</em> Items can be returned within 30 days from the date of
                 delivery.
               </li>
             </ul>
           </li>
           <li>
             <strong>Condition of Items:</strong> Items must be in new, unused, and undamaged
             condition. All original packaging, accessories, manuals, and tags must be intact.
           </li>
           <li>
             <strong>Non-Returnable Items:</strong>
             <ul className="list-disc pl-5 space-y-1">
               <li>Custom or special-order items.</li>
               <li>Clearance or final sale items.</li>
               <li>Assembled or modified items by the customer.</li>
             </ul>
           </li>
         </ul>
 
         {/* Return Process */}
         <h3 className="font-clash text-xl md:text-2xl font-medium mt-6 mb-3">
           Return Process
         </h3>
         <ul className="font-sans text-base md:text-lg text-gray-700 space-y-2 pl-5 list-disc">
           <li>
             <strong>In-Store Returns:</strong> Bring the item to any of our store locations along
             with the original receipt. A store associate will inspect the item and process your
             return.
           </li>
           <li>
             <strong>Online Returns:</strong> Contact our customer service at [phone number] or
             [email address] to initiate a return. Pack the item securely in its original packaging
             and include the return authorization number provided by customer service. Ship the item
             to the address provided by customer service. Return shipping costs are the
             responsibility of the customer unless the item was damaged or incorrect.
           </li>
         </ul>
       </div>
 
       {/* Refund Policy */}
       <div>
         <h2 className="font-clash text-2xl md:text-3xl font-semibold mb-4">
           Refund Policy
         </h2>
         <ul className="font-sans text-base md:text-lg text-gray-700 space-y-2 pl-5 list-disc">
           <li>
             <strong>Refund Methods:</strong> Refunds will be issued in the original form of payment
             (e.g., credit card, cash). Please allow 5–10 business days for the refund to be
             processed and reflected in your account.
           </li>
           <li>
             <strong>Restocking Fees:</strong> A restocking fee of 10% may apply to certain items,
             especially large furniture pieces.
           </li>
           <li>
            <strong> Damaged or Defective Items:</strong> If your item arrives damaged or defective, please contact us within 48 hours of delivery. We will arrange for a replacement, repair, or full refund at no additional costs.
           </li>
         </ul>
         <div>
         <h2 className="font-clash text-2xl mt-3 md:text-3xl font-semibold mb-4">
           Exchanges
         </h2>
         <p className="font-sans text-base md:text-lg text-gray-700 space-y-2 pl-5 list-disc">
         - Exchanges are subject to availability. Please contact customer service to discuss your options.

         </p>
         </div>
       </div>
     </section>
   );
 }
 
 export default Terms;
 