import FirstPage from "./components/firstpage";
import Categories from "./components/categories";
import WhyChooseUs from "./components/why-choose-us";
import Reviews from "./components/reviews/reviews.jsx";
import Events from "./components/events.jsx";
import Questions from "./components/questions.jsx";

function Home(){
   return(
      <>
         <FirstPage/>
         <Categories/>
         <WhyChooseUs/>
         <Reviews/>
         <Events/>
         <Questions/>
      </>
   )
}

export default Home

