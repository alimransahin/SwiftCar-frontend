import LoadingSpinner from "../../utils/LoadingSpinner";
import { useGetUserBookingsQuery } from "../../redux/api/bookApi";
import { IBooking } from "../../utils/interface";

const UpComingRental = () => {
  const {
    data: userRes,
    error,
    isLoading,
  } = useGetUserBookingsQuery({}) as {
    data: { data: IBooking[] };
    error: any;
    isLoading: boolean;
  };

  if (isLoading || error) {
    return <LoadingSpinner />;
  }

  // Filter confirmed bookings
  const userBookings = userRes.data.filter(
    (booking) => booking.status === "Approved"
  );

  // Initialize topBookings as an empty array
  let topBookings: any[] = [];

  // Check if userBookings is not empty before sorting
  if (userBookings.length > 0) {
    const sortedBookings = [...userBookings].sort((a, b) => {
      const dateA = new Date(a.pickUpDate);
      const dateB = new Date(b.pickUpDate);

      // Check if both dates are valid
      if (isNaN(dateA.getTime())) return 1;
      if (isNaN(dateB.getTime())) return -1;

      // Compare dates first
      const dateComparison = dateA.getTime() - dateB.getTime();
      if (dateComparison !== 0) return dateComparison; // If dates are different, return the date comparison

      // If dates are the same, compare times
      const timeA = a.pickUpTime.split(":").map(Number); // Convert to [hours, minutes]
      const timeB = b.pickUpTime.split(":").map(Number);

      return timeA[0] - timeB[0] || timeA[1] - timeB[1]; // Compare hours, then minutes
    });

    // Slice the first 3 bookings
    topBookings = sortedBookings.slice(0, 3); // Now topBookings is defined here
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  return (
    <>
      {userBookings.length === 0 ? (
        <div className="mt-12 bg-gray-50 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            You Have No Upcoming Rentals
          </h3>
        </div>
      ) : (
        <div className="rounded-lg shadow-lg">
          <div className="mt-12 bg-gray-50 p-6 ">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Your Upcoming Rentals
            </h3>
          </div>
          <div className="p-8 bg-white h-full">
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
                      Drop-off Date
                    </th>
                    <th className="py-2 px-4 bg-gray-200 text-gray-600 font-semibold">
                      Drop-off Time
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {topBookings.length > 0 &&
                    topBookings.map((booking: any) => (
                      <tr key={booking._id}>
                        <td className="py-2 px-4 border-t">
                          <img
                            src={booking.carId.img}
                            alt={booking.carId.name}
                            className="w-16 h-16 object-cover rounded-lg"
                          />
                        </td>
                        <td className="py-2 px-4 border-t">
                          {booking.carId.name}
                        </td>
                        <td className="py-2 px-4 border-t">
                          {formatDate(booking.pickUpDate)}
                        </td>
                        <td className="py-2 px-4 border-t">
                          {booking.pickUpTime}
                        </td>
                        <td className="py-2 px-4 border-t">
                          {formatDate(booking.dropOffDate)}
                        </td>
                        <td className="py-2 px-4 border-t">
                          {booking.dropOffTime}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UpComingRental;
