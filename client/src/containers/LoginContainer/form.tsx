import React, { useState } from "react";
import { Form, Button, Input } from "antd";
import { useHistory } from "react-router-dom";
import { HOME } from "@app/consts/routes";
import { useStore } from "@app/hooks/stores.hooks";

type FormValues = {
  email: string;
  password: string;
};

const LoginForm: React.FC = () => {
  const { authorize } = useStore("authStore");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const submitHandler = (values: FormValues) => {
    setLoading(true);
    authorize(values)
      .finally(() => setLoading(false))
      .then((result) => {
        if (!result) return;
        history.push({ pathname: HOME });
      });
  };

  return (
    <Form
      initialValues={{
        email: "",
        password: "",
      }}
      onFinish={(values) => {
        submitHandler(values);
      }}
    >
      <Form.Item name="email">
        <Input
          disabled={loading}
          type="email"
          placeholder="Адрес электронной почты"
        />
      </Form.Item>
      <Form.Item name="password">
        <Input.Password disabled={loading} placeholder="Пароль" />
      </Form.Item>
      <Button block htmlType="submit" type="primary" loading={loading}>
        Войти
      </Button>
    </Form>
  );
};

export default LoginForm;
