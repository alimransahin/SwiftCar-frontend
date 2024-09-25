import { Menu, X } from "lucide-react";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import SignOut from "./SignOut";
import { AuthContext } from "../utils/AuthContext";

const Header = () => {
  const { user } = useContext<any>(AuthContext);
  const menu = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/about" },
    { name: "Booking", link: "/car" },
    { name: "Contact", link: "/contact" },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gradient-to-r from-primary via-blue-400 to-accent text-white rounded-sm px-3">
      <nav className="container mx-auto flex items-center justify-between space-x-10 py-2 md:py-4 ">
        <div className="md:hidden flex items-center">
          <button
            onClick={handleMenuToggle}
            className="text-white focus:outline-none"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        <Link to={"/"}>
          <img
            src="https://i.ibb.co.com/L5Fn3Vx/cooltext466666084338602.png"
            alt="SwiftCar Logo"
            className="w-60 h-auto"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-5">
          <ul className="flex items-center space-x-5">
            {menu.map((item, index) => (
              <li key={index}>
                <Link
                  className=" p-1 inline-block border-b-4 border-transparent  hover:border-white transition duration-500 text-lg font-bold text-center "
                  to={item.link}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <ul className="flex items-center space-x-5">
          {user ? (
            <SignOut />
          ) : (
            <>
              <li className="relative">
                <Link
                  className=" p-1 inline-block border-b-4 border-transparent  hover:border-white transition duration-500 text-lg font-bold text-center"
                  to={"/signin"}
                >
                  Log In
                </Link>
              </li>
              <li className="relative">
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

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="md:hidden flex flex-col items-center space-y-5 mt-4">
          {menu.map((item, index) => (
            <li key={index}>
              <Link
                className="rounded-lg backdrop-blur-[2px] p-1 inline-block"
                to={item.link}
                onClick={handleMenuToggle}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Header;
