import React from 'react'

import MenuItem from '@app/components/MenuItem'
import { IMenuContainerProps } from '@app/containers/MenuContainer/IMenuContainerProps'

import './_menuContainer.scss'

const MenuContainer: React.FC<IMenuContainerProps> = ({ items }) => {
  return (
    <div className="menu">
      {items.map((item) => (
        <MenuItem
          key={item.path}
          to={item.path}
          icon={item.siderOptions?.icon}
          active={item.active}
        >
          {item.siderOptions?.title}
        </MenuItem>
      ))}
    </div>
  )
}

export default MenuContainer
