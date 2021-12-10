import client from '@app/feathers/feathers'
import { ServerUser } from '@app/feathers/serverInterfaces'

export const AuthService = {
  authorize: (authData: any) => {
    return client.authentication.authenticate({
      strategy: 'local',
      ...authData,
    })
  },
  tryAuth: () => {
    return client.authenticate()
  },
  logout: () => {
    return client.authentication.logout()
  },
  onAuthenticated: (callback: ({ user }: { user: ServerUser }) => void) => {
    return client.on('authenticated', callback)
  },
  onLogout: (callback: (...args: any[]) => void) => {
    return client.on('logout', callback)
  },
}
