import React from 'react'
import { Row, Col } from 'react-flexbox-grid'
import { AiFillFileAdd } from 'react-icons/ai'
import AuthLayout from '@app/layouts/AuthLayout'
import Card from '@app/components/Card'
import Button from '@app/components/Button'
import Select from '@app/components/Select'
import NotificationsForm from '@app/pages/SettingsPage/notificationsForm'

const SettingsPage: React.FC = () => {
  return (
    <AuthLayout>
      <Row>
        <Col xs>
          <NotificationsForm />
        </Col>
        <Col xs>
          <Card
            title="Интерфейс"
            footer={[
              <Button key="save-btn" icon={AiFillFileAdd} onClick={() => {}}>
                Сохранить
              </Button>,
            ]}
          >
            <Select
              block
              placeholder="Цвет темы"
              onChange={(current) => console.log(current)}
              data={[
                { name: 'Светлая', value: 'light' },
                { name: 'Тёмная', value: 'dark' },
              ]}
            />
          </Card>
        </Col>
      </Row>
    </AuthLayout>
  )
}

export default SettingsPage
