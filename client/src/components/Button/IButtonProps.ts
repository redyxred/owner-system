import { MouseEventHandler } from 'react'
import { IconType } from 'react-icons'

export interface IButtonProps {
  type?: 'primary' | 'default'
  htmlType?: 'submit' | 'reset' | 'button'
  className?: string
  block?: boolean
  icon?: IconType
  onClick?: MouseEventHandler<HTMLButtonElement>
  disabled?: boolean
}
