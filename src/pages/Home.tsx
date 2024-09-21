import HeroSection from "../components/homePage/Hero";
import FAQ from "../components/homePage/Faq";
import BestSellingProducts from "../components/homePage/BestSelling";
import CategoriesSection from "../components/homePage/category/Category";
import FeaturedProducts from "../components/homePage/FeaturedProsucts";
import Newsletter from "../components/homePage/Newsletter";
import CustomerReview from "../components/homePage/CustomerReview";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <BestSellingProducts />
      <CategoriesSection />
      <FeaturedProducts />
      <FAQ />
      <CustomerReview />
      <Newsletter />
    </div>
  );
};

export default Home;
