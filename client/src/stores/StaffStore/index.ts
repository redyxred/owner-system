import { action, makeObservable, observable } from 'mobx'
import { ServerUser } from '@app/feathers/serverInterfaces'
import { StaffService } from '@app/services/StaffService'
import { RootStore } from '@app/stores/stores'
import { BAD_PERMISSIONS } from '@app/consts/messages'
import { Permissions } from '@app/consts/permissions'

export class StaffStore {
  staffList: ServerUser[] = []
  currentStaff: ServerUser | undefined
  loading: boolean = true
  rootStore: RootStore

  constructor(root: RootStore) {
    makeObservable(this, {
      staffList: observable,
      currentStaff: observable.struct,
      loading: observable,
      setLoading: action,
      setCurrentStaff: action,
      setStaffList: action,
      fetchAll: action,
      fetch: action,
      clearList: action,
      clearStaff: action,
      edit: action,
      rootStore: false,
    })
    this.rootStore = root
  }

  setLoading = (value: boolean) => {
    this.loading = value
  }

  setStaffList = (newList: ServerUser[]) => {
    this.staffList = newList
  }

  setCurrentStaff = (staff: ServerUser) => {
    this.currentStaff = staff
  }

  clearList = () => {
    this.staffList = []
  }

  clearStaff = () => {
    this.currentStaff = undefined
  }

  fetchAll = () => {
    this.setLoading(true)
    StaffService.all()
      .then((result: { data: ServerUser[] }) => {
        this.setStaffList(result.data)
      })
      .finally(() => this.setLoading(false))
  }

  fetch = (id: string) => {
    this.setLoading(true)
    StaffService.get(id)
      .then((result: ServerUser) => {
        this.setCurrentStaff(result)
      })
      .finally(() => {
        this.setLoading(false)
      })
  }

  edit = (id: string, newData: any) => {
    const authStore = this.rootStore.authStore
    if (authStore.allowFor([Permissions.OWNER, Permissions.ADMIN])) {
      return StaffService.patch(id, newData).then((result: ServerUser) => {
        this.setCurrentStaff(result)
        this.rootStore.snackbarStore.show({
          type: 'success',
          message: `Данные изменены`,
        })
      })
    }
    return this.rootStore.snackbarStore.show({
      type: 'error',
      message: BAD_PERMISSIONS,
    })
  }
}
