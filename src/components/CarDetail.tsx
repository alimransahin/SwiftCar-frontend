import { useParams } from "react-router-dom";
import LoadingSpinner from "../utils/LoadingSpinner";
import { ICarResponse } from "../utils/interface";
import { useGetSingleCarQuery } from "../redux/api/carApi";
import LinkButton from "../utils/Button";
import NoCarFound from "../pages/errorPage/NoCarFound";
import SomethingWrong from "../pages/errorPage/SomethingWrong";
const CarDetail = () => {
  const { id } = useParams<{ id: string }>();

  const {
    data: getCar,
    error,
    isLoading,
  } = useGetSingleCarQuery(id) as {
    data: ICarResponse;
    error: any;
    isLoading: boolean;
  };
  const car = getCar?.data;
  console.log(car);

  // Handle loading and error states before accessing the car data
  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (!car) return <NoCarFound />;
  if (error) {
    <SomethingWrong />;
  }
  return (
    <div className="container mx-auto p-8 bg-white shadow-lg rounded-lg">
      <div className="flex flex-col md:flex-row items-start md:space-x-10">
        {/* car Images Section */}
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <img
            src={car.img}
            alt=""
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Product Information Section */}
        <div className="w-full md:w-1/2 text-start">
          <h1 className="text-4xl font-extrabold text-[#000428] mb-4">
            {car.name}
          </h1>

          <p className="text-2xl text-gray-700 mb-4">
            Price Per Hour:{" "}
            <span className="font-bold">${car.pricePerHour}</span>
          </p>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            {car.description}
          </p>
          <p className="text-md text-gray-600 mb-4">
            <span className="font-semibold text-gray-900">Features</span>
            <ul className="list-disc list-inside pl-4">
              {car.features.map((feature) => (
                <li key={feature} className="text-gray-700">
                  {feature}
                </li>
              ))}
            </ul>
          </p>
          <p className="text-md text-gray-600 mb-4">
            <span className="font-semibold text-gray-900">Status: </span>
            {car.status}
          </p>
          <div className="flex mb-6">
            <span className="text-yellow-500 text-xl">★★★★☆</span>
            <span className="ml-2 text-gray-600 text-md">(4.5 ratings)</span>
          </div>

          <div className="flex items-center align-middle space-x-4 mb-6">
            <LinkButton text="Book Now" href="/bookings" />
            {/* <button
              onClick={() => handleAddToCart(product)}
              className="px-6 py-3 bg-[#004e92] text-white font-semibold rounded-lg shadow-md hover:bg-gradient-to-r hover:from-[#000428] hover:to-[#004e92] transform transition-transform hover:scale-105"
            >
              Add to Cart
            </button> */}

            {/* <button
              onClick={handleAddToWishlist}
              className="px-6 py-3 border-2 border-[#004e92] text-[#004e92] rounded-lg font-bold transition-all duration-500 ease-in-out bg-gradient-to-r hover:from-[#000428] hover:to-[#004e92] hover:text-white"
            >
              Add to Wishlist
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetail;
