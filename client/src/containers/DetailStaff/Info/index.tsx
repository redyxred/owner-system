import React, { useMemo } from "react";
import { Card } from "antd";
import { INFO_STAFF } from "@app/consts/queryParams";
import useTabs from "@app/hooks/tabs.hook";
import OrdersHistory from "@app/containers/DetailStaff/Info/ordersHistory";
import Edit from "@app/containers/DetailStaff/Info/edit";

const Info: React.FC = () => {
  const { activeTabKey, onTabChange } = useTabs(INFO_STAFF, "orders");

  const tabList = useMemo(
    () => [
      {
        key: "orders",
        tab: "История заказов",
      },
      {
        key: "settings",
        tab: "Настройки",
      },
    ],
    []
  );

  const contentList = {
    orders: <OrdersHistory />,
    settings: <Edit />,
  };

  return (
    <Card
      bordered={false}
      tabList={tabList}
      activeTabKey={activeTabKey}
      onTabChange={onTabChange}
    >
      {contentList[activeTabKey as keyof typeof contentList]}
    </Card>
  );
};

export default Info;
