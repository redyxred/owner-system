import React, { useCallback, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { Card, PageHeader, Space } from "antd";

import AuthLayout from "@app/layouts/AuthLayout";
import StaffTable from "@app/pages/StaffPage/staffTable";
import { useStore } from "@app/hooks/stores.hooks";

const StaffPage: React.FC = () => {
  const staffStore = useStore("staffStore");

  const fetchFromServer = useCallback(() => {
    staffStore.fetchAll();
  }, [staffStore]);

  useEffect(() => {
    const ac = new AbortController();
    fetchFromServer();
    return () => {
      ac.abort();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AuthLayout pageHeader={<PageHeader title="Список пользователей" />}>
      <Card bordered={false}>
        <Space></Space>
        <StaffTable loading={staffStore.loading} data={staffStore.staffList} />
      </Card>
    </AuthLayout>
  );
};

export default observer(StaffPage);
