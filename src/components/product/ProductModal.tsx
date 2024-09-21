import { useState } from "react";
import {
  useAddProductsMutation,
  useGetFilteredProductQuery,
} from "../../redux/api/productsApi";
import { toast } from "react-toastify";
import useBeforeUnload from "../utils/warning";
import { IProduct } from "../utils/interface";
import LoadingSpinner from "../utils/LoadingSpinner";
type ProductModalProps = {
  onClose: () => void;
  onCreate: () => void;
};
const ProductModal: React.FC<ProductModalProps> = ({ onClose, onCreate }) => {
  const [addProduct, { isLoading, error }] = useAddProductsMutation();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [offer_price, setOfferPrice] = useState("");
  const [category, setCategory] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");
  const { data: products = [] } = useGetFilteredProductQuery({}) as {
    data: IProduct[];
    error: any;
    isLoading: boolean;
  };

  // Create a new array with one product per unique category
  const uniqueCategoryProducts = Array.from(
    products.reduce((acc, product) => {
      // If the category is not in the map yet, add the product
      if (!acc.has(product.category)) {
        acc.set(product.category, product);
      }
      return acc;
    }, new Map())
  ).map(([_, product]) => product);
  useBeforeUnload((event) => {
    event.returnValue =
      "You have unsaved changes. Are you sure you want to leave?";
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const newProduct = {
      name,
      regularPrice: parseFloat(price),
      offerPrice: offer_price ? parseFloat(offer_price) : null,
      category,
      images: [imageUrl],
      description,
    };
    addProduct(newProduct).unwrap();
    toast.success("Product added successfully...!");
    onCreate();
    onClose();
  };
  if (isLoading || error) {
    return <LoadingSpinner />;
  }
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-lg mx-4 rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-[#000428] mb-4">
          Create New Product
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Regular Price
            </label>
            <input
              type="number"
              step="0.01"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Offer Price
            </label>
            <input
              type="number"
              step="0.01"
              value={offer_price}
              onChange={(e) => setOfferPrice(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Category
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
              required
            >
              <option value="">Select a category</option>
              {uniqueCategoryProducts.map((product) => (
                <option value={product.category}>{product.category}</option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Image URL
            </label>
            <input
              type="text"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Product Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-3 border-2 border-[#004e92] text-[#004e92] rounded-lg font-bold transition-all duration-500 ease-in-out bg-gradient-to-r hover:from-[#000428] hover:to-[#004e92] hover:text-white"
            >
              Create Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductModal;
