import React, { useState } from 'react'
import { observer } from 'mobx-react-lite'
import { AiFillFileAdd } from 'react-icons/ai'

import Button from '@app/components/Button'
import Checkbox from '@app/components/Checkbox'
import Card from '@app/components/Card'

import { ICheckboxTarget } from '@app/components/Checkbox/ICheckboxProps'
import { useStore } from '@app/hooks/stores.hooks'

const NotificationsForm: React.FC = () => {
  const [editedText, setEditedText] = useState<boolean>(false)
  const settingsStore = useStore('settingsStore')
  const snackbar = useStore('snackbarStore')

  const handleChange = (result: ICheckboxTarget) => {
    setEditedText(true)
    settingsStore.setSetting({
      [result.target.name]: result.target.checked,
    } as any)
  }

  const handleSave = () => {
    settingsStore.saveSettings()
    setEditedText(false)
    snackbar.show({
      type: 'success',
      title: 'Данные обновлены',
      message: 'Настройки успешно сохранены',
      withSound: settingsStore.settings.withSound,
    })
  }

  return (
    <Card
      title="Уведомления"
      extraLink={
        editedText
          ? {
              name: 'Изменено',
            }
          : undefined
      }
      footer={[
        <Button key="save-btn" icon={AiFillFileAdd} onClick={handleSave}>
          Сохранить
        </Button>,
      ]}
    >
      <Checkbox
        defaultValue={settingsStore.settings.visitors}
        name="visitors"
        title="Уведомлять о новых посетителях"
        onChange={handleChange}
      />
      <Checkbox
        defaultValue={settingsStore.settings.orders}
        name="orders"
        title="Уведомлять о новых заказах"
        onChange={handleChange}
      />
      <Checkbox
        defaultValue={settingsStore.settings.withSound}
        name="withSound"
        title="Доставлять со звуком"
        onChange={handleChange}
      />
    </Card>
  )
}

export default observer(NotificationsForm)
