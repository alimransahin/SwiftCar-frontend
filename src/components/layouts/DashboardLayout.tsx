import React, { useState } from "react";
import { Layout, Menu, Button } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  HomeOutlined,
  UserOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import SignOut from "../SignOut";
import { Link, Outlet } from "react-router-dom";
import SubMenu from "antd/es/menu/SubMenu";
import { Car } from "lucide-react";
const menuItems = [
  {
    key: "1",
    icon: <HomeOutlined />,
    label: <Link to="/">Home</Link>,
  },
  {
    key: "2",
    icon: <Car />,
    label: "Cars",
    children: [
      { key: "2-1", label: <Link to="/admin/cars/add">Add Car</Link> },
      { key: "2-2", label: <Link to="/cars/manage">Manage Cars</Link> },
    ],
  },
  {
    key: "3",
    icon: <SettingOutlined />,
    label: "Settings",
    children: [
      { key: "3-1", label: "Profile Settings" },
      { key: "3-2", label: "Account Settings" },
    ],
  },
];
const { Header, Sider, Content } = Layout;

const Dashboard: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout className="min-h-screen">
      {/* Sidebar */}
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        className="fixed top-16 left-0 h-screen"
      >
        <div className="text-white text-center p-4 font-bold">
          {collapsed ? "DM" : "Dashboard"}
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          {menuItems.map((item) =>
            item.children ? (
              <SubMenu key={item.key} icon={item.icon} title={item.label}>
                {item.children.map((subItem) => (
                  <Menu.Item key={subItem.key}>{subItem.label}</Menu.Item>
                ))}
              </SubMenu>
            ) : (
              <Menu.Item key={item.key} icon={item.icon}>
                {item.label}
              </Menu.Item>
            )
          )}
        </Menu>
      </Sider>

      {/* Layout with Navbar and Content */}
      <Layout
        className={`transition-all duration-200 ${
          collapsed ? "ml-20" : "ml-52"
        }`}
      >
        <Header className="fixed top-0 left-0 w-full bg-gradient-to-r from-primary to-accent shadow-lg flex justify-between items-center px-4 z-10">
          <Button type="text" onClick={toggleSidebar}>
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </Button>
          <Link
            className="font-bold text-lg hover:bg-accent p-3 rounded-lg"
            to="/"
          >
            Home
          </Link>
          <div className="text-right">
            <SignOut />
          </div>
        </Header>

        {/* Main Content Area */}
        <Content className="mt-16 p-6 bg-white min-h-screen">
          <Outlet />
          {/* <h1 className="text-2xl font-bold">Dashboard Content</h1> */}
          {/* <p>This is the content area for your dashboard.</p> */}
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
