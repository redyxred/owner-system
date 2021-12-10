import React from 'react'
import { withRouter } from 'react-router-dom'

import Header from '@app/components/Header'
import SidebarContainer from '@app/containers/SidebarContainer'
import { RouteService } from '@app/services/RouteService'
import { IAuthLayoutProps } from '@app/layouts/AuthLayout/IAuthLayoutProps'
import './_authLayout.scss'
import { useStore } from '@app/hooks/stores.hooks'

const AuthLayout: React.FC<IAuthLayoutProps> = ({
  children,
  location,
  subHeader,
  headerOptions,
}) => {
  const { siderRoutes, current } = RouteService
  const authStore = useStore('authStore')

  const sidebarItems = siderRoutes(location.pathname, authStore.permissions)
  const siderRoute = current(location.pathname)

  return (
    <div className="authLayout">
      <Header
        icon={
          headerOptions?.icon
            ? headerOptions.icon
            : siderRoute?.siderOptions?.icon
        }
        title={
          headerOptions?.title
            ? headerOptions.title
            : siderRoute?.siderOptions?.title
        }
        subHeader={subHeader}
      />
      <SidebarContainer menuItems={sidebarItems} />
      <div className="authLayout__content">{children}</div>
    </div>
  )
}

export default withRouter(AuthLayout)
