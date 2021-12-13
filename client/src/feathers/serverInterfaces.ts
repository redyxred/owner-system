export interface ServerUser {
  firstname: string;
  lastname: string;
  email: string;
  updatedAt: string;
  createdAt: string;
  __v: number;
  _id: string;
  permissions: string;
  phone: string;
  gender: "Мужской" | "Женский";
}

export interface ServerStorage {
  _id: string;
  name: string;
}

export interface ServerVendor {
  _id: string;
  name: string;
}

export interface ServerProduct {
  _id: string;
  name: string;
  vendor: ServerVendor;
}

export interface ServerDish {
  _id: string;
  name: string;
  products: ServerProduct[];
  price: number;
  cookingTime: number;
  createdAt: string;
}

export interface ServerDrink {
  _id: string;
  amount: number;
  name: string;
  price: number;
  unit: string;
  vendor: ServerVendor;
  weight: string;
  createdAt: string;
  storage: ServerStorage;
}

export interface ServerOrder {
  _id: string;
  user: ServerUser;
  dishes: ServerDish[];
  drinks: ServerDrink[];
  status: string;
  description?: string;
  createdAt: string;
  updatedAt: string;
}
