import React from "react";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import LeftSideBar from "./LeftSideBar";
import DashboardHeader from "./DashboardHeader";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const { Content } = Layout;

const Dashboard: React.FC = () => {
  return (
    <>
      <Layout className="w-full">
        <LeftSideBar />
        <Layout>
          <DashboardHeader />

          <Content style={{ margin: "24px 16px 0" }}>
            <div
              style={{
                padding: 24,
                minHeight: 360,
              }}
            >
              <Outlet />
            </div>
          </Content>
        </Layout>
      </Layout>
      <ToastContainer
        position="top-center"
        theme="colored"
        autoClose={1000}
        pauseOnHover={false}
      />
    </>
  );
};

export default Dashboard;
