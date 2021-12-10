import { IconType } from 'react-icons'

export interface ICardExtraLink {
  name: string
  icon?: IconType
  event?: (() => void) | string
}

export interface ICardProps {
  title?: string
  extraLink?: ICardExtraLink
  footer?: JSX.Element[]
  className?: string
  classNameContent?: string
}
