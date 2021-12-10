import { createContext } from 'react'
import { AuthStore } from '@app/stores/AuthStore'
import { SettingsStore } from '@app/stores/SettingsStore'
import { SnackbarStore } from '@app/stores/SnackbarStore'
import { StaffStore } from '@app/stores/StaffStore'

export class RootStore {
  authStore: AuthStore
  settingsStore: SettingsStore
  snackbarStore: SnackbarStore
  staffStore: StaffStore
  constructor() {
    this.authStore = new AuthStore(this)
    this.settingsStore = new SettingsStore(this)
    this.snackbarStore = new SnackbarStore(this)
    this.staffStore = new StaffStore(this)
  }
}

export const storesContext = createContext(new RootStore())
export const StoreProvider = storesContext.Provider
