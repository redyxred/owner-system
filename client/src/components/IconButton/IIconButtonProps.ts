import React from 'react'
import { IconType } from 'react-icons'

export interface IIconButtonProps {
  type?: 'primary' | 'default' | 'ghost'
  icon: IconType
  onClick?: React.MouseEventHandler<HTMLDivElement>
}
