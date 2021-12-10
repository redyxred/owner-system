import React from 'react'
import { Link } from 'react-router-dom'
import { IMenuItemProps } from '@app/components/MenuItem/IMenuItemProps'

import './_menuItem.scss'
import cn from 'classnames'

const MenuItem: React.FC<IMenuItemProps> = ({
  children,
  icon: Icon,
  to,
  active = false,
}) => {
  return (
    <li className={cn('menuItem', { 'menuItem--active': active })}>
      <Link className="menuItem__link" to={to}>
        {Icon && <Icon className="menuItem__link-icon" />}
        <span className="menuItem__link-name">{children}</span>
      </Link>
    </li>
  )
}

export default MenuItem
