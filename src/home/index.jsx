import FirstPage from "./components/firstpage";
import Categories from "./components/categories";
import WhyChooseUs from "./components/why-choose-us";
import Reviews from "./components/reviews/reviews.jsx";
import Events from "./components/events.jsx";
import Questions from "./components/questions.jsx";
import Talk from "./components/talk.jsx";
import Advert from "./components/advert.jsx";

function Home(){
   return(
      <>
         <FirstPage/>
         <Categories/>
         <WhyChooseUs/>
         <Reviews/>
         <Events/>
         <Questions/>
         <Talk/>
         <Advert/>
      </>
   )
}

export default Home;