// import AuthService from '@app/services/AuthService'
// import { isArray } from '@app/utils/validators'
// import { permissionNames, Permissions } from '@app/consts/permissions'
//
// const PermissionService = () => {
//   const { getPermissions } = AuthService()
//
//   const checkPermission = (clientPermissions: string[] | undefined) => {
//     if (isArray(clientPermissions)) {
//       return getPermissions
//         ? clientPermissions?.includes(getPermissions)
//         : false
//     }
//     return true
//   }
//
//   const searchPermissionName = (permissionName: string) =>
//     permissionNames.find((perm) => perm.permission === permissionName) ||
//     permissionNames[permissionNames.length - 1]
//
//   const renderPermissionName = (permissions?: any) =>
//     getPermissions
//       ? searchPermissionName(
//           permissions ? permissions : getPermissions || Permissions.USER
//         ).name
//       : undefined
//
//   const visibleForPermissions = (
//     userPermissions: string,
//     permissions: string[]
//   ) => (isArray(permissions) ? permissions.includes(userPermissions) : false)
//
//   return { checkPermission, renderPermissionName, visibleForPermissions }
// }
//
// export default PermissionService

export const PermissionService = {
  currentUserPermission: '',
  init: (permissions: string | undefined) => {
    if (!permissions) return
    PermissionService.currentUserPermission = permissions
  },
  allowFor: (allowPermissions: string[]) =>
    allowPermissions.includes(PermissionService.currentUserPermission),
  visibleFor: (userPermission: string, allowPermissions: string[]) =>
    allowPermissions.includes(userPermission),
}
