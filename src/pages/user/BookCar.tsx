import { useForm, FieldValues, FieldError } from "react-hook-form";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useGetSingleCarQuery } from "../../redux/api/carApi";
import { ICarResponse } from "../../utils/interface";
import LoadingSpinner from "../../utils/LoadingSpinner";
import NoCarFound from "../errorPage/NoCarFound";
import SomethingWrong from "../errorPage/SomethingWrong";
import { useBookCarsMutation } from "../../redux/api/bookApi";

const BookCar = () => {
  const { id } = useParams<{ id: string }>();
  const [bookCars] = useBookCarsMutation();
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
  const today = new Date().toISOString().split("T")[0];

  const {
    register,
    handleSubmit,
    watch,
    formState: { isSubmitting, isDirty, isValid, errors },
  } = useForm<FieldValues>({ mode: "onChange" });

  // Watch pick-up and drop-off values
  const pickUpDate = watch("pickUpDate");
  const pickUpTime = watch("startTime");
  const dropOffDate = watch("dropOffDate");

  const onSubmit = async (data: FieldValues) => {
    const pickUpDateTime = new Date(`${data.pickUpDate}T${data.startTime}`);
    const dropOffDateTime = new Date(`${data.dropOffDate}T${data.dropOffTime}`);

    if (dropOffDateTime <= pickUpDateTime) {
      toast.error(
        "Drop-off date and time must be later than pick-up date and time."
      );
      return;
    }

    data.carId = car._id;
    console.log(data);
    try {
      const my_book: any = await bookCars(data).unwrap();
      console.log(my_book);
      window.location.href = my_book.data.payment_url;
      toast.success("Booking successful!");
      // navigate("/user/all-bookings");
    } catch (err: any) {
      toast.error(err?.data?.message);
    }
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (!car) {
    return <NoCarFound />;
  }

  if (error) {
    return <SomethingWrong />;
  }

  return (
    <div className="bg-gray-100 py-10 px-4">
      <h2 className="text-3xl font-bold mb-4 text-center">Book this Car</h2>

      {/* Car Details Section */}
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-3xl font-bold mb-4 text-center">{car.name}</h2>
        <div className="flex space-x-6">
          <img
            src={car.img}
            alt={car.name}
            className="w-1/2 h-80 object-cover rounded-md"
          />

          <div className="flex flex-col items-start space-y-4 w-1/2">
            <p>
              <strong>Price per day:</strong> ${car.pricePerHour}
            </p>
            <p>
              <strong>Color:</strong> {car.color}
            </p>
            <div className="text-left">
              <strong>Features:</strong>
              <ul className="list-disc list-inside pl-4">
                {car?.features?.map((feature) => (
                  <li key={feature} className="text-gray-700">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex mb-6">
              <span className="text-yellow-500 text-xl">★★★★☆</span>
              <span className="ml-2 text-gray-600 text-md">(4.5 ratings)</span>
            </div>
            <p className="font-bold">
              <span
                className={
                  car.status === "available" ? "text-green-600" : "text-red-600"
                }
              >
                {car.status}
              </span>
            </p>
          </div>
        </div>

        {/* Booking Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Pick-up Date */}
            <div>
              <label className="block text-sm font-semibold mb-2">
                Pick-up Date
              </label>
              <input
                type="date"
                {...register("pickUpDate", {
                  required: "Pick-up date is required",
                })}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                min={today}
                required
              />
              {errors.pickUpDate && (
                <span className="text-red-600 text-sm">
                  {(errors.pickUpDate as FieldError)?.message}
                </span>
              )}
            </div>

            {/* Pick-up Time */}
            <div>
              <label className="block text-sm font-semibold mb-2">
                Pick-up Time
              </label>
              <input
                type="time"
                {...register("pickUpTime", {
                  required: "Pick-up time is required",
                })}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
              {errors.startTime && (
                <span className="text-red-600 text-sm">
                  {(errors.startTime as FieldError)?.message}
                </span>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Drop-Off Date */}
            <div>
              <label className="block text-sm font-semibold mb-2">
                Drop-Off Date
              </label>
              <input
                type="date"
                {...register("dropOffDate", {
                  required: "Drop-off date is required",
                  validate: (value) => {
                    if (pickUpDate && value < pickUpDate) {
                      return "Drop-off date cannot be earlier than pick-up date.";
                    }
                    return true;
                  },
                })}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                min={today}
                required
              />
              {errors.dropOffDate && (
                <span className="text-red-600 text-sm">
                  {(errors.dropOffDate as FieldError)?.message}
                </span>
              )}
            </div>

            {/* Drop-Off Time */}
            <div>
              <label className="block text-sm font-semibold mb-2">
                Drop-Off Time
              </label>
              <input
                type="time"
                {...register("dropOffTime", {
                  required: "Drop-off time is required",
                  validate: (value) => {
                    if (pickUpDate === dropOffDate && value <= pickUpTime) {
                      return "Drop-off time must be later than pick-up time.";
                    }
                    return true;
                  },
                })}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
              {errors.dropOffTime && (
                <span className="text-red-600 text-sm">
                  {(errors.dropOffTime as FieldError)?.message}
                </span>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className={`w-full py-3 font-bold rounded-md transition-all duration-300 ${
                car.status === "available" && isDirty && isValid
                  ? "bg-[#004e92] text-white hover:bg-[#003b73]"
                  : "bg-gray-300 text-gray-600 cursor-not-allowed"
              }`}
              disabled={
                isSubmitting ||
                !(car.status === "available" && isDirty && isValid)
              }
            >
              {isSubmitting ? "Booking..." : "Book Now"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookCar;
