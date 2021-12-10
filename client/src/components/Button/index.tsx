import React from 'react'
import cn from 'classnames'
import { IButtonProps } from '@app/components/Button/IButtonProps'
import { isFunction } from '@app/utils/validators'

import './_button.scss'

const Button: React.FC<IButtonProps> = ({
  type = 'primary',
  htmlType = 'button',
  icon: Icon,
  block,
  onClick,
  children,
  className,
  disabled,
}) => {
  return (
    <button
      type={htmlType}
      className={cn(
        'button',
        className,
        { 'button--block': block },
        { 'button--primary': type === 'primary' },
        { 'button--default': type === 'default' }
      )}
      onClick={isFunction(onClick) ? onClick : undefined}
      disabled={disabled}
    >
      {Icon && <Icon className="button__icon" />}
      {children && children}
    </button>
  )
}

export default Button
