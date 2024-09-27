import { useEffect, useContext } from "react";
import { useForm, FieldValues } from "react-hook-form";
import { toast } from "react-toastify";
import { AuthContext } from "../utils/AuthContext";
import {
  useGetUserByEmailQuery,
  useUpdateProfileMutation,
} from "../redux/api/authApi";
import { IUser } from "../utils/interface";

const UpdateProfile = () => {
  const { user } = useContext<any>(AuthContext); // Get user from AuthContext
  const {
    register,
    handleSubmit,
    setValue,
    formState: { isSubmitting },
  } = useForm<FieldValues>();

  const [updateUserProfile] = useUpdateProfileMutation();
  const { data: userData } = useGetUserByEmailQuery(user?.email) as {
    data: IUser;
  };

  // Pre-fill form when userData is fetched
  useEffect(() => {
    if (userData) {
      setValue("name", userData.name);
      setValue("email", userData.email);
      setValue("phone", userData.phone);
      setValue("address", userData.address);
    }
  }, [userData, setValue]);

  const onSubmit = async (data: FieldValues) => {
    try {
      await updateUserProfile(data).unwrap();

      toast.success("Profile updated successfully!");
    } catch (err: any) {
      toast.error(err?.data?.message || "Error updating profile.");
    }
  };

  return (
    <div className=" text-blue-900 text-center flex items-center justify-center py-16">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-yellow-50 p-6 rounded-lg shadow-lg w-full max-w-md my-16 text-start"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Update Profile</h2>

        {/* Name */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Name</label>
          <input
            type="text"
            {...register("name")}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        {/* Email (read-only) */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Email</label>
          <input
            type="email"
            {...register("email")}
            className="w-full p-2 border border-gray-300 rounded"
            readOnly
          />
        </div>

        {/* Phone */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Phone</label>
          <input
            type="text"
            {...register("phone")}
            className="w-full p-2 border border-gray-300 rounded"
            required
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

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#004e92] text-white font-bold py-2 px-4 rounded hover:bg-[#003b73]"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Updating..." : "Update Profile"}
        </button>
      </form>
    </div>
  );
};

export default UpdateProfile;
