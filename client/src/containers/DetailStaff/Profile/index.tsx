import React, { useMemo } from "react";
import moment from "moment";
import { observer } from "mobx-react-lite";
import {
  Avatar,
  Button,
  Card,
  Divider,
  List,
  Skeleton,
  Space,
  Tag,
  Typography,
} from "antd";
import {
  CalendarOutlined,
  MailOutlined,
  ManOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { renderPermissionName } from "@app/utils/permissions";
import { useStore } from "@app/hooks/stores.hooks";

const Profile: React.FC = () => {
  const staffStore = useStore("staffStore");

  const infoList = useMemo(
    () => [
      {
        title: "Номер телефона",
        value: staffStore.currentStaff?.phone,
        icon: PhoneOutlined,
      },
      {
        title: "E-mail",
        value: staffStore.currentStaff?.email,
        icon: MailOutlined,
      },
      {
        title: "Пол",
        value: staffStore.currentStaff?.gender,
        icon: ManOutlined,
      },
      {
        title: "Дата регистрации",
        value: moment(staffStore.currentStaff?.createdAt).fromNow(),
        icon: CalendarOutlined,
      },
    ],
    [staffStore.currentStaff]
  );

  const fullName = `${staffStore.currentStaff?.firstname} ${staffStore.currentStaff?.lastname}`;

  return (
    <Card
      bordered={false}
      bodyStyle={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Skeleton loading={staffStore.loading} active>
        <Space direction="vertical" align="center" size={2}>
          <Avatar size={100} style={{ marginBottom: 10 }}>
            {staffStore.currentStaff?.firstname}
          </Avatar>
          <Typography.Title
            level={5}
            style={{
              margin: 0,
            }}
          >
            {fullName}
          </Typography.Title>
          <Tag>
            {renderPermissionName(staffStore.currentStaff?.permissions)}
          </Tag>
        </Space>
        <Divider dashed />
        <List
          split={false}
          size="small"
          style={{
            width: "100%",
          }}
          itemLayout="horizontal"
          dataSource={infoList}
          renderItem={({ icon: Icon, title, value }) => (
            <List.Item>
              <List.Item.Meta avatar={<Icon />} title={title} />
              <div>{value}</div>
            </List.Item>
          )}
        />
        <Divider dashed />
        <Space direction="vertical" style={{ width: "100%" }}>
          <Button type="primary" block>
            Отправить сообщение
          </Button>
          <Button type="dashed" block>
            Редактировать
          </Button>
        </Space>
      </Skeleton>
    </Card>
  );
};

export default observer(Profile);
