import { Trash } from "lucide-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
  clearcart,
  deleteProduct,
  updateQuantity,
} from "../redux/features/cartSlice";

const Cart = () => {
  const products = useAppSelector((store) => store.cart.products);
  const dispatch = useAppDispatch();
  const handleQuantityChange = (_id: string, type: string) => {
    dispatch(updateQuantity({ _id, type }));
  };
  const { totalPrice } = useAppSelector((store) => store.cart);
  const handleRemoveProduct = (_id: string) => {
    const confirmRemove = window.confirm(
      "Are you sure you want to remove this product?"
    );
    if (confirmRemove) {
      dispatch(deleteProduct({ _id }));
    }
  };
  const handleClearCart = () => {
    const confirmRemove = window.confirm(
      "Are you sure you want to remove this product?"
    );
    if (confirmRemove) {
      dispatch(clearcart());
    }
  };
  const navigate = useNavigate();

  // Page refresh warning when cart is not empty
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (products.length > 0) {
        e.preventDefault();
        e.returnValue = "";
      }
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [products]);

  const isOrderEnabled = () => {
    return products.every((product: any) => product.quantity <= product.qty);
  };

  const handlePlaceOrder = () => {
    if (isOrderEnabled()) {
      navigate("/checkout");
    } else {
      alert("Some products are out of stock. Please adjust quantities.");
    }
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold text-blue-500 mb-6">Shopping Cart</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        {products.length === 0 ? (
          <p className="text-xl py-8 lg:py-48">Your cart is empty.</p>
        ) : (
          <>
            <div className="overflow-x-auto">
              <table className="min-w-full table-auto border-collapse">
                <thead>
                  <tr className="border-b border-gray-300 text-center">
                    <th className="p-4">Image</th>
                    <th className="p-4">Product Name</th>
                    <th className="p-4">Quantity</th>
                    <th className="p-4">Unit Price</th>
                    <th className="p-4">Total</th>
                    <th className="p-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product: any) => (
                    <tr
                      key={product._id}
                      className="border-b border-gray-200 text-center"
                    >
                      <td className="p-4">
                        <img
                          src={product.images[0]}
                          alt={product.name}
                          className="w-20 h-20 object-cover rounded-md mx-auto"
                        />
                      </td>
                      <td className="p-4">
                        <h2 className="text-lg font-semibold text-gray-900">
                          {product.name}
                        </h2>
                      </td>
                      <td className="p-4">
                        <div className="flex justify-center space-x-2">
                          <button
                            onClick={() =>
                              handleQuantityChange(product._id, "decrement")
                            }
                            disabled={product.quantity <= 1}
                            className="px-2 py-1 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
                          >
                            -
                          </button>
                          <span className="text-lg">{product.quantity}</span>
                          <button
                            onClick={() =>
                              handleQuantityChange(product._id, "increment")
                            }
                            disabled={product.quantity >= product.qty}
                            className="px-2 py-1 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="p-4">
                        ৳
                        {(
                          product.offerPrice || product.regularPrice
                        ).toLocaleString()}
                      </td>
                      <td className="p-4">
                        ৳
                        {(
                          (product.offerPrice || product.regularPrice) *
                          product.quantity
                        ).toLocaleString()}
                      </td>
                      <td className="p-4">
                        <button
                          onClick={() => handleRemoveProduct(product._id)}
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
            <h2 className="text-xl font-semibold text-gray-900 mt-12">
              Order Overview
            </h2>
            <table className="w-full border-collapse">
              <tbody>
                {products.map((item: any) => (
                  <tr key={item.id} className="border-b border-gray-200">
                    <td className="py-2 px-4 text-gray-900">{item.name}</td>
                    <td className="py-2 px-4 text-gray-700">
                      ${item.regularPrice.toLocaleString()} x {item.quantity}
                    </td>
                    <td className="py-2 px-4 text-gray-700">
                      ${(item.regularPrice * item.quantity).toLocaleString()}
                    </td>
                  </tr>
                ))}
                <tr className="border-b border-gray-200">
                  <td className="py-2 px-4 text-gray-900" colSpan={2}>
                    Total:
                  </td>
                  <td className="py-2 px-4 text-gray-700">
                    ${totalPrice.toFixed(2)}
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="mt-6 flex flex-col sm:flex-row  justify-around">
              <button
                onClick={() => handleClearCart()}
                className="  shadow-md hover:bg-gradient-to-r transform hover:scale-105 my-4  px-6 py-3 border-2 border-red-600 text-red-600 rounded-lg font-bold transition-all duration-500 ease-in-out bg-gradient-to-r hover:from-red-600 hover:to-red-500 hover:text-white me-2"
              >
                Clear All Product
              </button>
              <button
                onClick={handlePlaceOrder}
                className={`px-6 py-3 font-bold rounded-lg transition-all duration-500 ease-in-out ${
                  isOrderEnabled()
                    ? "px-6 py-3 bg-[#004e92] text-white font-semibold rounded-lg shadow-md hover:bg-gradient-to-r hover:from-[#000428] hover:to-[#004e92] transform transition-transform hover:scale-105 my-4"
                    : "bg-gray-300 text-gray-700 border-2 border-gray-300 cursor-not-allowed"
                }`}
              >
                Place Order
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
