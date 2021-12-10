import { action, makeAutoObservable, observable, runInAction } from 'mobx'
import { ISnackbarOptionsWithID } from './ISnackbar'
import { ISnackbarOptions } from '@app/stores/SnackbarStore/ISnackbar'
import { SnackbarService } from '@app/services/SnackbarService'
import { RootStore } from '@app/stores/stores'

export class SnackbarStore {
  snackbars: ISnackbarOptionsWithID[] = []
  rootStore: RootStore

  constructor(root: RootStore) {
    makeAutoObservable(this, {
      snackbars: observable,
      show: action,
      remove: action,
      rootStore: false,
    })
    this.rootStore = root
  }

  show = (content: ISnackbarOptions) => {
    const id: number = this.snackbars.length + 1
    const snack = SnackbarService.generateSnackbarOptions(id, content)
    runInAction(() => this.snackbars.push(snack))
  }

  remove = (id: number) =>
    (this.snackbars = this.snackbars.filter((snack) => snack.id !== id))
}
