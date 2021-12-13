export const PermissionService = {
  currentUserPermission: "",
  init: (permissions: string | undefined) => {
    if (!permissions) return;
    PermissionService.currentUserPermission = permissions;
  },
  allowFor: (allowPermissions: string[]) =>
    allowPermissions.includes(PermissionService.currentUserPermission),
  visibleFor: (userPermission: string, allowPermissions: string[]) =>
    allowPermissions.includes(userPermission),
};
