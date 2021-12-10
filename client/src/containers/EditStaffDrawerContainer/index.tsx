import React from 'react'
import DrawerWindow from '@app/components/DrawerWindow'
import { ServerUser } from '@app/feathers/serverInterfaces'
import EditStaffForm from '@app/containers/EditStaffDrawerContainer/form'

const EditStaffDrawerContainer: React.FC<{
  currentStaff: ServerUser
  isEdit: boolean
  onClose: (_: boolean) => void
}> = ({ currentStaff, isEdit, onClose }) => {
  const onCloseDrawer = () => {
    onClose(false)
  }

  return (
    <DrawerWindow
      handler={false}
      open={isEdit}
      width="40vw"
      level={null}
      placement="right"
      onClose={onCloseDrawer}
    >
      {currentStaff ? (
        <EditStaffForm
          key={new Date().toDateString()}
          currentStaff={currentStaff}
          onSaveForm={onCloseDrawer}
        />
      ) : (
        <>Loading</>
      )}
    </DrawerWindow>
  )
}

export default EditStaffDrawerContainer
