import React from "react";
import { observer } from "mobx-react-lite";
import { List, Switch, message } from "antd";
import { useStore } from "@app/hooks/stores.hooks";

const NotificationsForm: React.FC = () => {
  const settingsStore = useStore("settingsStore");

  const handleChange = (name: string, checked: boolean) => {
    settingsStore.setSetting({
      [name]: checked,
    } as any);
    handleSave();
  };

  const handleSave = () => {
    settingsStore.saveSettings();
    // Доделать звуковое уведомление
    message.success("Настройки успешно сохранены").then();
    // snackbar.show({
    //   type: "success",
    //   title: "Данные обновлены",
    //   message: "Настройки успешно сохранены",
    //   withSound: settingsStore.settings.withSound,
    // });
  };

  const notificationsList = [
    {
      title: "Новый посетитель",
      description: "Уведомлять, когда приходят новые посетители",
      name: "visitors",
      defaultValue: settingsStore.settings.visitors,
    },
    {
      title: "Новый заказ",
      description: "Уведомлять, когда посетитель совершил новый заказ",
      name: "orders",
      defaultValue: settingsStore.settings.orders,
    },
    {
      title: "Со звуком",
      description: "Воспроизводить звуковое уведомление",
      name: "withSound",
      defaultValue: settingsStore.settings.withSound,
    },
  ];

  return (
    <>
      <h3>Уведомления</h3>
      <List
        itemLayout="horizontal"
        dataSource={notificationsList}
        renderItem={(item) => (
          <List.Item
            actions={[
              <Switch
                checkedChildren="Вкл."
                unCheckedChildren="Выкл."
                defaultChecked={item.defaultValue}
                onChange={(checked, event) => {
                  console.log(checked, event);
                  handleChange(item.name, checked);
                }}
              />,
            ]}
          >
            <List.Item.Meta title={item.title} description={item.description} />
          </List.Item>
        )}
      />
    </>
  );
};

export default observer(NotificationsForm);
