"use client";
import { useContext } from "react";
import { AuthContext } from "../../utils/AuthContext";
import { useGetUserByEmailQuery } from "../../redux/api/authApi";
import { IUserResponse } from "../../utils/interface";
import LoadingSpinner from "../../utils/LoadingSpinner";

const MyProfile = () => {
  const { user } = useContext(AuthContext) || {};
  const {
    data: userRes = {} as IUserResponse,
    error,
    isLoading,
  } = useGetUserByEmailQuery(user?.email || "") as {
    data: IUserResponse;
    error: any;
    isLoading: boolean;
  };

  if (isLoading || error) {
    return <LoadingSpinner />;
  }

  // Get the first user from the array (assuming you're expecting a single user)
  const userInfo = userRes?.data || {}; // Accessing the first user in the array
  console.log(userInfo);
  return (
    <div className="flex justify-center items-center h-full bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <div className="flex flex-col items-center mb-6">
          <img
            src="https://placehold.co/100x100"
            alt="User Avatar"
            className="w-24 h-24 rounded-full border-4 border-gray-200 mb-4"
          />
          <h2 className="text-2xl font-bold text-gray-800">
            {userInfo?.name || "User Name"}
          </h2>
          <p className="text-gray-600 text-sm">
            {userInfo?.role || "user Role"}
          </p>
        </div>
        <div className="mt-4 space-y-4">
          <div className="flex items-center">
            <strong className="w-1/3 text-gray-600">Email:</strong>
            <span className="text-gray-800">{userInfo?.email || "N/A"}</span>
          </div>
          <div className="flex items-center">
            <strong className="w-1/3 text-gray-600">Phone:</strong>
            <span className="text-gray-800">{userInfo?.phone || "N/A"}</span>
          </div>
          <div className="flex items-center">
            <strong className="w-1/3 text-gray-600">Address:</strong>
            <span className="text-gray-800">{userInfo?.address || "N/A"}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
