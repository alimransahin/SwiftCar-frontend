import React, { useState } from "react";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import LeftSideBar from "./LeftSideBar";
import DashboardHeader from "./DashboardHeader";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const { Content } = Layout;

const Dashboard: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <Layout
        className="w-full"
        style={{ background: isDarkMode ? "#001529" : "#ffffff" }}
      >
        <LeftSideBar isDarkMode={isDarkMode} />
        <Layout>
          <DashboardHeader isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
          <Content style={{ margin: "24px 16px 0" }}>
            <div
              style={{
                padding: 24,
                minHeight: 360,
                background: "#f0f2f5",
                color: "#000000",
              }}
            >
              <Outlet />
            </div>
          </Content>
        </Layout>
      </Layout>
      <ToastContainer
        position="top-center"
        theme={isDarkMode ? "dark" : "colored"}
        autoClose={1000}
        pauseOnHover={false}
      />
    </>
  );
};

export default Dashboard;
