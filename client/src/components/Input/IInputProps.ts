import { ChangeEventHandler, CSSProperties } from 'react'

export interface IInputProps {
  type?: string
  name?: string
  value?: string
  block?: boolean
  noStyles?: boolean
  error?: boolean
  placeholder?: string
  style?: CSSProperties
  className?: string
  onChange?: ChangeEventHandler<HTMLInputElement>
}
