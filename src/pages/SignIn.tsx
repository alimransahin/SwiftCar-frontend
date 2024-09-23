import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { setFormField } from "../redux/features/authSlice";
import { useSigninMutation } from "../redux/api/authApi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const dispatch = useDispatch();
  const formData = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();

  // Hook for the signup mutation
  const [signin, { isLoading }] = useSigninMutation();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    dispatch(setFormField({ field: name as keyof typeof formData, value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await signin(formData).unwrap();
      localStorage.setItem("accessToken", response.token);
      toast.success("Sign In successful!");
      navigate("/");
    } catch (err: any) {
      console.log(err);
      toast.error(err?.data?.message);
    }
  };

  return (
    <div className="bg-gradient-to-br from-[#f8bf304d] to-primary text-blue-900 text-center flex items-center justify-center py-16">
      <form
        onSubmit={handleSubmit}
        className="bg-yellow-50 p-6 rounded-lg shadow-lg w-full max-w-md my-16 text-start"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Sign In</h2>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#004e92] text-white font-bold py-2 px-4 rounded hover:bg-[#003b73]"
          disabled={isLoading}
        >
          {isLoading ? "Submitting..." : "Sign In"}
        </button>
      </form>
    </div>
  );
};

export default SignIn;
