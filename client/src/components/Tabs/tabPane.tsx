import React from 'react'
import { TabPane as RcTabPane, TabPaneProps } from 'rc-tabs'

export const TabPane: React.FC<TabPaneProps> = (props) => {
  const { children } = props
  return <RcTabPane {...props}>{children}</RcTabPane>
}
