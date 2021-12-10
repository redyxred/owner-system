// import StaffStore from '@app/stores/StaffStore'
//
// const StaffService = () => {
//   const staffStore = StaffStore
//
//   const fetchAll = () => staffStore.fetchAll()
//
//   const fetchById = (id: string) => staffStore.fetch(id)
//
//   const edit = (id: string, newData: any) => staffStore.edit(id, newData)
//
//   return {
//     fetchById,
//     fetchAll,
//     edit,
//     clearList: staffStore.clearList,
//     clearStaff: staffStore.clearStaff,
//     loading: staffStore.loading,
//     staffList: staffStore.staffList,
//     currentStaff: staffStore.currentStaff,
//   }
// }
//
// export default StaffService

import client from '@app/feathers/feathers'
import { errorHandler } from '@app/utils/errors'

export const StaffService = {
  serviceName: 'users',
  all: () => {
    return client.service(StaffService.serviceName).find().catch(errorHandler)
  },
  get: (id: string) => {
    return client.service(StaffService.serviceName).get(id).catch(errorHandler)
  },
  patch: (id: string, newData: any) => {
    return client
      .service(StaffService.serviceName)
      .patch(id, newData)
      .catch(errorHandler)
  },
}
