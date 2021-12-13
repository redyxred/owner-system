import { createContext } from "react";
import { AuthStore } from "@app/stores/AuthStore";
import { SettingsStore } from "@app/stores/SettingsStore";
import { StaffStore } from "@app/stores/StaffStore";
import { OrdersStore } from "@app/stores/OrdersStore";

export class RootStore {
  authStore: AuthStore;
  settingsStore: SettingsStore;
  staffStore: StaffStore;
  ordersStore: OrdersStore;
  constructor() {
    this.authStore = new AuthStore(this);
    this.settingsStore = new SettingsStore(this);
    this.staffStore = new StaffStore(this);
    this.ordersStore = new OrdersStore(this);
  }
}

export const storesContext = createContext(new RootStore());
export const StoreProvider = storesContext.Provider;
