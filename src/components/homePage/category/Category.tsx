import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CategoryCard from "./categoryCard";
import { useGetFilteredProductQuery } from "../../../redux/api/productsApi";
import { IProduct } from "../../utils/interface";
import LoadingSpinner from "../../utils/LoadingSpinner";

const CategoriesSection = () => {
  const {
    data: products = [],
    error,
    isLoading,
  } = useGetFilteredProductQuery({}) as {
    data: IProduct[];
    error: any;
    isLoading: boolean;
  };

  // Create a new array with one product per unique category
  const uniqueCategoryProducts = Array.from(
    products.reduce((acc, product) => {
      // If the category is not in the map yet, add the product
      if (!acc.has(product.category)) {
        acc.set(product.category, product);
      }
      return acc;
    }, new Map())
  ).map(([_, product]) => product);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    centerMode: true,
    centerPadding: "40px",
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerPadding: "10px",
        },
      },
    ],
  };

  if (isLoading || error) {
    return <LoadingSpinner />;
  }

  return (
    <div className="py-12 bg-gray-100">
      <h2 className="text-3xl font-semibold text-center text-[#004e92] mb-8">
        Shop by Category
      </h2>
      <div className="container mx-auto px-6 lg:px-12">
        <Slider {...settings}>
          {uniqueCategoryProducts.map((product) => (
            <div key={product._id} className="px-4">
              <CategoryCard product={product} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CategoriesSection;
