import React from "react";
import {
  Avatar,
  Button,
  Col,
  Form,
  Input,
  message,
  Row,
  Select,
  Skeleton,
} from "antd";
import { useStore } from "@app/hooks/stores.hooks";
import { observer } from "mobx-react-lite";

const Edit: React.FC = () => {
  const { currentStaff, loading, edit } = useStore("staffStore");

  const EditForm = () => (
    <Form
      layout="vertical"
      wrapperCol={{ span: 24 }}
      onFinish={(values) => {
        edit(currentStaff?._id, values);
      }}
    >
      <Row gutter={20}>
        <Col span={12}>
          <Form.Item label="Имя" name="firstname">
            <Input placeholder={currentStaff?.firstname} />
          </Form.Item>
          <Form.Item label="Фамилия" name="lastname">
            <Input placeholder={currentStaff?.lastname} />
          </Form.Item>
          <Form.Item label="Адрес E-Mail" name="email">
            <Input placeholder={currentStaff?.email} />
          </Form.Item>
          <Form.Item label="Номер телефона" name="phone">
            <Input placeholder={currentStaff?.phone} />
          </Form.Item>
          <Form.Item label="Пол" name="gender">
            <Select placeholder={currentStaff?.gender}>
              <Select.Option value="Мужской">Мужской</Select.Option>
              <Select.Option value="Женский">Женский</Select.Option>
              <Select.Option value="Не указано">Не указано</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit">Сохранить</Button>
          </Form.Item>
        </Col>
        <Col>
          <Avatar />
        </Col>
      </Row>
    </Form>
  );

  return (
    <Skeleton loading={loading} active>
      <EditForm />
    </Skeleton>
  );
};

export default observer(Edit);
