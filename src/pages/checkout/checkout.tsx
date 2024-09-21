import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { clearcart } from "../../redux/features/cartSlice";

interface IItem {
  id: React.Key | null | undefined;
  name: string;
  regularPrice: number;
  quantity: number;
}
const Checkout: React.FC = () => {
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const dispatch = useAppDispatch();
  const [paymentMethod, setPaymentMethod] = useState("COD");
  const myProduct = useAppSelector((store) => store.cart.products);
  const { totalPrice, tax, grandTotal } = useAppSelector((store) => store.cart);

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if all user details are filled and if a payment method is selected
    const { name, email, phone, address } = userDetails;
    const isFormComplete = name && email && phone && address;
    const isPaymentMethodSelected =
      paymentMethod === "COD" || paymentMethod === "Online";

    setIsButtonDisabled(
      !isFormComplete || !isPaymentMethodSelected || totalPrice === 0
    );
  }, [userDetails, paymentMethod]);

  // Handle form input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };
  const handlePlaceOrder = () => {
    if (paymentMethod === "COD") {
      navigate("/success");
    } else if (paymentMethod === "Online") {
      alert("Redirecting to online payment gateway...");
      navigate("/payment");
    }
    dispatch(clearcart());
  };

  const getOrderOverview = () => {
    return (
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Order Overview
        </h2>
        <table className="w-full border-collapse">
          <tbody>
            {myProduct.map((item: IItem) => (
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
            <tr className="border-b border-gray-200">
              <td className="py-2 px-4 text-gray-700 " colSpan={2}>
                Tax:
              </td>
              <td className="py-2 px-4 text-gray-700">${tax.toFixed(2)}</td>
            </tr>
            {paymentMethod === "COD" && totalPrice !== 0 && (
              <tr className="border-b border-gray-200">
                <td className="py-2 px-4 text-gray-700" colSpan={2}>
                  Delivery Charge:
                </td>
                <td className="py-2 px-4 text-gray-700">$10</td>
              </tr>
            )}

            <tr className="font-bold text-gray-900">
              <td className="py-2 px-4 " colSpan={2}>
                Grand Total:
              </td>
              <td className="py-2 px-4">
                $
                {paymentMethod === "COD" && totalPrice !== 0
                  ? (grandTotal + 10).toFixed(2)
                  : grandTotal.toFixed(2)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold text-blue-500 mb-6">Checkout</h1>
      {/* Grid Layout: 2 Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Column: User Details Form */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            User Details
          </h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700">Full Name</label>
              <input
                type="text"
                name="name"
                value={userDetails.name}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={userDetails.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Phone Number</label>
              <input
                type="text"
                name="phone"
                value={userDetails.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Delivery Address</label>
              <input
                type="text"
                name="address"
                value={userDetails.address}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none"
                required
              />
            </div>
          </form>
        </div>

        {/* Right Column: Payment Methods and Order Overview */}
        <div className="space-y-6">
          {/* Payment Methods */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Payment Methods
            </h2>
            <div>
              <label className="block mb-2">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="COD"
                  checked={paymentMethod === "COD"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="mr-2"
                />
                Cash on Delivery
              </label>
              <label className="block">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="Online"
                  checked={paymentMethod === "Online"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="mr-2"
                />
                Online Payment
              </label>
            </div>
          </div>

          {/* Order Overview */}
          {getOrderOverview()}

          {/* Place Order Button */}
          <div className="flex justify-end">
            <button
              onClick={handlePlaceOrder}
              disabled={isButtonDisabled}
              className={`px-6 py-3 font-bold rounded-lg transition-all duration-500 ease-in-out ${
                !isButtonDisabled
                  ? "bg-blue-600 text-white border-2 border-blue-600 hover:bg-blue-700"
                  : "bg-gray-300 text-gray-700 border-2 border-gray-300 cursor-not-allowed"
              }`}
            >
              Confirm Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
