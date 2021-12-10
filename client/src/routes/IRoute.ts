import React from 'react'
import { IconType } from 'react-icons'

export interface IRouteSider {
  title: string
  icon?: IconType
}

export interface IRoute {
  path: string
  component: React.FC | React.ComponentClass
  exact?: boolean
  visibleOnSider: boolean
  meta: {
    authorized: boolean
    permissions?: Array<string>
  }
  siderOptions?: IRouteSider
}

export interface IRouteSiderRender extends IRoute {
  active: boolean
}
