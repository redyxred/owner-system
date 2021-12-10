export interface ISnackbarOptions {
  type: 'success' | 'error' | 'info'
  title?: string
  message: string
  timer?: number
  onCancel?: () => void
  titleCancel?: string
  onOK?: () => void
  titleOk?: string
  withSound?: boolean
  onDismiss?: () => void
}

export interface SnackbarStore {
  show: (content: ISnackbarOptions) => void
  remove: (id: number) => void
}

export interface ISnackbarOptionsWithID extends ISnackbarOptions {
  id: number
}
