import { Link } from "react-router-dom";
import LoadingSpinner from "../../utils/LoadingSpinner";
import { useGetFilteredCarQuery } from "../../redux/api/carApi";
import { ICar, ICarsResponse } from "../../utils/interface";
import CarCard from "../CarCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FeaturedCars: React.FC = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 1000,
    autoplaySpeed: 2000,
    autoplay: true,
    slidesToScroll: 1,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024, // For screens smaller than 1024px
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600, // For screens smaller than 600px
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const {
    data: carsRes = {} as ICarsResponse,
    error,
    isLoading,
  } = useGetFilteredCarQuery({}) as {
    data: ICarsResponse;
    error: any;
    isLoading: boolean;
  };

  if (isLoading || error) {
    return <LoadingSpinner />;
  }

  const allCar = carsRes.data?.filter((car) => car.status === "available");
  const featuredCars: any = allCar?.slice(0, 4);

  return (
    <div className="py-16 bg-gray-50">
      <h2 className="text-3xl font-semibold text-center text-[#004e92] mb-8">
        Featured Cars
      </h2>

      {/* Product Grid */}
      {/* <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6 lg:px-12"> */}
      <div className="slider-container">
        <Slider {...settings}>
          {featuredCars.map((car: ICar) => (
            <CarCard key={car._id} car={car} />
            // <div
            //   key={product.id}
            //   className="border rounded-lg shadow-lg overflow-hidden"
            // >
            //   <img
            //     src={product.images[0]}
            //     alt={product.name}
            //     className="w-full h-[200px] object-cover"
            //   />
            //   <div className="p-4">
            //     <h3 className="text-lg font-semibold">{product.name}</h3>
            //     <p className="text-gray-700">${product.regularPrice}</p>
            //     <Link
            //       to={`/product/${product._id}`}
            //       className="mt-4 inline-block px-4 py-2 border-2 hover:text-white  border-[#004e92] text-[#004e92] rounded-lg font-bold transition-all duration-500 ease-in-out bg-gradient-to-r hover:from-[#000428] hover:to-[#004e92]"
            //     >
            //       View Details
            //     </Link>
            //   </div>
            // </div>
          ))}
        </Slider>
      </div>

      {/* View More Button */}
      <div className="flex justify-center mt-10">
        <Link
          to="/car"
          className="px-6 py-3 border-2 border-[#004e92] text-[#004e92] rounded-lg font-bold transition-all duration-500 ease-in-out bg-gradient-to-r hover:from-[#000428] hover:to-[#004e92] hover:text-white"
        >
          View More
        </Link>
      </div>
    </div>
  );
};

export default FeaturedCars;
