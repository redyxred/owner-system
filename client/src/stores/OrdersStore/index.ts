import { RootStore } from "@app/stores/stores";
import { OrdersService } from "@app/services/OrdersService";
import { ServerOrder } from "@app/feathers/serverInterfaces";
import { action, makeObservable, observable, toJS } from "mobx";

export class OrdersStore {
  loading: boolean;
  orders: ServerOrder[] | undefined;

  constructor(root: RootStore) {
    makeObservable(this, {
      loading: observable,
      orders: observable,
      setLoading: action,
      setOrders: action,
      fetchAll: action,
    });

    this.loading = false;
  }

  setLoading = (loading: boolean) => {
    this.loading = loading;
  };

  setOrders = (orders: ServerOrder[]) => {
    this.orders = orders;
  };

  fetchAll = () => {
    this.setLoading(true);
    return OrdersService.all()
      .then((result: { data: ServerOrder[] }) => {
        console.log(toJS(result.data));
        this.setOrders(result.data);
      })
      .finally(() => {
        this.setLoading(false);
      });
  };
}
