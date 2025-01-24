import site from '../../assets/events/site.png';
import installation from '../../assets/events/installation 1.png';
import opening from '../../assets/events/grand opening.png';

function Events() {
  return (
    <section className="py-6 md:py-10">
      {/* Section Title */}
      <h1 className="text-center font-clash font-bold text-2xl md:text-[45px]">
        Events
      </h1>
      <p className="font-sans font-normal mt-4 md:mt-6 text-xl md:text-2xl text-center max-w-[750px] mx-auto">
        We have attended thousands of events across Nigeria and these are some of them.
      </p>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 md:gap-x-8 mt-12 mx-auto w-[90%] md:w-4/5">
        {/* Event Card 1 */}
        <div className="flex flex-col gap-4 items-center">
          <img
            src={opening}
            alt="Grand Opening"
            className="w-full max-w-[400px] h-auto rounded-lg shadow-lg"
          />
          <h1 className="font-clash font-semibold text-xl md:text-2xl text-center">
            Grand Opening
          </h1>
          <p className="font-sans text-base md:text-lg text-center font-regular max-w-[300px]">
            We were present at the grand opening of Albergo Hotels to appreciate their immense
            patronage.
          </p>
        </div>

        {/* Event Card 2 */}
        <div className="flex flex-col gap-4 items-center">
          <img
            src={site}
            alt="Site Inspection"
            className="w-full max-w-[400px] h-auto rounded-lg shadow-lg"
          />
          <h1 className="font-clash font-semibold text-xl md:text-2xl text-center">
            Site Inspection
          </h1>
          <p className="font-sans text-base md:text-lg text-center font-regular max-w-[300px]">
            Site seeing of our furniture production room to make sure things are going well
            appropriately.
          </p>
        </div>

        {/* Event Card 3 */}
        <div className="flex flex-col gap-4 items-center">
          <img
            src={installation}
            alt="Installation"
            className="w-full max-w-[400px] h-auto rounded-lg shadow-lg"
          />
          <h1 className="font-clash font-semibold text-xl md:text-2xl text-center">
            Installation
          </h1>
          <p className="font-sans text-base md:text-lg text-center font-regular max-w-[300px]">
            Dining set installation for a client who purchased online and got it delivered and
            installed neatly.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Events;
