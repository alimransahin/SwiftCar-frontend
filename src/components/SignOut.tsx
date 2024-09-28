import React, { useContext } from "react";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import { CircleUserRound } from "lucide-react";
import { AuthContext } from "../utils/AuthContext";
import { useNavigate } from "react-router-dom";

const SignOut: React.FC = () => {
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
      className="cursor-pointer mx-2"
      menu={{ items: menuItems, onClick: handleMenuClick }}
    >
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          <CircleUserRound />
          <b>{user?.name}</b>
        </Space>
      </a>
    </Dropdown>
  );
};

export default SignOut;
