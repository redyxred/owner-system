import React from 'react'
import AuthLayout from '@app/layouts/AuthLayout'
import List from '@app/components/List'
import ListItem from '@app/components/List/ListItem'
import Avatar from '@app/components/Avatar'
import { Col, Row } from 'react-flexbox-grid'
import Card from '@app/components/Card'

const OrdersPage: React.FC = () => {
  return (
    <AuthLayout>
      <Row>
        <Col xs>
          <Card>
            <List>
              {['item', 'item2'].map((item) => (
                <ListItem avatar={Avatar} title={item} />
              ))}
            </List>
          </Card>
        </Col>
        <Col xs={4}>Actions</Col>
      </Row>
    </AuthLayout>
  )
}

export default OrdersPage
