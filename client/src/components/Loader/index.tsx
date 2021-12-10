import React from 'react'
import cn from 'classnames'

import { ILoaderProps } from '@app/components/Loader/ILoaderProps'
import './_loader.scss'

const Loader: React.FC<ILoaderProps> = ({ show = true, block = false }) =>
  show ? (
    <div className={cn('loader', { 'loader--block': block })}>
      <div className="loader__spin" />
    </div>
  ) : null

export default Loader
