import React from 'react'
import cn from 'classnames'
import { ISidebarProps } from '@app/containers/SidebarContainer/ISidebarProps'

import Logotype from '@app/components/Logotype'
import MenuContainer from '@app/containers/MenuContainer'
import Avatar from '@app/components/Avatar'
import { AiOutlineLogout } from 'react-icons/ai'
import { renderPermissionName } from '@app/utils/permissions'
import { useStore } from '@app/hooks/stores.hooks'
import './_sidebarContainer.scss'

const SidebarContainer: React.FC<ISidebarProps> = ({
  className,
  menuItems,
}) => {
  const authStore = useStore('authStore')
  return (
    <div className={cn('sidebar', className)}>
      <div className="sidebar__nav">
        <Logotype className="sidebar__nav-logotype" />
        <MenuContainer items={menuItems} />
      </div>
      <div className="sidebar__user">
        <Avatar />
        <div className="sidebar__user-info">
          <h5>
            {authStore.user &&
              `${authStore.user.firstname} ${authStore.user.lastname}`}
          </h5>
          <small>{renderPermissionName(authStore.permissions)}</small>
        </div>
        <AiOutlineLogout onClick={authStore.logout} />
      </div>
    </div>
  )
}

export default SidebarContainer
