import React, { useContext } from "react";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import { CircleUserRound } from "lucide-react";
import { AuthContext } from "../utils/AuthContext";

const SignOut: React.FC = () => {
  const { user, logout } = useContext<any>(AuthContext);

  const onClick: MenuProps["onClick"] = () => {
    logout();
  };

  const items: MenuProps["items"] = [
    {
      label: "Log Out",
      key: "1",
    },
  ];

  return (
    <Dropdown menu={{ items, onClick }}>
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
