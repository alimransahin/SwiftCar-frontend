import { useNavigate, useParams } from "react-router-dom";
import LoadingSpinner from "../utils/LoadingSpinner";
import { ICarResponse } from "../utils/interface";
import { useGetSingleCarQuery } from "../redux/api/carApi";
import NoCarFound from "../pages/errorPage/NoCarFound";
import SomethingWrong from "../pages/errorPage/SomethingWrong";

const CarDetail = () => {
  const { id } = useParams<{ id: string }>();

  const navigate = useNavigate();
  const handleBookNow = () => {
    navigate(`/user/all-car/book-car/${id}`);
  };
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

  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (!car) return <NoCarFound />;
  if (error) {
    <SomethingWrong />;
  }
  return (
    <div className="container my-12 lg:my-20 mx-auto p-8 bg-white shadow-lg rounded-lg">
      <div className="flex flex-col md:flex-row items-start md:space-x-10">
        {/* car Images Section */}
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <img
            src={car.img}
            alt=""
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
        </div>

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
          <div className="text-md text-gray-600 mb-4">
            <span className="font-semibold text-gray-900">Features</span>
            <ul className="list-disc list-inside pl-4">
              {car.features.map((feature) => (
                <li key={feature} className="text-gray-700">
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <p className="text-md text-gray-600 mb-4 font-bold">
            <span className=" text-gray-900">Status: </span>
            {car.status === "available" ? (
              <span className="text-green-600">Available</span>
            ) : (
              <span className="text-red-600">Unavailable</span>
            )}
          </p>
          <div className="flex mb-6">
            <span className="text-yellow-500 text-xl">★★★★☆</span>
            <span className="ml-2 text-gray-600 text-md">(4.5 ratings)</span>
          </div>

          <div className="flex items-center align-middle space-x-4 mb-6">
            {car.status === "available" ? (
              <button
                onClick={handleBookNow}
                className="inline-block transition-colors px-6 py-3 from-primary  to-[#424242]  font-bold text-white rounded-lg shadow-lg bg-gradient-to-r hover:from-accent hover:to-primary hover:text-black"
              >
                Book Now
              </button>
            ) : (
              <button
                className=" bg-gray-300 text-gray-600 inline-block transition-colors px-6 py-3  font-bold  rounded-lg shadow-lg  "
                disabled
              >
                Book Now
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetail;
