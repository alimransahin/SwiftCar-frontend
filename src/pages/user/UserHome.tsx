import { useContext } from "react";
import { AuthContext } from "../../utils/AuthContext";
import UpComingRental from "./UpcomingRental";
import { ICarsResponse } from "../../utils/interface";
import { useGetUserBookingsQuery } from "../../redux/api/bookApi";
import LoadingSpinner from "../../utils/LoadingSpinner";

const UserHome = () => {
  const { user } = useContext<any>(AuthContext);
  const {
    data: userRes = {} as ICarsResponse,
    error,
    isLoading,
  } = useGetUserBookingsQuery({}) as {
    data: ICarsResponse;
    error: any;
    isLoading: boolean;
  }; // Fetch user bookings based on user ID

  if (isLoading || error) {
    return <LoadingSpinner />;
  }
  const userBookings = userRes.data;
  const upcomingRentals = userBookings.filter(
    (booking) => booking.status === "Approved"
  );
  const pendingRentals = userBookings.filter(
    (booking) => booking.status === "Pending"
  );
  const usedRentals = userBookings.filter(
    (booking) => booking.status === "Done"
  );

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
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold text-gray-800">
            Upcoming Rentals
          </h3>
          <p className="text-4xl font-bold text-blue-600">
            {upcomingRentals.length}
          </p>
        </div>

        <div className="bg-gradient-to-br from-green-100 to-green-200 p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold text-gray-800">
            Pending Rentals
          </h3>
          <p className="text-4xl font-bold text-green-600">
            {pendingRentals.length}
          </p>
        </div>

        <div className="bg-gradient-to-br from-violet-100 to-violet-200 p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold text-gray-800">Used Rentals</h3>
          <p className="text-4xl font-bold text-violet-600">
            {usedRentals.length}
          </p>
        </div>

        <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold text-gray-800">Total Rentals</h3>
          <p className="text-4xl font-bold text-yellow-600">
            {userBookings.length}
          </p>
        </div>
      </div>

      <UpComingRental />
    </div>
  );
};

export default UserHome;
