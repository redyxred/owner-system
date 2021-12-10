import { IconType } from 'react-icons'

export interface IMenuItemProps {
  to: string
  icon: IconType | undefined
  active?: boolean
}
