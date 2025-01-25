import Header from "../../constant/Header";
import Image1 from "../../assets/who-we-are/image1.png";

function Hero() {
  return (
    <main className="bg-[#E0EAFE] ">
      <Header />
      <div className="items-center py-28 space-y-5 gap-9 justify-evenly mx-auto sm:flex ">
        <div className="items-center">
          <img src={Image1} alt="living-room" className="object-contain " />
          
        </div>
      <div className="justify-start px-5 space-y-5 flex-col">
         <h1 className="font-clash text-3xl md:text-4xl max-w-lg font-semibold ">We help you make good furnitures for your home.</h1>
         <p className="font-sans font-regular text-xl text-wrap max-w-lg md:text-2xl">
            We organize your space to be more cozy, design by professional
            interior designer.
         </p>
         <div className="">
            <button className="font-sans font-regular text-white py-2 px-5 cursor-pointer bg-black rounded-3xl text-2xl">Explore</button>
         </div>
         <div></div>
         </div>
      </div>
    </main>
  );
}

export default Hero;
