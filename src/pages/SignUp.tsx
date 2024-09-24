import { useState } from "react";
import { useForm } from "react-hook-form";
import { useSignupMutation } from "../redux/api/authApi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

interface SignupFormValues {
  name: string;
  email: string;
  role: string;
  password: string;
  cpassword: string;
  phone?: string;
  address?: string;
  termsAccepted: boolean; // Field for terms acceptance
}

const Signup = () => {
  const [passwordError, setPasswordError] = useState<string>("");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignupFormValues>();

  const [signup, { isLoading }] = useSignupMutation();

  const onSubmit = async (data: SignupFormValues) => {
    const password = watch("password");
    const copassword = watch("cpassword");

    if (password !== copassword) {
      setPasswordError("Password and Confirm Password not matched");
      return;
    }

    setPasswordError("");

    if (!data.termsAccepted) {
      toast.error("You must accept the Terms & Conditions.");
      return;
    }

    const { cpassword, ...submittedData } = data;

    try {
      await signup(submittedData).unwrap();
      toast.success("Signup successful!");
      navigate("/signin");
    } catch (err: any) {
      toast.error(err?.data?.message);
    }
  };

  return (
    <div className="bg-gradient-to-br from-[#f8bf304d] to-primary text-blue-900 text-center flex items-center justify-center min-h-screen">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-yellow-50 p-6 rounded-lg shadow-lg w-full max-w-md my-16 text-start"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>

        {/* Name */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Name</label>
          <input
            type="text"
            {...register("name", { required: true })}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {errors.name && (
            <p className="text-red-500 text-sm">Name is required</p>
          )}
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Email</label>
          <input
            type="email"
            {...register("email", { required: true })}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">Email is required</p>
          )}
        </div>

        {/* Role */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Role</label>
          <select
            {...register("role", { required: true })}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Password</label>
          <input
            type="password"
            {...register("password", { required: true })}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">Password is required</p>
          )}
        </div>

        {/* Confirm Password */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">
            Confirm Password
          </label>
          <input
            type="password"
            {...register("cpassword", { required: true })}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {passwordError && (
            <p className="text-red-500 text-sm mt-2">{passwordError}</p>
          )}
        </div>

        {/* Phone */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Phone</label>
          <input
            type="tel"
            {...register("phone")}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        {/* Address */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Address</label>
          <input
            type="text"
            {...register("address")}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        {/* Terms & Conditions, Privacy Policy Links */}
        <div className="mb-4 items-start">
          <input
            type="checkbox"
            {...register("termsAccepted", { required: true })}
            className="mr-2 mt-1"
          />
          <label className="text-sm">
            I read and accept the{" "}
            <a
              href="/terms-and-conditions" // Replace with your actual terms document link
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#004e92] underline"
            >
              Terms & Conditions
            </a>{" "}
            and{" "}
            <a
              href="/privacy-policy" // Replace with your actual privacy policy document link
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#004e92]  underline"
            >
              Privacy Policy
            </a>
          </label>
          {errors.termsAccepted && (
            <p className="text-red-500 text-sm ml-4">
              You must accept these terms
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-[#004e92] text-white font-bold py-2 px-4 rounded hover:bg-[#003b73]"
          disabled={isLoading}
        >
          {isLoading ? "Submitting..." : "Sign Up"}
        </button>

        {/* Sign In Instead Link */}
        <p className="mt-4 text-sm">
          Already have an account?{" "}
          <Link
            to="/signin"
            className="text-[#004e92] font-bold hover:underline"
          >
            Sign In Instead
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
