import { ISettingsStorageData } from '@app/stores/SettingsStore/ISettings'
import { getFromStorage, saveToStorage } from '@app/utils/storage'
import { STORAGE_SETTINGS_NAME } from '@app/consts/storage'

export const SettingsService = {
  save: (settings: ISettingsStorageData) => {
    saveToStorage(STORAGE_SETTINGS_NAME, settings)
  },
  load: () =>
    getFromStorage(STORAGE_SETTINGS_NAME) as unknown as ISettingsStorageData,
}
