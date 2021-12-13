import React from "react";
import { Link } from "react-router-dom";
import {
  Avatar,
  Button,
  Divider,
  Dropdown,
  Layout,
  Menu,
  Popover,
  Space,
} from "antd";
import { useStore } from "@app/hooks/stores.hooks";
import { IHeaderProps } from "@app/components/Header/IHeaderProps";
import { PROFILE, SETTINGS } from "@app/consts/routes";
import {
  LogoutOutlined,
  ProfileOutlined,
  BellOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import "./_header.scss";

const Header: React.FC<IHeaderProps> = ({ className }) => {
  const { logout } = useStore("authStore");
  const profileMenu = (
    <Menu>
      <Menu.Item icon={<ProfileOutlined />}>
        <Link to={PROFILE}>Профиль</Link>
      </Menu.Item>
      <Menu.Item icon={<SettingOutlined />}>
        <Link to={SETTINGS}>Настройки</Link>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item onClick={logout} danger icon={<LogoutOutlined />}>
        Завершить сеанс
      </Menu.Item>
    </Menu>
  );

  const notificationsContent = (
    <div>
      <p>Нет новых уведомлений</p>
    </div>
  );

  return (
    <Layout.Header
      className={className}
      style={{ display: "flex", lineHeight: "50px", height: 50 }}
    >
      <div style={{ flex: "1 1 0%" }} />
      <Space size="middle" align="center" split={<Divider type="vertical" />}>
        <Popover
          onVisibleChange={(e) => console.log(e)}
          placement="bottomRight"
          title="Уведомления"
          content={notificationsContent}
          trigger="click"
        >
          <Button type="text" icon={<BellOutlined />} />
        </Popover>
        <Dropdown overlay={profileMenu} placement="bottomRight">
          <div>
            <Avatar>MS</Avatar>
          </div>
        </Dropdown>
      </Space>
    </Layout.Header>
  );
};

export default Header;
