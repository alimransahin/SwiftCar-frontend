import React, { useContext } from "react";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import { CircleUserRound } from "lucide-react";
import { AuthContext } from "../utils/AuthContext";
import { useNavigate } from "react-router-dom";

interface SignOutProps {
  isDarkMode?: boolean; // Optional prop with default value set later
}

const SignOut: React.FC<SignOutProps> = ({ isDarkMode = false }) => {
  // Default to false
  const navigate = useNavigate();
  const { user, logout } = useContext<any>(AuthContext);

  const handleMenuClick: MenuProps["onClick"] = ({ key }) => {
    if (key === "logout") {
      logout();
      navigate("/");
    }
  };

  const menuItems: MenuProps["items"] = [
    {
      label: "Log Out",
      key: "logout",
    },
  ];

  return (
    <Dropdown
      className={`cursor-pointer mx-2 ${
        isDarkMode ? "text-white" : "text-black"
      }`}
      menu={{ items: menuItems, onClick: handleMenuClick }}
    >
      <a onClick={(e) => e.preventDefault()}>
        <Space className={`hover:text-${isDarkMode ? "gray-300" : "gray-700"}`}>
          <CircleUserRound
            className={`${isDarkMode ? "text-white" : "text-black"}`}
          />
          <b className={`${isDarkMode ? "text-white" : "text-black"}`}>
            {user?.name}
          </b>
        </Space>
      </a>
    </Dropdown>
  );
};

export default SignOut;
