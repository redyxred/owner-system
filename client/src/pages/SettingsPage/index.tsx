import React from "react";
import { Card, Tabs } from "antd";
import AuthLayout from "@app/layouts/AuthLayout";
import NotificationsForm from "@app/pages/SettingsPage/notificationsForm";
import { TYPE_SETTINGS } from "@app/consts/queryParams";
import useTabs from "@app/hooks/tabs.hook";

const { TabPane } = Tabs;

const SettingsPage: React.FC = () => {
  const { activeTabKey, onTabChange } = useTabs(TYPE_SETTINGS, "general");

  return (
    <AuthLayout>
      <Card bordered={false}>
        <Tabs
          tabPosition="left"
          onChange={onTabChange}
          activeKey={activeTabKey}
        >
          <TabPane tab="Основные" key="general">
            <h3>Основные</h3>
            <p>Пусто</p>
          </TabPane>
          <TabPane tab="Уведомления" key="notifications">
            <NotificationsForm />
          </TabPane>
        </Tabs>
      </Card>
    </AuthLayout>
  );
};

export default SettingsPage;
