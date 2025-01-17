import FirstPage from "./components/firstpage";
import Categories from "./components/categories";
import WhyChooseUs from "./components/why-choose-us";
import Reviews from "./components/reviews/reviews.jsx";

function Home(){
   return(
      <>
         <FirstPage/>
         <Categories/>
         <WhyChooseUs/>
         <Reviews/>
      </>
   )
}

export default Home

