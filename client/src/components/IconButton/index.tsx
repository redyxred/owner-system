import React from 'react'
import cn from 'classnames'
import { IIconButtonProps } from '@app/components/IconButton/IIconButtonProps'

import './_iconButton.scss'

const IconButton: React.FC<IIconButtonProps> = ({
  icon: Icon,
  onClick,
  type = 'default',
}) => {
  return (
    <div
      className={cn('iconButton', {
        'iconButton--primary': type === 'primary',
        'iconButton--default': type === 'default',
        'iconButton--ghost': type === 'ghost',
      })}
      onClick={onClick}
    >
      <Icon className="iconButton__icon" />
    </div>
  )
}

export default IconButton
