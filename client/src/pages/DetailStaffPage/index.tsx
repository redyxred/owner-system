import React, { useEffect } from "react";
import AuthLayout from "@app/layouts/AuthLayout";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { observer } from "mobx-react-lite";

import { useStore } from "@app/hooks/stores.hooks";
import { PageHeader, Col, Row } from "antd";

import Profile from "@app/containers/DetailStaff/Profile";
import Info from "@app/containers/DetailStaff/Info";

interface MatchParams {
  staffId: string;
}

const DetailStaffPage: React.FC<RouteComponentProps<MatchParams>> = ({
  match,
  history,
}) => {
  const staffId = match.params.staffId;
  const staffStore = useStore("staffStore");

  useEffect(() => {
    staffStore.fetch(staffId);
    return () => {
      // staffStore.clearStaff();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [staffId]);

  return (
    <AuthLayout
      pageHeader={
        <PageHeader title="Профиль пользователя" onBack={history.goBack} />
      }
    >
      <Row gutter={16}>
        <Col span={8}>
          <Profile />
        </Col>
        <Col span={16}>
          <Info />
        </Col>
      </Row>
    </AuthLayout>
  );
};

export default withRouter(DetailStaffPage);
