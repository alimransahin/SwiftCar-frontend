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

      <div className="slider-container">
        <Slider {...settings}>
          {featuredCars.map((car: ICar) => (
            <CarCard key={car._id} car={car} />
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
