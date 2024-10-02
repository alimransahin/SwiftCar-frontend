import { useGetAllBookingsQuery } from "../../redux/api/bookApi";
import { useGetFilteredCarQuery } from "../../redux/api/carApi";
import { ICarsResponse } from "../../utils/interface";
import LoadingSpinner from "../../utils/LoadingSpinner";

const AdminHome = () => {
  const { data: bookings = {} as ICarsResponse } = useGetAllBookingsQuery(
    {}
  ) as {
    data: ICarsResponse;
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
 
  const totalCars = carsRes.data?.length || 0;
 
  const rentedCars =
    bookings.data?.filter((booking) => booking.status === "Approved").length ||
    0;
  const pendingBooking =
    bookings.data?.filter((booking) => booking.status === "Pending").length ||
    0;

  return (
    <div className="p-8 bg-white h-full">
      {/* Overview Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-2">
          Admin Dashboard
        </h2>
        <p className="text-gray-600">
          Manage car rentals, users, and track performance.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-red-100 to-red-200 p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold text-gray-800">
            Pending Bookings
          </h3>
          <p className="text-4xl font-bold text-red-600">{pendingBooking}</p>
        </div>

        <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold text-gray-800">
            Available Cars
          </h3>
          <p className="text-4xl font-bold text-blue-600">{totalCars}</p>
        </div>

        <div className="bg-gradient-to-br from-green-100 to-green-200 p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold text-gray-800">
            Cars Currently Rented
          </h3>
          <p className="text-4xl font-bold text-green-600">{rentedCars}</p>
        </div>
      </div>

      {/* Recent Bookings Table */}
      <div className="mt-12 bg-gray-50 p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Recent Bookings
        </h3>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="py-2 px-4 bg-gray-200 text-gray-600 font-semibold">
                Customer
              </th>
              <th className="py-2 px-4 bg-gray-200 text-gray-600 font-semibold">
                Car
              </th>
              <th className="py-2 px-4 bg-gray-200 text-gray-600 font-semibold">
                Rental Dates
              </th>
              <th className="py-2 px-4 bg-gray-200 text-gray-600 font-semibold">
                Status
              </th>
              <th className="py-2 px-4 bg-gray-200 text-gray-600 font-semibold">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-t">John Doe</td>
              <td className="py-2 px-4 border-t">Tesla Model S</td>
              <td className="py-2 px-4 border-t">
                Sep 25, 2024 - Sep 28, 2024
              </td>
              <td className="py-2 px-4 border-t text-green-600 font-semibold">
                Confirmed
              </td>
              <td className="py-2 px-4 border-t">
                <button className="px-4 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600">
                  View
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminHome;
