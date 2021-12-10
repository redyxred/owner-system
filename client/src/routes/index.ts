import { IRoute } from '@app/routes/IRoute'
import * as ROUTES from '@app/consts/routes'
import { Permissions } from '@app/consts/permissions'
import {
  AiOutlineDashboard,
  AiOutlineSetting,
  AiOutlineSolution,
  AiOutlineProject,
  AiOutlineContainer,
  AiOutlineRead,
} from 'react-icons/ai'
import LoginPage from '@app/pages/LoginPage'
import HomePage from '@app/pages/HomePage'
import SettingsPage from '@app/pages/SettingsPage'
import StaffPage from '@app/pages/StaffPage'
import OrdersPage from '@app/pages/OrdersPage'
import DetailStaffPage from '@app/pages/DetailStaffPage'
import StoragePage from '@app/pages/StoragePage'
import DishesPage from '@app/pages/DishesPage'

export const routes: IRoute[] = [
  {
    path: ROUTES.LOGIN,
    component: LoginPage,
    visibleOnSider: false,
    meta: {
      authorized: false,
    },
  },
  {
    path: ROUTES.HOME,
    component: HomePage,
    visibleOnSider: true,
    meta: {
      authorized: true,
      permissions: [Permissions.WAITER, Permissions.ADMIN, Permissions.OWNER],
    },
    siderOptions: {
      title: 'Панель управления',
      icon: AiOutlineDashboard,
    },
  },
  {
    path: ROUTES.ORDERS,
    component: OrdersPage,
    visibleOnSider: true,
    meta: {
      authorized: true,
      permissions: [Permissions.WAITER, Permissions.ADMIN, Permissions.OWNER],
    },
    siderOptions: {
      title: 'Заказы',
      icon: AiOutlineProject,
    },
  },
  {
    path: ROUTES.STAFF,
    component: StaffPage,
    visibleOnSider: true,
    exact: true,
    meta: {
      authorized: true,
      permissions: [Permissions.ADMIN, Permissions.OWNER],
    },
    siderOptions: {
      title: 'Персонал',
      icon: AiOutlineSolution,
    },
  },
  {
    path: ROUTES.DETAIL_STAFF,
    component: DetailStaffPage,
    visibleOnSider: false,
    exact: true,
    meta: {
      authorized: true,
      permissions: [Permissions.ADMIN, Permissions.OWNER],
    },
  },
  {
    path: ROUTES.STORAGE,
    component: StoragePage,
    visibleOnSider: true,
    meta: {
      authorized: true,
      permissions: [Permissions.ADMIN, Permissions.OWNER],
    },
    siderOptions: {
      title: 'Склад',
      icon: AiOutlineContainer,
    },
  },
  {
    path: ROUTES.DISHES,
    component: DishesPage,
    visibleOnSider: true,
    meta: {
      authorized: true,
      permissions: [Permissions.ADMIN, Permissions.OWNER],
    },
    siderOptions: {
      title: 'Блюда',
      icon: AiOutlineRead,
    },
  },
  {
    path: ROUTES.SETTINGS,
    component: SettingsPage,
    visibleOnSider: true,
    meta: {
      authorized: true,
      permissions: [Permissions.WAITER, Permissions.ADMIN, Permissions.OWNER],
    },
    siderOptions: {
      title: 'Настройки',
      icon: AiOutlineSetting,
    },
  },
]
