import { isNull, isObject } from '@app/utils/validators'

export const getFromStorage = (key: string) => {
  let data = window.localStorage.getItem(key)
  if (!isNull(data)) {
    data = JSON.parse(data as any)
  }
  return data
}

export const saveToStorage = (key: string, value: any) => {
  if (isObject(value)) {
    value = JSON.stringify(value)
  }
  window.localStorage.setItem(key, value)
}

export const removeFromStorage = (key: string) =>
  window.localStorage.removeItem(key)

export const clearStorage = () => window.localStorage.clear()
