import { permissionNames } from '@app/consts/permissions'

export const visibleForPermission = (
  userPermission: string,
  allowPermissions: string[]
) => allowPermissions.includes(userPermission)

export const searchPermissionName = (permissionName: string) =>
  permissionNames.find(({ permission }) => permission === permissionName) ||
  permissionNames[permissionNames.length - 1]

export const renderPermissionName = (permission?: string) =>
  permission && searchPermissionName(permission).name
