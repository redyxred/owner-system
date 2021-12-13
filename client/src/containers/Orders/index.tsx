import React, { useEffect } from "react";
import { Col, Row } from "antd";
import ListOrders from "@app/containers/Orders/list";
import CurrentOrder from "@app/containers/Orders/current";
import { useStore } from "@app/hooks/stores.hooks";

const OrdersContainer: React.FC = () => {
  const ordersStore = useStore("ordersStore");

  useEffect(() => {
    ordersStore.fetchAll();
  }, []);

  return (
    <Row gutter={16}>
      <Col span={8}>
        <ListOrders />
      </Col>
      <Col span={16}>
        <CurrentOrder />
      </Col>
    </Row>
  );
};

export default OrdersContainer;
