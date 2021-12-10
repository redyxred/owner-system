import React from 'react'
import Drawer from 'rc-drawer'
import { IDrawerProps } from 'rc-drawer/lib/IDrawerPropTypes'

import 'rc-drawer/assets/index.css'
import './_drawerWindow.scss'

const DrawerWindow: React.FC<IDrawerProps> = (props) => {
  const { children } = props
  return <Drawer {...props}>{children}</Drawer>
}

export default DrawerWindow
