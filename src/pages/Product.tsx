import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ProductCard from "../components/product/ProductCard";
import { IProduct } from "../components/utils/interface";
import { useGetFilteredProductQuery } from "../redux/api/productsApi";
import LoadingSpinner from "../components/utils/LoadingSpinner";

const Product = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const categoryFromQuery = queryParams.get("category") || "";
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(categoryFromQuery);
  const [priceRange, setPriceRange] = useState("0-1000");
  const [sortOption, setSortOption] = useState("default");

  const {
    data: products = [],
    error,
    isLoading,
  } = useGetFilteredProductQuery({}) as {
    data: IProduct[];
    error: any;
    isLoading: boolean;
  };
  console.log(products);
  const uniqueCategoryProducts = Array.from(
    products.reduce<Map<string, IProduct>>((acc, product) => {
      if (!acc.has(product.category)) {
        acc.set(product.category, product);
      }
      return acc;
    }, new Map())
  ).map(([, product]) => product);

  useEffect(() => {
    setSelectedCategory(categoryFromQuery);
  }, [categoryFromQuery]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
    // Update the URL with the new category filter
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
    // Clear the category filter from the URL
    window.history.replaceState(null, "", "/products");
  };

  const filteredProducts = products
    .filter((product) => {
      const lowercasedQuery = searchQuery.toLowerCase().trim();
      const searchField =
        `${product.name} ${product.description}`.toLowerCase();
      return searchField.includes(lowercasedQuery);
    })
    .filter(
      (product) =>
        selectedCategory === "" || product.category === selectedCategory
    )
    .filter((product) => {
      const [min, max] = priceRange.split("-").map(Number);
      return product.regularPrice >= min && product.regularPrice <= max;
    })
    .sort((a, b) =>
      sortOption === "asc"
        ? a.regularPrice - b.regularPrice
        : b.regularPrice - a.regularPrice
    );

  if (isLoading || error) {
    return <LoadingSpinner />;
  }
  return (
    <div className="container mx-auto px-4 mb-12">
      <h1 className="text-4xl font-bold my-10 text-center text-blue-400">
        All Products
      </h1>

      <div className="flex flex-col-reverse xl:flex-row justify-between items-center mb-6">
        <div className="flex flex-wrap justify-center gap-4">
          <select
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Categories</option>
            {uniqueCategoryProducts.map((product) => (
              <option key={product.category} value={product.category}>
                {product.category}
              </option>
            ))}
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
            className="px-6 py-3 border-2 border-[#004e92] text-[#004e92] rounded-lg font-bold transition-all duration-500 ease-in-out bg-gradient-to-r hover:from-[#000428] hover:to-[#004e92] hover:text-white"
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

      <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 lg:gap-10">
        {filteredProducts.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Product;
