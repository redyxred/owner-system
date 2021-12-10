import React from 'react'
import cn from 'classnames'

import { IInputProps } from '@app/components/Input/IInputProps'

import './_input.scss'

const Input: React.FC<IInputProps> = (props) => {
  const {
    name,
    value,
    placeholder,
    type,
    className,
    style,
    error,
    block,
    onChange,
    noStyles,
  } = props
  return (
    <input
      name={name}
      value={value}
      placeholder={placeholder}
      type={type}
      className={cn(
        'input__el',
        {
          'input__el--block': block,
          'input__el--error': error,
          'input__el--noStyles': noStyles,
        },
        className
      )}
      onChange={onChange}
      style={style}
    />
  )
}

export default Input
