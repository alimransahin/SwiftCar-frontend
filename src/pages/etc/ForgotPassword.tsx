import { useState } from "react";
import { useForm } from "react-hook-form";
// Adjust the path based on your project structure
import { toast } from "react-toastify";
import { useForgotPasswordMutation } from "../../redux/api/authApi";
import { Link } from "react-router-dom";

interface ForgotPasswordFormValues {
  email: string;
}

const ForgotPassword = () => {
  const [isSent, setIsSent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordFormValues>();
  const [forgotPassword, { isLoading }] = useForgotPasswordMutation();

  const onSubmit = async (data: ForgotPasswordFormValues) => {
    try {
      await forgotPassword({ email: data.email }).unwrap();
      toast.success("Password reset link has been sent to your email.");
      setIsSent(true);
    } catch (err: any) {
      toast.error(err?.data?.message || "Failed to send reset link.");
    }
  };

  return (
    <div className="bg-gradient-to-br from-[#f8bf304d] to-primary text-blue-900 text-center flex items-center justify-center min-h-screen">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-yellow-50 p-6 rounded-lg shadow-lg w-full max-w-md my-16 text-start"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Forgot Password</h2>

        {/* Email Field */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Email</label>
          <input
            type="email"
            {...register("email", { required: "Email is required" })}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-[#004e92] text-white font-bold py-2 px-4 rounded hover:bg-[#003b73]"
          disabled={isLoading || isSent}
        >
          {isLoading
            ? "Submitting..."
            : isSent
            ? "Link Sent"
            : "Send Reset Link"}
        </button>

        {/* Additional Information */}
        {isSent && (
          <p className="text-sm text-green-500 mt-4 text-center">
            If the email you entered is registered, a password reset link has
            been sent.
          </p>
        )}
        <p className="mt-4 text-sm text-center">
          <Link
            to="/signin"
            className="text-[#004e92] font-bold  hover:underline"
          >
            Sign In Instead
          </Link>
        </p>
      </form>
    </div>
  );
};

export default ForgotPassword;
