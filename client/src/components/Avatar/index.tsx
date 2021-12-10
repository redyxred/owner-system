import React from 'react'
import { IAvatarProps } from '@app/components/Avatar/IAvatar'

import './_avatar.scss'
import cn from 'classnames'

const Avatar: React.FC<IAvatarProps> = ({
  username,
  size = 'sm',
  className,
}) => {
  const renderAvatar = () =>
    username ? `${username.split(' ')[0][0]}${username.split(' ')[1][0]}` : 'MS'
  return (
    <div
      className={cn('avatar', className, {
        'avatar--sm': size === 'sm',
        'avatar--md': size === 'md',
        'avatar--lg': size === 'lg',
      })}
    >
      <span className="avatar__text">{renderAvatar()}</span>
    </div>
  )
}

export default Avatar
