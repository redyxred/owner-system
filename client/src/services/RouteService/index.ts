// import { IRoute, IRouteSiderRender } from '@app/routes/IRoute'
// import { routes } from '@app/routes'
// import PermissionService from '@app/services/PermissionService'
//
// const RouteService = () => {
//   const { checkPermission } = PermissionService()
//   const getAll = (hasAuthorized: boolean): IRoute[] => {
//     return routes.filter((route) => {
//       if (
//         route.meta.authorized === hasAuthorized &&
//         checkPermission(route.meta.permissions)
//       ) {
//         return route
//       } else {
//         return null
//       }
//     })
//   }
//
//   const getSiderRoutes = (currentPath: string): IRouteSiderRender[] => {
//     return routes
//       .filter(
//         (route) =>
//           route.visibleOnSider && checkPermission(route.meta.permissions)
//       )
//       .map((route) => {
//         let newPath = currentPath.split('/')[1]
//         if (route.path.includes(newPath)) {
//           return { ...route, active: true } as IRouteSiderRender
//         }
//         return route
//       }) as IRouteSiderRender[]
//   }
//
//   const getCurrentRoute = (currentPath: string): IRoute | undefined => {
//     let newPath = currentPath.split('/')[1]
//     return routes.find((route) => route.path.includes(newPath))
//   }
// export default RouteService

import { IRoute, IRouteSiderRender } from '@app/routes/IRoute'
import { routes } from '@app/routes'
import { visibleForPermission } from '@app/utils/permissions'

export const RouteService = {
  all: (hasAuthorized: boolean, userPermission?: string): IRoute[] =>
    routes.filter((route) => {
      if (route.meta.authorized === hasAuthorized) {
        if (route.meta.permissions) {
          if (
            userPermission &&
            visibleForPermission(userPermission, route.meta.permissions)
          ) {
            return route
          }
          return route
        }
        return route
      }
      return undefined
    }),
  siderRoutes: (
    currentPath: string,
    userPermission?: string
  ): IRouteSiderRender[] => {
    return routes
      .filter(
        (route) =>
          route.visibleOnSider &&
          route.meta.permissions &&
          userPermission &&
          visibleForPermission(userPermission, route.meta.permissions)
      )
      .map((route) => {
        let newPath = currentPath.split('/')[1]
        if (route.path.includes(newPath)) {
          return { ...route, active: true } as IRouteSiderRender
        }
        return route
      }) as IRouteSiderRender[]
  },
  current: (currentPath: string): IRoute | undefined => {
    let newPath = currentPath.split('/')[1]
    return routes.find((route) => route.path.includes(newPath))
  },
}
