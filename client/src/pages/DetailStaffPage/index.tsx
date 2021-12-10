import React, { useEffect, useState } from 'react'
import AuthLayout from '@app/layouts/AuthLayout'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import Loader from '@app/components/Loader'
import { observer } from 'mobx-react-lite'
import DetailStaffContainer from '@app/containers/DetailStaffContainer'
import Empty from '@app/components/Empty'
import { Col, Row } from 'react-flexbox-grid'
import Card from '@app/components/Card'
import { SubHeader } from '@app/components/Header'
import Button from '@app/components/Button'
import { AiOutlineEdit } from 'react-icons/ai'
import { TabPane, Tabs } from '@app/components/Tabs'
import {
  appendQueryParam,
  deleteQueryParam,
  queryParams,
} from '@app/utils/query'
import { ACTION_STAFF, INFO_STAFF } from '@app/consts/queryParams'
import { Permissions } from '@app/consts/permissions'
import EditStaffDrawerContainer from '@app/containers/EditStaffDrawerContainer'
import { useStore } from '@app/hooks/stores.hooks'
import { visibleForPermission } from '@app/utils/permissions'

interface MatchParams {
  staffId: string
}

const DetailStaffPage: React.FC<RouteComponentProps<MatchParams>> = ({
  match,
  location,
  history,
}) => {
  const staffId = match.params.staffId

  const currentUrlTab =
    queryParams(location.search).get(INFO_STAFF) || undefined
  const actionUrl = queryParams(location.search).get(ACTION_STAFF)

  const staffStore = useStore('staffStore')
  const [isEdit, setIsEdit] = useState(actionUrl === 'edit')

  // const fetchFromServer = useCallback(() => {
  //   fetch(staffId)
  // }, [fetch, staffId])

  useEffect(() => {
    // fetchFromServer()
    staffStore.fetch(staffId)
    return () => {
      staffStore.clearStaff()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [staffId])

  const handleOpenEditDrawer = (value: boolean) => {
    if (value) {
      history.replace(appendQueryParam(ACTION_STAFF, 'edit', location))
    } else {
      history.replace(deleteQueryParam(ACTION_STAFF, location))
    }
    setIsEdit(value)
  }

  const onOpenDrawerEdit = () => handleOpenEditDrawer(true)

  return (
    <AuthLayout
      headerOptions={{
        title: staffStore.currentStaff
          ? `${staffStore.currentStaff?.firstname} ${staffStore.currentStaff?.lastname}`
          : undefined,
      }}
      subHeader={
        <SubHeader
          rightExtras={[
            <Button
              type="default"
              onClick={onOpenDrawerEdit}
              icon={AiOutlineEdit}
            >
              Редактировать
            </Button>,
          ]}
        />
      }
    >
      {staffStore.loading ? (
        <Loader block />
      ) : staffStore.currentStaff ? (
        <>
          <EditStaffDrawerContainer
            isEdit={isEdit}
            onClose={handleOpenEditDrawer}
            currentStaff={staffStore.currentStaff}
          />
          <Row>
            <DetailStaffContainer staffData={staffStore.currentStaff} />
            <Col
              xs={12}
              style={{
                marginTop: 15,
              }}
            >
              <Card>
                <Tabs
                  defaultActiveKey={currentUrlTab}
                  onChange={(activeKey) => {
                    history.replace(
                      appendQueryParam(INFO_STAFF, activeKey, location)
                    )
                  }}
                >
                  {visibleForPermission(staffStore.currentStaff.permissions, [
                    Permissions.WAITER,
                    Permissions.ADMIN,
                  ]) ? (
                    <TabPane tab="График работы" key="schedule">
                      Tab 1
                    </TabPane>
                  ) : null}
                  <TabPane tab="История заказов" key="history">
                    Tab 2
                  </TabPane>
                </Tabs>
              </Card>
            </Col>
          </Row>
        </>
      ) : (
        <Empty description="Такого пользователя не существует" withAnimation />
      )}
    </AuthLayout>
  )
}

export default withRouter(observer(DetailStaffPage))
