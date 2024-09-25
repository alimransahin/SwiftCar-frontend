import { useDispatch } from "react-redux";
import { setUser } from "../redux/features/authSlice";
import { useSigninMutation } from "../redux/api/authApi";
import { toast } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { FieldValues, useForm } from "react-hook-form";

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [signin] = useSigninMutation();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<FieldValues>();

  const onSubmit = async (data: FieldValues) => {
    try {
      const response: any = await signin(data).unwrap();
      const accessToken = response.token;
      const decodedToken: any = jwtDecode(accessToken);
      localStorage.setItem("accessToken", accessToken);
      dispatch(setUser({ user: decodedToken, token: accessToken }));
      // navigate(`/${decodedToken.role}`);
      navigate(`/`);
      toast.success("Sign In successful!");
    } catch (err: any) {
      if (err.status === "FETCH_ERROR") {
        toast.error("Cannot connect with server. Please wait a few minutes.");
      }
      toast.error(err?.data?.message);
    }
  };

  return (
    <div className="bg-gradient-to-br from-[#f8bf304d] to-primary text-blue-900 text-center flex items-center justify-center py-16">
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

      {/* Footer */}
    </div>
  );
};

export default SignIn;
