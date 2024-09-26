import { NavLink } from "react-router-dom";
import { ISidebarItem, IUserPath } from "./interface";

export const SidebarMenuItemsGenerator = (items: IUserPath[], role: string) => {
  const sidebarItems = items.reduce((acc: ISidebarItem[], item) => {
    if (item.path && item.name) {
      acc.push({
        key: item.name,
        label: <NavLink to={`/${role}/${item.path}`}>{item.name}</NavLink>,
      });
    }

    if (item.children) {
      acc.push({
        key: item.name ?? "default-key",
        label: item.name ?? "Default",
        children: item.children
          .map((child) => {
            if (child.name) {
              return {
                key: child.name,
                label: (
                  <NavLink to={`/${role}/${child.path}`}>{child.name}</NavLink>
                ),
              };
            }
            return null;
          })
          .filter((child) => child !== null) as ISidebarItem[],
      });
    }

    return acc;
  }, [] as ISidebarItem[]);

  return sidebarItems;
};
