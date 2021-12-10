import React from 'react'
import { ITagProps } from '@app/components/Tag/ITag'

import './_tag.scss'

const Tag: React.FC<ITagProps> = ({ children, color }) => {
  return (
    <span className="tag" style={{ backgroundColor: color }}>
      {children}
    </span>
  )
}

export default Tag
