import React from "react";
import { Card } from "antd";
import { useStore } from "@app/hooks/stores.hooks";
import { observer } from "mobx-react-lite";

const ListOrders: React.FC = () => {
  const { orders, loading } = useStore("ordersStore");
  return (
    <Card bordered={false} loading={loading}>
      {orders?.map((order) => (
        <p key={order._id}>{order.createdAt}</p>
      ))}
    </Card>
  );
};

export default observer(ListOrders);
