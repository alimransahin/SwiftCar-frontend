import { useParams } from "react-router-dom";
// import {ImageZoom} from "../utils/"
import { useAppDispatch } from "../../redux/hooks";
import { addToCart } from "../../redux/features/cartSlice";
import { IProduct } from "../utils/interface";
import { useGetSingleProductQuery } from "../../redux/api/productsApi";
import LoadingSpinner from "../utils/LoadingSpinner";

const ProductDetail = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>();

  const {
    data: product,
    error,
    isLoading,
  } = useGetSingleProductQuery(id) as {
    data: IProduct;
    error: any;
    isLoading: boolean;
  };

  const handleAddToCart = (product: IProduct) => {
    dispatch(addToCart(product));
  };

  const handleAddToWishlist = () => {
    console.log(`${product.name} added to wishlist.`);
  };

  // Handle loading and error states before accessing the product data
  if (isLoading || error) {
    return <LoadingSpinner />;
  }
  if (!product) return <p className="min-h-screen m-auto">Product not found</p>;

  return (
    <div className="container mx-auto p-8 bg-white shadow-lg rounded-lg">
      <div className="flex flex-col md:flex-row items-start md:space-x-10">
        {/* Product Images Section */}
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <img
            src={product.images[0]}
            alt=""
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />

          <div className="flex mt-4 space-x-2">
            {Array.isArray(product.images) &&
              product.images.map((image, index) => (
                <img
                  key={index}
                  className="w-20 h-20 object-cover rounded-md border border-gray-300 cursor-pointer hover:opacity-80 transition-opacity"
                  src={image}
                  alt={`${product.name} - ${index + 1}`}
                />
              ))}
          </div>
        </div>

        {/* Product Information Section */}
        <div className="w-full md:w-1/2 text-start">
          <h1 className="text-4xl font-extrabold text-[#000428] mb-4">
            {product.name}
          </h1>

          <p className="text-2xl text-gray-700 mb-4">
            Price:{" "}
            {product.offerPrice ? (
              <span>
                <span className="line-through text-red-500">
                  ${product.regularPrice}
                </span>{" "}
                <span className="font-bold text-[#004e92]">
                  ${product.offerPrice}
                </span>
              </span>
            ) : (
              <span className="font-bold">${product.regularPrice}</span>
            )}
          </p>

          <p
            className={`text-lg font-medium ${
              product.qty > 0 ? "text-[#004e92]" : "text-red-500"
            } mb-4`}
          >
            {product.qty > 0 ? `${product.qty} in stock` : "Out of stock"}
          </p>

          <p className="text-md text-gray-600 mb-4">
            Category:{" "}
            <span className="font-semibold text-gray-900">
              {product.category}
            </span>
          </p>

          <div className="flex mb-6">
            <span className="text-yellow-500 text-xl">★★★★☆</span>
            <span className="ml-2 text-gray-600 text-md">(4.5 ratings)</span>
          </div>

          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            {product.description}
          </p>

          <div className="flex items-center align-middle space-x-4 mb-6">
            <button
              onClick={() => handleAddToCart(product)}
              className="px-6 py-3 bg-[#004e92] text-white font-semibold rounded-lg shadow-md hover:bg-gradient-to-r hover:from-[#000428] hover:to-[#004e92] transform transition-transform hover:scale-105"
            >
              Add to Cart
            </button>

            <button
              onClick={handleAddToWishlist}
              className="px-6 py-3 border-2 border-[#004e92] text-[#004e92] rounded-lg font-bold transition-all duration-500 ease-in-out bg-gradient-to-r hover:from-[#000428] hover:to-[#004e92] hover:text-white"
            >
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
