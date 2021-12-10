export interface ISnackbarProps {
  type: 'success' | 'error' | 'info'
  title?: string
  message: string
  timer?: number
  onDismiss: () => void
  onCancel?: () => void
  titleCancel?: string
  onOK?: () => void
  titleOk?: string
}
