import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { Layout } from "antd";

import { useStore } from "@app/hooks/stores.hooks";
import { IAuthLayoutProps } from "@app/layouts/AuthLayout/IAuthLayoutProps";
import Logotype from "@app/components/Logotype";
import MenuContainer from "@app/containers/MenuContainer";
import Header from "@app/components/Header";
import "./_authLayout.scss";
import useRouter from "@app/hooks/router.hook";

const AuthLayout: React.FC<IAuthLayoutProps> = ({ children, pageHeader }) => {
  const settingsStore = useStore("settingsStore");

  const { siderRoutes, current } = useRouter();
  const sidebarItems = siderRoutes();
  const siderRoute = current();

  const { Content, Footer, Sider } = Layout;

  const [collapsed, setCollapsed] = useState<boolean>(
    settingsStore.settings.collapseMenu
  );

  const onCollapse = (collapsed: boolean) => {
    settingsStore.setSetting({
      collapseMenu: collapsed,
    } as any);
    settingsStore.saveSettings();
    setCollapsed(collapsed);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <Logotype collapsed={collapsed} />
        <MenuContainer items={sidebarItems} current={siderRoute?.path} />
      </Sider>
      <Layout className="layout">
        <Header />
        {pageHeader && (
          <div className="layout__pageHeader layoutBackground">
            {pageHeader}
          </div>
        )}
        <Content style={{ margin: "24px" }}>{children}</Content>
        <Footer className="layout__footer">
          <small>
            <b>OwnerSystem ©2021</b>
            <br /> Created by redyx & backdoor
          </small>
        </Footer>
      </Layout>
    </Layout>
  );
};

export default withRouter(AuthLayout);
