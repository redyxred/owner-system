import React from 'react'
import cn from 'classnames'
import { IFlexboxProps } from '@app/components/Flexbox/IFlexboxProps'

import './_flexbox.scss'

const Flexbox: React.FC<IFlexboxProps> = ({
  children,
  flexDirection,
  alignItems,
  justifyContent,
  style,
}) => {
  return (
    <div
      style={style}
      className={cn('flexbox', {
        'flexbox--flexDirection-column': flexDirection === 'column',
        'flexbox--flexDirection-row': flexDirection === 'row',
        'flexbox--alignItems-center': alignItems === 'center',
        'flexbox--justifyContent-center': justifyContent === 'center',
        'flexbox--justifyContent-spaceBetween':
          justifyContent === 'space-between',
      })}
    >
      {children}
    </div>
  )
}

export default Flexbox
