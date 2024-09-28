import { useState } from "react";
import { useLocation } from "react-router-dom";
import LoadingSpinner from "../utils/LoadingSpinner";
import { useGetFilteredCarQuery } from "../redux/api/carApi";
import { ICar, ICarsResponse } from "../utils/interface";
import CarCard from "../components/CarCard";
import NoProductFound from "./errorPage/NoCarFound";
import SomethingWrong from "./errorPage/SomethingWrong";

const Car = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const categoryFromQuery = queryParams.get("category") || "";
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(categoryFromQuery);
  const [priceRange, setPriceRange] = useState("0-1000");
  const [sortOption, setSortOption] = useState("default");

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

  const allCar = carsRes.data;

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
    window.history.replaceState(
      null,
      "",
      `?category=${encodeURIComponent(e.target.value)}`
    );
  };

  const handlePriceRangeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPriceRange(e.target.value);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(e.target.value);
  };

  const handleClearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("");
    setPriceRange("0-1000");
    setSortOption("default");

    window.history.replaceState(null, "", "/car");
  };

  const filteredCars = allCar
    .filter((car: ICar) => {
      const lowercasedQuery = searchQuery.toLowerCase().trim();
      const searchField = `${car.name} ${car.description}`.toLowerCase();
      return searchField.includes(lowercasedQuery);
    })

    .filter((car: ICar) => {
      const [min, max] = priceRange.split("-").map(Number);
      return car.pricePerHour >= min && car.pricePerHour <= max;
    })
    .sort((a: ICar, b: ICar) =>
      sortOption === "asc"
        ? a.pricePerHour - b.pricePerHour
        : b.pricePerHour - a.pricePerHour
    );

  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (error) {
    <SomethingWrong />;
  }
  return (
    <div className="container mx-auto px-4 mb-12">
      <h1 className="text-4xl font-bold my-10 text-center text-blue-400">
        All Car
      </h1>

      <div className="flex flex-col-reverse xl:flex-row justify-between items-center mb-6">
        <div className="flex flex-wrap justify-center gap-4">
          <select
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 "
          >
            <option value="">All Categories</option>
          </select>

          <select
            value={priceRange}
            onChange={handlePriceRangeChange}
            className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="0-1000">All Prices</option>
            <option value="0-50">Up to $50</option>
            <option value="50-100">$50 to $100</option>
            <option value="100-200">$100 to $200</option>
            <option value="200-500">$200 to $500</option>
            <option value="500-1000">$500 to $1000</option>
            <option value="1000-">Over $1000</option>
          </select>

          <select
            value={sortOption}
            onChange={handleSortChange}
            className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="default">Default</option>
            <option value="asc">Price: Low to High</option>
            <option value="desc">Price: High to Low</option>
          </select>

          <button
            onClick={handleClearFilters}
            className="px-6 py-3 border-2 border-primary text-primary rounded-lg font-bold transition-all duration-500 ease-in-out bg-gradient-to-r hover:from-black hover:to-primary hover:text-white"
          >
            Clear Filters
          </button>
        </div>

        <div className="flex-grow flex justify-end">
          <input
            type="text"
            placeholder="Search by name or description"
            value={searchQuery}
            onChange={handleSearchChange}
            className="p-3 xl:my-0 my-3 w-full max-w-md border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {filteredCars.length > 0 ? (
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 ">
          {filteredCars.map((car: ICar) => (
            <CarCard key={car._id} car={car} />
          ))}
        </div>
      ) : (
        <NoProductFound />
      )}
    </div>
  );
};

export default Car;
