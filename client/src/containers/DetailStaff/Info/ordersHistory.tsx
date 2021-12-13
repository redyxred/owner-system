import React, { useMemo } from "react";
import { Table } from "antd";

const OrdersHistory: React.FC = () => {
  const columns = useMemo(
    () => [
      {
        key: "id",
        title: "ID Заказа",
      },
      {
        key: "dishes",
        title: "Детали заказа",
      },
      {
        key: "description",
        title: "Описание",
      },
      {
        key: "price",
        title: "Чек",
      },
      {
        key: "status",
        title: "Статус",
      },
    ],
    []
  );

  return <Table loading={true} size="small" columns={columns} />;
};

export default OrdersHistory;
