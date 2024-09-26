import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../utils/AuthContext";
import SignOut from "../SignOut";

const DashboardHeader = () => {
  const { user } = useContext<any>(AuthContext);

  return (
    <nav className="  space-x-10 py-2 md:py-4 bg-gradient-to-r from-blue-950  to-indigo-950 text-white  px-3">
      <ul className=" text-end space-x-5 mx-auto">
        {user ? (
          <SignOut />
        ) : (
          <>
            <li className="relative inline-block">
              <Link
                className=" p-1 inline-block border-b-4 border-transparent  hover:border-white transition duration-500 text-lg font-bold text-center"
                to={"/signin"}
              >
                Log In
              </Link>
            </li>
            <li className="relative inline-block">
              <Link
                className=" p-1 inline-block border-b-4 border-transparent  hover:border-white transition duration-500 text-lg font-bold text-center"
                to={"/signup"}
              >
                Sing Up
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default DashboardHeader;
