import React from "react";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import LeftSideBar from "./LeftSideBar";

import DashboardHeader from "./DashboardHeader";

const { Content } = Layout;

const Dashboard: React.FC = () => {
  return (
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
  );
};

export default Dashboard;
