import { useContext } from "react";
import { AuthContext } from "../../utils/AuthContext";

import LoadingSpinner from "../../utils/LoadingSpinner";
import LinkButton from "../../utils/Button";
import { useGetUserBookingsQuery } from "../../redux/api/bookApi";
import { ICarsResponse } from "../../utils/interface";

const MyBookings = () => {
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
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };
  return (
    <div className="p-8 bg-white h-full">
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">My Bookings</h3>
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
                Status
              </th>
              <th className="py-2 px-4 bg-gray-200 text-gray-600 font-semibold">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {userBookings.length === 0 ? (
              <tr>
                <td colSpan={5} className="py-2 px-4 text-center text-gray-600">
                  No bookings found.
                </td>
              </tr>
            ) : (
              userBookings.map((booking: any) => (
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
                  <td className="py-2 px-4 border-t">{booking.dropOffTime}</td>
                  <td className="py-2 px-4 border-t">{booking.status}</td>

                  <td className="py-2 px-4 border-t">
                    {booking?.status === "Pending" ? (
                      // <LinkButton
                      //   href={`book-car/${booking._id}`}
                      //   text="Edit Book"
                      // />
                      <button className="text-white w-full bg-primary  hover:bg-blue-600 inline-block transition-colors px-6 py-3 font-bold rounded-lg shadow-lg">
                        Edit Book
                      </button>
                    ) : booking?.status === "Approved" ? (
                      <button className=" bg-gray-300 w-full text-gray-600 cursor-not-allowed inline-block transition-colors px-6 py-3 font-bold rounded-lg shadow-lg ">
                        Edit Book
                      </button>
                    ) : booking?.status === "Done" &&
                      booking.isPaid === true ? (
                      <button className="text-white bg-accent w-full  hover:bg-amber-500 inline-block transition-colors px-6 py-3 font-bold rounded-lg shadow-lg">
                        Pay Now
                      </button>
                    ) : (
                      <button
                        className="bg-gray-300 w-full text-gray-600 cursor-not-allowed inline-block transition-colors px-6 py-3 font-bold rounded-lg shadow-lg"
                        disabled
                      >
                        Paid
                      </button>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBookings;
