import { IconType } from 'react-icons'

export interface ISubHeaderProps {
  rightDivider?: boolean
  leftDivider?: boolean
  rightExtras?: JSX.Element[]
  leftExtras?: JSX.Element[]
}

export interface IHeaderProps {
  icon?: IconType
  title?: string
  subHeader?: JSX.Element
}
