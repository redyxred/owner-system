import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";

import { IMenuContainerProps } from "@app/containers/MenuContainer/IMenuContainerProps";
import "./_menuContainer.scss";

const MenuContainer: React.FC<IMenuContainerProps> = ({ items, current }) => {
  return (
    <Menu theme="dark" defaultSelectedKeys={[current || "0"]} mode="inline">
      {items.map((item) => {
        const Icon = item.siderOptions?.icon;
        return (
          <Menu.Item key={item.path} icon={Icon && <Icon />}>
            <Link to={item.path}>{item.siderOptions?.title}</Link>
          </Menu.Item>
        );
      })}
    </Menu>
  );
};

export default MenuContainer;
