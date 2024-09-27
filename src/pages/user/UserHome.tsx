import { useContext } from "react";
import { AuthContext } from "../../utils/AuthContext";
import { ICar, ICarsResponse } from "../../utils/interface";
import { useGetFilteredCarQuery } from "../../redux/api/carApi";
import LoadingSpinner from "../../utils/LoadingSpinner";
import LinkButton from "../../utils/Button";

const UserHome = () => {
  const { user } = useContext<any>(AuthContext);
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
  const recommended: any = allCar?.slice(0, 3);

  return (
    <div className="p-8 bg-white h-full">
      <div className="mb-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-2">
          Welcome to SwiftCar, {user?.name}!
        </h2>
        <p className="text-gray-600">
          Here's a summary of your car rental activity:
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold text-gray-800">
            Active Rentals
          </h3>
          <p className="text-4xl font-bold text-blue-600">2</p>
        </div>

        <div className="bg-gradient-to-br from-green-100 to-green-200 p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold text-gray-800">
            Upcoming Rentals
          </h3>
          <p className="text-4xl font-bold text-green-600">1</p>
        </div>

        <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold text-gray-800">Total Rentals</h3>
          <p className="text-4xl font-bold text-yellow-600">15</p>
        </div>
      </div>

      <div className="mt-12 bg-gray-50 p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Your Upcoming Rental
        </h3>

        <div className="flex justify-between items-center">
          <div>
            <h4 className="text-lg font-semibold text-gray-700">
              Tesla Model S
            </h4>
            <p className="text-gray-600">Pick-up: Sep 28, 2024, 10:00 AM</p>
            <p className="text-gray-600">Drop-off: Sep 30, 2024, 10:00 AM</p>
          </div>
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600">
              Manage Booking
            </button>
            <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md shadow hover:bg-gray-400">
              Cancel Booking
            </button>
          </div>
        </div>
      </div>

      {/* Recommended Vehicles */}
      <div className="mt-12">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Recommended for You
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recommended.map((car: ICar) => (
            <div key={car._id} className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src={car?.img}
                alt={car.name}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h4 className="text-lg font-semibold text-gray-700">
                {car?.name}
              </h4>
              <p className="text-gray-600 mb-3">${car.pricePerHour}/Hour</p>
              <LinkButton href="/" text="Book Now" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserHome;
