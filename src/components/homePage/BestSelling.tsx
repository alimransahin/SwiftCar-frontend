import { Link } from "react-router-dom";

import ProductCard from "../product/ProductCard";
import { useGetFilteredProductQuery } from "../../redux/api/productsApi";
import { IProduct } from "../utils/interface";
import LoadingSpinner from "../utils/LoadingSpinner";

const BestSellingProducts = () => {
  const {
    data: products = [],
    error,
    isLoading,
  } = useGetFilteredProductQuery({}) as {
    data: IProduct[];
    error: any;
    isLoading: boolean;
  };
  if (isLoading || error) {
    return <LoadingSpinner />;
  }
  return (
    <div className="py-12 bg-gray-50">
      <h2 className="text-3xl font-semibold text-center text-[#004e92] mb-8">
        Best Selling Products
      </h2>

      {/* Product Grid */}
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 lg:gap-10 px-6 lg:px-12">
        {products.slice(0, 4).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* View More Button */}
      <div className="flex justify-center mt-10">
        <Link
          to="/products"
          className="px-6 py-3 border-2 border-[#004e92] text-[#004e92] rounded-lg font-bold transition-all duration-500 ease-in-out bg-gradient-to-r hover:from-[#000428] hover:to-[#004e92] hover:text-white"
        >
          View More
        </Link>
      </div>
    </div>
  );
};

export default BestSellingProducts;
