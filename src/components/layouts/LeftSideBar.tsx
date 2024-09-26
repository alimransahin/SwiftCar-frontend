import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ISidebarItem } from "../../utils/interface";
import { AuthContext } from "../../utils/AuthContext";
import { SidebarMenuItemsGenerator } from "../../utils/SidebarMenuItemsGenerator";
import { adminRoutes } from "../../routes/admin.routes";
import { userRoutes } from "../../routes/user.routes";
let sidebarItems: ISidebarItem[] = [];

const LeftSideBar = () => {
  const userRole = {
    ADMIN: "admin",
    USER: "user",
  };
  const { user } = useContext<any>(AuthContext);
  const role = user?.role;

  switch (role!) {
    case userRole.ADMIN:
      sidebarItems = SidebarMenuItemsGenerator(adminRoutes, userRole.ADMIN);
      break;
    case userRole.USER:
      sidebarItems = SidebarMenuItemsGenerator(userRoutes, userRole.USER);
      break;

    default:
      break;
  }
  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      style={{ height: "100vh", position: "sticky", top: "0", left: "0" }}
    >
      <Link
        to="/"
        className="bg-blue-950 text-white inline-block w-full font-semibold text-lg py-5 hover:bg-violet-950 "
      >
        <h1>Home</h1>
      </Link>

      <div className="bg-gradient-to-b from-blue-950 to-violet-950 h-full text-white">
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={sidebarItems}
          className="bg-transparent text-white text-left"
        />
      </div>
    </Sider>
  );
};

export default LeftSideBar;
