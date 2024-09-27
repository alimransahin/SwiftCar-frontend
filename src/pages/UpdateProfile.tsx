import { useEffect, useContext } from "react";
import { useForm, FieldValues } from "react-hook-form";
import { toast } from "react-toastify";
import { AuthContext } from "../utils/AuthContext";
import {
  useGetUserByEmailQuery,
  useUpdateUserProfileMutation,
} from "../redux/api/authApi";
import { useNavigate } from "react-router-dom";

const UpdateProfile = () => {
  const { update, user } = useContext<any>(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { isSubmitting },
  } = useForm<FieldValues>();

  const [updateUserProfile] = useUpdateUserProfileMutation();
  const { data: userInfo } = useGetUserByEmailQuery(user?.email) as {
    data: any;
  };

  const userData = userInfo?.data;

  useEffect(() => {
    if (userData) {
      setValue("name", userData.name);
      setValue("phone", userData.phone);
      setValue("address", userData.address);
    }
  }, [userData, setValue]);

  const onSubmit = async (data: FieldValues) => {
    try {
      await updateUserProfile({ id: userData._id, userInfo: data }).unwrap();
      update(data.name);
      toast.success("Profile updated successfully!");
      navigate(`/${user.role}`);
    } catch (err: any) {
      toast.error(err?.data?.message || "Error updating profile.");
    }
  };

  return (
    <div className="text-blue-900 text-center flex items-center justify-center py-16">
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
