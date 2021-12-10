import { makeAutoObservable, observable } from 'mobx'
import { ISettingsStorageData } from '@app/stores/SettingsStore/ISettings'
import { SettingsService } from '@app/services/SettingsService'
import { RootStore } from '@app/stores/stores'

export class SettingsStore {
  settings: ISettingsStorageData = {
    orders: true,
    visitors: true,
    withSound: true,
  }
  rootStore: RootStore
  constructor(root: RootStore) {
    makeAutoObservable(this, {
      settings: observable.struct,
      rootStore: false,
    })
    this.rootStore = root
    this.loadSettings()
  }

  setSetting = (newSetting: ISettingsStorageData | null) => {
    this.settings = { ...this.settings, ...newSetting }
  }

  saveSettings = () => {
    SettingsService.save(this.settings)
  }

  loadSettings = () => {
    this.setSetting(SettingsService.load())
  }
}
