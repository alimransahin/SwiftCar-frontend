import { useContext, useState } from "react";
import {
  useGetFilteredCarQuery,
  useDeleteCarMutation,
} from "../../redux/api/carApi";
import LinkButton from "../../utils/Button";
import { ICar, ICarsResponse } from "../../utils/interface";
import LoadingSpinner from "../../utils/LoadingSpinner";
import { AuthContext } from "../../utils/AuthContext";
import { Edit, Trash } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const GetAllCar = () => {
  const { user } = useContext<any>(AuthContext);

  const [filterStatus, setFilterStatus] = useState<
    "all" | "available" | "unavailable"
  >("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const {
    data: carsRes = {} as ICarsResponse,
    error,
    isLoading,
  } = useGetFilteredCarQuery({}) as {
    data: ICarsResponse;
    error: any;
    isLoading: boolean;
  };

  // Use the delete mutation hook
  const [deleteCar] = useDeleteCarMutation();

  if (isLoading || error) {
    return <LoadingSpinner />;
  }

  const filteredCars = carsRes.data?.filter((car) => {
    const matchesStatus = filterStatus === "all" || car.status === filterStatus;
    const matchesSearch = car.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const clearFilters = () => {
    setFilterStatus("all");
    setSearchQuery("");
  };

  // Handle car deletion
  const handleDelete = async (id: string) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this car?"
    );

    if (confirmed) {
      try {
        await deleteCar(id).unwrap();
        // Optionally show a success message or handle post-deletion logic
        toast.success("Car deleted successfully.");
      } catch (error) {
        toast.error("Failed to delete the car: ");
      }
    }
  };

  return (
    <div className="p-8 bg-white h-full">
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">Car List</h3>
      <div className="flex justify-between">
        <div className="flex justify-center items-center mb-4 space-x-4">
          <select
            value={filterStatus}
            onChange={(e) =>
              setFilterStatus(
                e.target.value as "all" | "available" | "unavailable"
              )
            }
            className="px-4 py-2 rounded-md border-2 border-gray-300 focus:outline-none focus:border-2 focus:border-primary"
          >
            <option value="all">Show All</option>
            <option value="available">Available</option>
            <option value="unavailable">Unavailable</option>
          </select>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by car name"
            className="px-4 py-2 rounded-md border-2 border-gray-300 focus:outline-none focus:border-2 focus:border-primary"
          />
          <button
            onClick={clearFilters}
            className="px-4 py-2 border-2 border-gray-300 text-gray-600 rounded-md hover:text-black hover:border-primary"
          >
            Clear Filters
          </button>
        </div>
        {user?.role === "admin" && (
          <Link
            to="/admin/add-car"
            className="bg-green-600 px-6 py-3 mb-4 text-white rounded-md font-semibold hover:bg-green-700 hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
          >
            Add New Car
          </Link>
        )}
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="py-2 px-4 bg-gray-200 text-gray-600 font-semibold">
                Car
              </th>
              <th className="py-2 px-4 bg-gray-200 text-gray-600 font-semibold">
                Model
              </th>
              <th className="py-2 px-4 bg-gray-200 text-gray-600 font-semibold">
                Price Per Hour
              </th>
              <th className="py-2 px-4 bg-gray-200 text-gray-600 font-semibold">
                Availability
              </th>
              <th className="py-2 px-4 bg-gray-200 text-gray-600 font-semibold">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredCars?.map((car: ICar) => (
              <tr key={car._id}>
                <td className="py-2 px-4 border-t">
                  <img
                    src={car.img}
                    alt={car.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                </td>
                <td className="py-2 px-4 border-t">{car.name}</td>
                <td className="py-2 px-4 border-t">${car.pricePerHour}/hour</td>
                <td className="py-2 px-4 border-t">
                  <span
                    className={
                      car.status === "available"
                        ? "text-green-600"
                        : "text-red-600"
                    }
                  >
                    {car.status}
                  </span>
                </td>
                <td className="py-2 px-4 border-t">
                  {user?.role === "admin" ? (
                    <div className="flex">
                      <Link
                        to={`/admin/update-car/${car._id}`}
                        className="bg-blue-600 text-white mx-2 p-2 rounded-lg  my-auto"
                      >
                        <Edit />
                      </Link>
                      <button
                        onClick={() => handleDelete(car._id)}
                        className="bg-red-600 text-white mx-2 p-2 rounded-lg  "
                      >
                        <Trash />
                      </button>
                    </div>
                  ) : car.status === "available" ? (
                    <LinkButton href={`book-car/${car._id}`} text="Book Now" />
                  ) : (
                    <button
                      className="bg-gray-300 text-gray-600 cursor-not-allowed inline-block transition-colors px-6 py-3 font-bold rounded-lg shadow-lg"
                      disabled
                    >
                      Book Now
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

export default GetAllCar;
