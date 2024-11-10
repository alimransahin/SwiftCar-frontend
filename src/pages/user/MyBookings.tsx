import LoadingSpinner from "../../utils/LoadingSpinner";
import { useGetUserBookingsQuery } from "../../redux/api/bookApi";
import { ICarsResponse } from "../../utils/interface";

const MyBookings = () => {
  const {
    data: userRes = {} as ICarsResponse,
    error,
    isLoading,
  } = useGetUserBookingsQuery({}) as {
    data: ICarsResponse;
    error: any;
    isLoading: boolean;
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  let userBookings: any = [];
  if (!error && userRes.data) {
    userBookings = userRes.data;
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  return (
    <div className="p-8 bg-white h-full">
      {userBookings.length === 0 ? (
        <div className="text-center text-gray-600 text-2xl">
          No bookings found.
        </div>
      ) : (
        <>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            My Bookings
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="py-2 px-4 bg-gray-200 text-gray-600 font-semibold">
                    Car
                  </th>
                  <th className="py-2 px-4 bg-gray-200 text-gray-600 font-semibold">
                    Name
                  </th>
                  <th className="py-2 px-4 bg-gray-200 text-gray-600 font-semibold">
                    Pick-up Date
                  </th>
                  <th className="py-2 px-4 bg-gray-200 text-gray-600 font-semibold">
                    Pick-up Time
                  </th>
                  <th className="py-2 px-4 bg-gray-200 text-gray-600 font-semibold">
                    Drop off Date
                  </th>
                  <th className="py-2 px-4 bg-gray-200 text-gray-600 font-semibold">
                    Drop off Time
                  </th>
                  <th className="py-2 px-4 bg-gray-200 text-gray-600 font-semibold">
                    Booking Status
                  </th>
                  <th className="py-2 px-4 bg-gray-200 text-gray-600 font-semibold">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {userBookings.map((booking: any) => (
                  <tr key={booking._id}>
                    <td className="py-2 px-4 border-t">
                      <img
                        src={booking.carId.img}
                        alt={booking._id}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                    </td>
                    <td className="py-2 px-4 border-t">{booking.carId.name}</td>
                    <td className="py-2 px-4 border-t">
                      {formatDate(booking.pickUpDate)}
                    </td>
                    <td className="py-2 px-4 border-t">{booking.pickUpTime}</td>
                    <td className="py-2 px-4 border-t">
                      {formatDate(booking.dropOffDate)}
                    </td>
                    <td className="py-2 px-4 border-t">
                      {booking.dropOffTime}
                    </td>
                    <td className="py-2 px-4 border-t">{booking.status}</td>
                    <td className="py-2 px-4 border-t">
                      {booking.status === "Pending" ? (
                        <div className="flex space-x-2">
                          <button className="text-white w-full bg-primary hover:bg-blue-600 transition-colors px-6 py-3 font-bold rounded-lg shadow-lg">
                            Edit Book
                          </button>
                          <button className="text-white w-full bg-rose-600 hover:bg-rose-700 transition-colors px-6 py-3 font-bold rounded-lg shadow-lg">
                            Delete
                          </button>
                        </div>
                      ) : (
                        <button className="bg-gray-300 w-full text-gray-600 cursor-not-allowed transition-colors px-6 py-3 font-bold rounded-lg shadow-lg">
                          Edit Book
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default MyBookings;
