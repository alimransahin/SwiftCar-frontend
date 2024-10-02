import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../utils/AuthContext";
import SignOut from "../SignOut";
import { Moon, Sun } from "lucide-react";

interface DashboardHeaderProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({
  isDarkMode,
  toggleTheme,
}) => {
  const { user } = useContext<any>(AuthContext);

  return (
    <nav
      className={`flex justify-end items-center py-2 md:py-4 px-3 ${
        isDarkMode ? "bg-gray-900" : "bg-white"
      } text-black`}
    >
      <button
        onClick={toggleTheme}
        className={`${
          isDarkMode ? "text-white" : "text-gray-900"
        }  p-1 hover:scale-110 transition duration-300`}
      >
        {isDarkMode ? <Sun /> : <Moon />}
      </button>
      <ul className="text-end space-x-5">
        {user ? (
          <SignOut isDarkMode={isDarkMode} />
        ) : (
          <>
            <li className="relative inline-block">
              <Link
                className="p-1 inline-block border-b-4 border-transparent hover:border-black transition duration-500 text-lg font-bold text-center"
                to={"/signin"}
              >
                Log In
              </Link>
            </li>
            <li className="relative inline-block">
              <Link
                className="p-1 inline-block border-b-4 border-transparent hover:border-black transition duration-500 text-lg font-bold text-center"
                to={"/signup"}
              >
                Sign Up
              </Link>
            </li>
          </>
        )}
      </ul>

      {/* Theme Toggle Button */}
    </nav>
  );
};

export default DashboardHeader;
