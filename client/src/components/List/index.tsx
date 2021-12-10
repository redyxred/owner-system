import React from 'react'
import { IListProps } from '@app/components/List/IList'

import './_list.scss'

const List: React.FC<IListProps> = ({ children }) => {
  return <div className="list">{children}</div>
}

export default List
