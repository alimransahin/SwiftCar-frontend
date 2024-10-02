import LoadingSpinner from "../../utils/LoadingSpinner";
import {
  useGetAllBookingsQuery,
  useIsReturnMutation,
} from "../../redux/api/bookApi";
import { ICarsResponse } from "../../utils/interface";
import { toast } from "react-toastify";

const ReturnCar = () => {
  const [isReturn] = useIsReturnMutation();

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
  const userBookings = userRes.data?.filter(
    (booking) => booking.status === "Approved"
  );

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  const handleReturn = async (id: string) => {
    const confirmed = window.confirm("Are you sure want return this car?");
    if (confirmed) {
      try {
        await isReturn(id).unwrap();
      } catch (error) {
        toast.error("Failed to return the car ");
      }
    }
  };

  return (
    <div className="p-8 bg-white h-full">
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">Car Rreturn</h3>
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
                      src={booking.carId?.img}
                      alt={booking._id}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                  </td>
                  <td className="py-2 px-4 border-t">{booking.carId?.name}</td>
                  <td className="py-2 px-4 border-t">
                    {formatDate(booking.pickUpDate)}
                  </td>
                  <td className="py-2 px-4 border-t">{booking.pickUpTime}</td>
                  <td className="py-2 px-4 border-t">
                    {formatDate(booking.dropOffDate)}
                  </td>
                  <td className="py-2 px-4 border-t">{booking.dropOffTime}</td>

                  <td className="py-2 px-4 border-t">
                    {booking?.isReturn !== true ? (
                      <button
                        onClick={() => handleReturn(booking._id)}
                        className=" text-black w-full bg-primary  inline-block transition-colors px-6 py-3 font-bold rounded-lg shadow-lg "
                      >
                        Return
                      </button>
                    ) : (
                      <button className=" text-gray-600 w-full bg-gray-300 cursor-not-allowed inline-block transition-colors px-6 py-3 font-bold rounded-lg shadow-lg ">
                        Return
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

export default ReturnCar;
