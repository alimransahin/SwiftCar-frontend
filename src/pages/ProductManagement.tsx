import { useState } from "react";

import EditProductModal from "../components/product/EditProductModal";
import ProductModal from "../components/product/ProductModal";
import { Edit, Trash } from "lucide-react";
import { toast } from "react-toastify";
import {
  useDeleteProductMutation,
  useGetAllProductQuery,
} from "../redux/api/productsApi";
import { IProduct } from "../components/utils/interface";
import LoadingSpinner from "../components/utils/LoadingSpinner";

const ProductList = () => {
  //get data
  const {
    data: allProducts = [],
    error,
    isLoading,
  } = useGetAllProductQuery({
    pollingInterval: 3000, // Poll every 3 seconds
  }) as {
    data: IProduct[];
    error: any;
    isLoading: boolean;
  };

  // delete product
  const [deleteProduct] = useDeleteProductMutation();
  const handleDeleteProduct = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        await deleteProduct(id);
        toast.success("Product deleted successfully!");
      } catch (error) {
        toast.error("Failed to delete product.");
      }
    }
  };

  // State for modals
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  // State for selected product
  const [selectedProduct, setSelectedProduct] = useState<IProduct | null>(null);

  const openEditModal = (product: IProduct) => {
    setSelectedProduct(product);
    setIsEditModalOpen(true);
  };

  if (isLoading || error) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      {/* Buttons to Open Modals */}
      <button
        onClick={() => setIsAddModalOpen(true)}
        className=" px-6 py-3 bg-[#004e92] text-white font-semibold rounded-lg shadow-md hover:bg-gradient-to-r hover:from-[#000428] hover:to-[#004e92] transform transition-transform hover:scale-105 my-4"
      >
        Add New Product
      </button>

      {/* Product List Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b">Image</th>
              <th className="px-4 py-2 border-b">Name</th>
              <th className="px-4 py-2 border-b">Price</th>
              <th className="px-4 py-2 border-b">Category</th>
              <th className="px-4 py-2 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {allProducts.map((product: IProduct) => (
              <tr key={product._id}>
                <td className="px-4 py-2 border-b">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-16 h-16 object-cover"
                  />
                </td>
                <td className="px-4 py-2 border-b">{product.name}</td>
                <td className="px-4 py-2 border-b">${product.regularPrice}</td>
                <td className="px-4 py-2 border-b">{product.category}</td>
                <td className="px-4 py-2 border-b">
                  <button
                    onClick={() => openEditModal(product)}
                    className="px-4 py-2 border-2 border-[#004e92] text-[#004e92] rounded-lg font-bold transition-all duration-500 ease-in-out bg-gradient-to-r hover:from-[#000428] hover:to-[#004e92] hover:text-white me-2"
                  >
                    <Edit />
                  </button>
                  <button
                    onClick={() =>
                      product._id && handleDeleteProduct(product._id)
                    }
                    className="px-4 py-2 border-2 border-red-600 text-red-600 rounded-lg font-bold transition-all duration-500 ease-in-out bg-gradient-to-r hover:from-red-600 hover:to-red-500 hover:text-white me-2"
                  >
                    <Trash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Product Modal */}
      {isAddModalOpen && (
        <ProductModal
          onClose={() => setIsAddModalOpen(false)}
          onCreate={() => setIsAddModalOpen(false)}
        />
      )}

      {/* Edit Product Modal */}
      {isEditModalOpen && selectedProduct && (
        <EditProductModal
          product={selectedProduct} // Pass the selected product as a prop
          onClose={() => setIsEditModalOpen(false)}
          onUpdate={() => setIsEditModalOpen(false)}
        />
      )}
    </div>
  );
};

export default ProductList;
