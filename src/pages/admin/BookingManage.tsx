import LoadingSpinner from "../../utils/LoadingSpinner";
import {
  useApproveMutation,
  useGetAllBookingsQuery,
} from "../../redux/api/bookApi";
import { ICarsResponse } from "../../utils/interface";
import { toast } from "react-toastify";

const BookingManage = () => {
  const [approve] = useApproveMutation();
  const {
    data: userRes = {} as ICarsResponse,
    error,
    isLoading,
  } = useGetAllBookingsQuery({}) as {
    data: ICarsResponse;
    error: any;
    isLoading: boolean;
  };

  if (isLoading || error) {
    return <LoadingSpinner />;
  }
  const userBookings = userRes.data;
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  const handleApprove = async (id: string, status: string) => {
    const confirmed = window.confirm(
      status === "approve"
        ? "Are you sure you want to approve this book?"
        : "Are you sure you want to cancel this book?"
    );

    if (confirmed) {
      try {
        await approve({ id, status }).unwrap();
        console.log("Car deleted successfully.");
      } catch (error) {
        console.error("Failed to delete the car: ", error);
      }
    } else {
      console.log("Car deletion canceled.");
    }
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

                  <td className="py-2 px-4 border-t">
                    {booking?.status === "Pending" ? (
                      <div className="flex space-x-4">
                        <button
                          onClick={() => handleApprove(booking._id, "approve")}
                          className="text-white w-full bg-green-600  hover:bg-green-700 inline-block transition-colors px-3 py-3 font-bold rounded-lg shadow-lg"
                        >
                          Approve
                        </button>
                        <button
                          onClick={() => handleApprove(booking._id, "cancle")}
                          className="text-white w-full  bg-rose-600  hover:bg-rose-700  inline-block transition-colors px-3 py-3 font-bold rounded-lg shadow-lg"
                        >
                          Cancel
                        </button>
                      </div>
                    ) : (
                      <button className=" text-black w-full bg-green-300 cursor-not-allowed inline-block transition-colors px-6 py-3 font-bold rounded-lg shadow-lg ">
                        Approved
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

export default BookingManage;
