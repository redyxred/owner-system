import client from "@app/feathers/feathers";
import { errorHandler } from "@app/utils/errors";

export const OrdersService = {
  serviceName: "orders",
  all: () =>
    client.service(OrdersService.serviceName).find().catch(errorHandler),
};
