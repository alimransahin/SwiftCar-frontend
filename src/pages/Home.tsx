import HeroSection from "../components/homePage/Hero";
import Newsletter from "../components/homePage/Newsletter";
import CustomerReview from "../components/homePage/CustomerReview";
import FeaturedCars from "../components/homePage/FeaturedProsucts";
import WhyChooseUs from "../components/homePage/WhyChooseUs";
import HomepegeFooter from "../components/homePage/HomepegeFooter";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <FeaturedCars />
      <WhyChooseUs />
      <CustomerReview />
      <Newsletter />
      <HomepegeFooter />
    </div>
  );
};

export default Home;
