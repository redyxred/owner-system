import React from 'react'
import { IAvatarProps } from '@app/components/Avatar/IAvatar'

export interface IListProps {}

export interface IListItemProps {
  title: string
  subTitle?: string
  avatar?: React.FC<IAvatarProps>
  actions?: any
}
