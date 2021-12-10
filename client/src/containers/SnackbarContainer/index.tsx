import React from 'react'
import { observer } from 'mobx-react-lite'
import SnackBar from '@app/components/SnackBar'
import { useStore } from '@app/hooks/stores.hooks'

const SnackbarWrapper: React.FC = observer(() => {
  const snackbarStore = useStore('snackbarStore')

  return (
    <div className="snackbar-wrapper">
      {snackbarStore.snackbars.map((options) => (
        <SnackBar
          key={options.id}
          {...options}
          onDismiss={() => {
            snackbarStore.remove(options.id)
          }}
        />
      ))}
    </div>
  )
})

const SnackbarContainer: React.FC = ({ children }) => {
  return (
    <>
      {children}
      <SnackbarWrapper />
    </>
  )
}

export default SnackbarContainer
