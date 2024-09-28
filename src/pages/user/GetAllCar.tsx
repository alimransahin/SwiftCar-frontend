import { useState } from "react";
import { useGetFilteredCarQuery } from "../../redux/api/carApi";
import LinkButton from "../../utils/Button";
import { ICar, ICarsResponse } from "../../utils/interface";
import LoadingSpinner from "../../utils/LoadingSpinner";

const GetAllCar = () => {
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
  return (
    <div className="p-8 bg-white h-full">
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">Car List</h3>

      {/* Search Input and Sort/Filter Select Input */}
      <div className="flex justify-center items-center mb-4 space-x-4">
        <div className="flex items-center space-x-2">
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
        </div>

        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by car name"
            className="px-4 py-2 rounded-md border-2 border-gray-300 focus:outline-none focus:border-2 focus:border-primary"
          />
        </div>

        {/* Clear Filter Button */}
        <button
          onClick={clearFilters}
          className="px-4 py-2 border-2 border-gray-300  text-gray-600 rounded-md hover:text-black   hover:border-primary"
        >
          Clear Filters
        </button>
      </div>

      {/* Car List Table */}
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
                  {car.status === "available" ? (
                    <LinkButton href={`book-car/${car._id}`} text="Book Now" />
                  ) : (
                    <button
                      className=" bg-gray-300 text-gray-600 cursor-not-allowed inline-block transition-colors px-6 py-3   font-bold  rounded-lg shadow-lg "
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
