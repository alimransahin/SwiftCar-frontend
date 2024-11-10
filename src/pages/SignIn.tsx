import { useSigninMutation } from "../redux/api/authApi";
import { toast } from "react-toastify";
import { useNavigate, Link, Navigate } from "react-router-dom";
import { FieldValues, useForm } from "react-hook-form";
import { jwtDecode } from "jwt-decode";
import { useContext } from "react";
import { AuthContext } from "../utils/AuthContext";

const SignIn = () => {
  const { login } = useContext<any>(AuthContext);
  const navigate = useNavigate();
  const [signin] = useSigninMutation();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<FieldValues>();
  const authContext = useContext(AuthContext);
  const token = localStorage.getItem("accessToken");

  if (token && authContext?.user) {
    return <Navigate to={`/${authContext.user.role}`} />;
  }
  const handleAdmin = () => {
    // This is the admin login credentials
    const data = { email: "mdalimransahin0@gmail.com", password: "250467" };
    onSubmit(data); // Passing the credentials to onSubmit function
  };
  const handleUser = () => {
    // This is the admin login credentials
    const data = {
      email: "mdalimransahin@gmail.com",
      password: "mdalimransahin@gmail.com",
    };
    onSubmit(data); // Passing the credentials to onSubmit function
  };
  const onSubmit = async (data: FieldValues) => {
    try {
      const response: any = await signin(data).unwrap();
      const accessToken = response.token;
      const decodedToken: any = jwtDecode(accessToken);
      localStorage.setItem("accessToken", accessToken);
      const userInfo = {
        name: decodedToken.name,
        email: decodedToken.email,
        role: decodedToken.role,
      };
      login(userInfo);
      navigate(`/${decodedToken.role}`);
      toast.success("Sign In successful!");
    } catch (err: any) {
      if (err.status === "FETCH_ERROR") {
        toast.error("Cannot connect with server. Please wait a few minutes.");
      }
      toast.error(err?.data?.message);
    }
  };

  return (
    <div className="bg-gradient-to-br from-[#f8bf304d] to-primary text-blue-900 text-center  items-center justify-center py-16">
      <div className="p-4 bg-white rounded-lg shadow-md w-full max-w-sm mx-auto">
        <p className="text-xl font-semibold text-gray-800 mb-4">
          Select Role (Credential)
        </p>

        <div className="flex justify-between space-x-4">
          <button
            onClick={() => handleUser()}
            className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none transition duration-200"
          >
            User
          </button>
          <button
            onClick={() => handleAdmin()}
            className="w-full py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 focus:outline-none transition duration-200"
          >
            Admin
          </button>
        </div>
      </div>

      <div className="flex text-center items-center justify-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-yellow-50 p-6 rounded-lg shadow-lg w-full max-w-md my-16 text-start"
        >
          <h2 className="text-2xl font-bold mb-4 text-center">Sign In</h2>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Email</label>
            <input
              type="email"
              {...register("email")}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Password</label>
            <input
              type="password"
              {...register("password")}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>

          {/* Forgot Password Link */}
          <div className="mb-4 text-right">
            <Link
              to="/forgot-password" // Replace with your actual Forgot Password page route
              className="text-[#004e92] hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full bg-[#004e92] text-white font-bold py-2 px-4 rounded hover:bg-[#003b73]"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Sign In"}
          </button>

          {/* Sign Up Instead Link */}
          <p className="mt-4 text-sm text-center">
            New here?{" "}
            <Link
              to="/signup" // Replace with your actual Signup page route
              className="text-[#004e92] hover:underline font-bold"
            >
              Sign Up Instead
            </Link>
          </p>
          <footer className="text-sm ">
            <p className="text-center">
              <Link
                to="/privacy-policy"
                className="text-[#004e92] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </Link>{" "}
              |{" "}
              <Link
                to="/terms"
                className="text-[#004e92] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Terms of Service
              </Link>
            </p>
          </footer>
        </form>
      </div>
      {/* Footer */}
    </div>
  );
};

export default SignIn;
