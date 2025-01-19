import site from '../../assets/events/site.png';
import installation from '../../assets/events/installation 1.png';
import opening from '../../assets/events/grand opening.png';

function Events() {
   return (
      <section className="h-auto py-3">
         <h1 className="text-center font-clash font-bold text-[45px]">Events</h1>
         <p className="text-sans font-normal mt-6 text-2xl text-center">We have attended thousands of events across Nigeria and these are some of them.</p>

         <div className="grid grid-cols-1 sm:w-full md:w-4/5 gap-x-16 mt-20 mx-auto md:grid-cols-3">
            <div className="flex gap-5 flex-col">
               <img src={opening} alt="Grand Opening" className="w-full h-auto" />
               <h1 className='font-clash font-semibold text-2xl text-center'>Grand Opening</h1>
               <p className='font-sans text-lg text-center font-regular'>We were present at the grand opening of Albergo Hotels to appreciate their immense patronage.</p>
            </div>

            <div className="flex gap-5 flex-col">
               <img src={site} alt="Site Inspection" className="w-full h-auto" />
               <h1 className='font-clash font-semibold text-2xl text-center'>Site Inspection</h1>
               <p className='font-sans text-lg text-center font-regular'>Site seeing of our furniture production room to make sure things are going well appropriately.</p>
            </div>

            <div className="flex gap-5 flex-col">
               <img src={installation} alt="Installation" className="w-full h-auto" />
               <h1 className='font-clash font-semibold text-2xl text-center'>Installation</h1>
               <p className='font-sans text-lg text-center font-regular'>Dining set installation for a client who purchased online and got it delivered and installed neatly.</p>
            </div>
         </div>
      </section>
   );
}

export default Events;
