import LoadingSpinner from "../../utils/LoadingSpinner";
import {
  useGetUserBookingsQuery,
  useMakePaymentMutation,
} from "../../redux/api/bookApi";
import { ICarsResponse } from "../../utils/interface";
import { toast } from "react-toastify";
import { useState } from "react";
import { Loader } from "lucide-react";

const Payment = () => {
  const [loading, setLoading] = useState<string | null>(null);
  const [makePayment] = useMakePaymentMutation();

  const {
    data: userRes = {} as ICarsResponse,
    error,
    isLoading,
  } = useGetUserBookingsQuery({}) as {
    data: ICarsResponse;
    error: any;
    isLoading: boolean;
  };

  const handlePayment = async (id: string) => {
    try {
      setLoading(id);
      const currentPageLink = window.location.href;
      const res: any = await makePayment({ id, currentPageLink }).unwrap();
      const paymentData = res.data;
      if (paymentData.errors) {
        toast.error(paymentData.errors[0]);
      }
      window.location.href = paymentData.payment_url;
    } catch (error) {
      toast.error("Failed to make Payment");
    } finally {
      setLoading(null); // Reset loading state once the process is done
    }
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return (
      <div className="text-center text-gray-600 text-2xl">
        No bookings found.
      </div>
    );
  }

  const userBookings = userRes.data.filter(
    (book) => book.status === "Approve" || book.status === "Done"
  );

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
                Total Cost
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
                <td className="py-2 px-4 border-t">{booking.totalCost}</td>
                <td className="py-2 px-4 border-t">
                  {booking.isPaid ? (
                    <button
                      className="bg-gray-300 w-full text-gray-600 cursor-not-allowed inline-block transition-colors px-6 py-3 font-bold rounded-lg shadow-lg"
                      disabled
                    >
                      Paid
                    </button>
                  ) : (
                    <button
                      onClick={() => handlePayment(booking._id)}
                      className={`text-white bg-primary w-full hover:bg-blue-500 inline-block transition-colors px-6 py-3 font-bold rounded-lg shadow-lg ${
                        loading === booking._id
                          ? "opacity-50 cursor-not-allowed"
                          : ""
                      }`}
                      disabled={loading === booking._id}
                    >
                      {loading === booking._id ? (
                        <div className="flex items-center justify-center">
                          <Loader className="animate-spin" size={20} />
                        </div>
                      ) : (
                        "Pay Now"
                      )}
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Payment;
