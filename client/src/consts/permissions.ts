export enum Permissions {
  OWNER = 'owner',
  ADMIN = 'admin',
  WAITER = 'waiter',
  USER = 'user',
}

export const permissionNames = [
  {
    permission: Permissions.OWNER,
    name: 'Владелец',
  },
  {
    permission: Permissions.ADMIN,
    name: 'Администратор',
  },
  {
    permission: Permissions.WAITER,
    name: 'Официант',
  },
  {
    permission: Permissions.USER,
    name: 'Посетитель',
  },
]
