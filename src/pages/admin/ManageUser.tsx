import LoadingSpinner from "../../utils/LoadingSpinner";
import { IUsersResponse } from "../../utils/interface";
import {
  useGetAllUsersQuery,
  useUpdateUserMutation,
} from "../../redux/api/authApi";
import { toast } from "react-toastify";

const ManageUser = () => {
  const [updateUser] = useUpdateUserMutation();
  const {
    data: userRes = {} as IUsersResponse,
    error,
    isLoading,
  } = useGetAllUsersQuery({}) as {
    data: IUsersResponse;
    error: any;
    isLoading: boolean;
  };
  if (isLoading || error) {
    return <LoadingSpinner />;
  }
  const users = userRes.data;
  //
  //
  //
  //
  //
  //!--- previous---!
  //   const [approve] = useApproveMutation();
  //   const [isReturn] = useIsReturnMutation();

  const handleStatus = async (id: string, status: string) => {
    const confirmed = window.confirm(
      status === "admin"
        ? "Are you want to sure to make Admin from user?"
        : status === "block"
        ? "Are you want to sure to block user?"
        : "Are you want to sure to unblock user?"
    );

    if (confirmed) {
      try {
        await updateUser({ id, status }).unwrap();
        toast.success("role updated successfully.");
      } catch (error) {
        toast.error("Failed to update user: ");
      }
    }
  };
  return (
    <div className="p-8 bg-white h-full">
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">My users</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="py-2 px-4 bg-gray-200 text-gray-600 font-semibold">
                Name
              </th>
              <th className="py-2 px-4 bg-gray-200 text-gray-600 font-semibold">
                Email
              </th>
              <th className="py-2 px-4 bg-gray-200 text-gray-600 font-semibold">
                Phone
              </th>
              <th className="py-2 px-4 bg-gray-200 text-gray-600 font-semibold">
                Address
              </th>
              <th className="py-2 px-4 bg-gray-200 text-gray-600 font-semibold">
                Role
              </th>
              <th className="py-2 px-4 bg-gray-200 text-gray-600 font-semibold">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {users.length === 0 ? (
              <tr>
                <td colSpan={5} className="py-2 px-4 text-center text-gray-600">
                  No Users found.
                </td>
              </tr>
            ) : (
              users.map((user: any) => (
                <tr key={user._id}>
                  <td className="py-2 px-4 border-t">{user.name}</td>
                  <td className="py-2 px-4 border-t">{user.email}</td>
                  <td className="py-2 px-4 border-t">{user.phone}</td>
                  <td className="py-2 px-4 border-t">{user.address}</td>
                  <td className="py-2 px-4 border-t">{user.role}</td>
                  <td className="py-2 px-4 border-t">
                    {user?.role !== "admin" && user?.isBlocked !== true ? (
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleStatus(user._id, "admin")}
                          className=" text-black w-full bg-green-500  inline-block px-3 py-3 font-bold rounded-lg shadow-lg "
                        >
                          Make Admin
                        </button>
                        <button
                          onClick={() => handleStatus(user._id, "block")}
                          className=" text-black w-full bg-rose-600  inline-block px-3 py-3 font-bold rounded-lg shadow-lg "
                        >
                          Block
                        </button>
                      </div>
                    ) : user?.role !== "admin" && user?.isBlocked === true ? (
                      <button
                        onClick={() => handleStatus(user._id, "unblock")}
                        className=" text-black w-full bg-green-500  inline-block px-3 py-3 font-bold rounded-lg shadow-lg "
                      >
                        Unblock
                      </button>
                    ) : (
                      <button className=" text-gray-600 w-full bg-gray-300 cursor-not-allowed inline-block transition-colors px-3 py-3 font-bold rounded-lg shadow-lg ">
                        Admin
                      </button>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUser;
