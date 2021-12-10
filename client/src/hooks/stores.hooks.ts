import React from 'react'
import { storesContext, RootStore } from '@app/stores/stores'

export const useStores = () => React.useContext(storesContext)
export const useStore = <T extends keyof RootStore>(store: T): RootStore[T] =>
  React.useContext(storesContext)[store]
