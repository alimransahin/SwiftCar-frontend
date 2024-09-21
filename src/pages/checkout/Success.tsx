import { useNavigate } from "react-router-dom";

const Success: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">
        Order Successful
      </h1>
      <p className="text-gray-700 mb-4">
        Your order has been placed successfully! Thank you for shopping with us.
      </p>
      <button
        onClick={() => navigate("/")}
        className="px-6 py-3 font-bold rounded-lg transition-all duration-500 ease-in-out bg-blue-600 text-white border-2 border-blue-600 hover:bg-blue-700 "
      >
        Go to Home
      </button>
    </div>
  );
};

export default Success;
