import client from "@app/feathers/feathers";
import { errorHandler } from "@app/utils/errors";

export const StaffService = {
  serviceName: "users",
  all: () => {
    return client.service(StaffService.serviceName).find().catch(errorHandler);
  },
  get: (id: string) => {
    return client.service(StaffService.serviceName).get(id).catch(errorHandler);
  },
  patch: (id: string, newData: any) => {
    return client
      .service(StaffService.serviceName)
      .patch(id, newData)
      .catch(errorHandler);
  },
};
