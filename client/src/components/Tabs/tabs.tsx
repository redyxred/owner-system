import React from 'react'
import Tab, { TabsProps } from 'rc-tabs'

export const Tabs: React.FC<TabsProps> = (props) => {
  const { children } = props
  return (
    <Tab {...props} className="tabs">
      {children}
    </Tab>
  )
}
