export interface ISelectData {
  name: string
  value: string
}

export interface ISelectProps {
  placeholder?: string
  block?: boolean
  data: ISelectData[]
  onChange: (current: ISelectData) => void
}
