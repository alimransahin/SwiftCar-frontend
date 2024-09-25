import React from "react";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import { CircleUserRound } from "lucide-react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { logOut } from "../redux/features/authSlice";

const SignOut: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onClick: MenuProps["onClick"] = () => {
    try {
      dispatch(logOut());
      localStorage.removeItem("accessToken");
      toast.success("Log Out successful!");
      navigate("/");
    } catch (err: any) {
      console.log(err);
      toast.error(err?.data?.message || "Log Out failed!");
    }
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
        </Space>
      </a>
    </Dropdown>
  );
};

export default SignOut;
