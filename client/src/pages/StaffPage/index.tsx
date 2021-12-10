import React, { useCallback, useEffect } from 'react'
import AuthLayout from '@app/layouts/AuthLayout'
import { SubHeader } from '@app/components/Header'
import StaffTable from '@app/pages/StaffPage/staffTable'
import Loader from '@app/components/Loader'
import { observer } from 'mobx-react-lite'
import Empty from '@app/components/Empty'
import { useStore } from '@app/hooks/stores.hooks'

const StaffPage: React.FC = () => {
  const staffStore = useStore('staffStore')

  const fetchFromServer = useCallback(() => {
    staffStore.fetchAll()
  }, [staffStore])

  useEffect(() => {
    fetchFromServer()
    return () => {
      staffStore.clearList()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <AuthLayout
      subHeader={
        <SubHeader
          leftExtras={[
            <span key="count">{staffStore.staffList.length} человека</span>,
          ]}
        />
      }
    >
      {staffStore.loading ? (
        <Loader />
      ) : staffStore.staffList ? (
        <StaffTable data={staffStore.staffList} />
      ) : (
        <Empty description="Список пользователей пуст" />
      )}
    </AuthLayout>
  )
}

export default observer(StaffPage)
