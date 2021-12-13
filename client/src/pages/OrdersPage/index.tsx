import React from "react";
import AuthLayout from "@app/layouts/AuthLayout";
import { PageHeader } from "antd";
import OrdersContainer from "@app/containers/Orders";

const OrdersPage: React.FC = () => {
  return (
    <AuthLayout pageHeader={<PageHeader title="Список заказов" />}>
      <OrdersContainer />
    </AuthLayout>
  );
};

export default OrdersPage;
