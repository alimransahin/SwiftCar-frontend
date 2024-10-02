import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ISidebarItem } from "../../utils/interface";
import { AuthContext } from "../../utils/AuthContext";
import { SidebarMenuItemsGenerator } from "../../utils/SidebarMenuItemsGenerator";
import { adminRoutes } from "../../routes/admin.routes";
import { userRoutes } from "../../routes/user.routes";

interface LeftSideBarProps {
  isDarkMode: boolean;
}

let sidebarItems: ISidebarItem[] = [];

const LeftSideBar: React.FC<LeftSideBarProps> = ({ isDarkMode }) => {
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
      style={{ height: "100%", position: "sticky", top: "0", left: "0" }}
      className="text-left "
    >
      <Link
        to="/"
        className={`inline-block w-full text-center font-semibold text-lg py-5 ${
          isDarkMode
            ? "bg-gray-900 text-white hover:bg-gray-700"
            : "bg-white text-black "
        }`}
      >
        <h1>Home</h1>
      </Link>

      <div className={`h-full ${isDarkMode ? "bg-gray-900" : "bg-gray-100"}`}>
        <Menu
          theme={isDarkMode ? "dark" : "light"}
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={sidebarItems}
        />
      </div>
    </Sider>
  );
};

export default LeftSideBar;
