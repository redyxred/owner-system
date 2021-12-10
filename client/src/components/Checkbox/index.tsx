import React, { useState } from 'react'
import cn from 'classnames'

import { ICheckboxProps } from '@app/components/Checkbox/ICheckboxProps'
import { AiOutlineCheck } from 'react-icons/ai'

import './_checkbox.scss'

const Checkbox: React.FC<ICheckboxProps> = ({
  defaultValue = false,
  name,
  onChange,
  title,
  ref,
}) => {
  const [_checked, isChecked] = useState(defaultValue)

  const checkHandle = () => {
    onChange({
      target: { checked: !_checked, name },
    })
    isChecked((prevState) => !prevState)
  }

  return (
    <div className="checkbox" onClick={checkHandle} ref={ref}>
      <div
        className={cn('checkbox__item', {
          'checkbox__item--checked': _checked,
        })}
      >
        {_checked && <AiOutlineCheck className="checkbox__item-icon" />}
      </div>
      {title && <span className="checkbox__title">{title}</span>}
    </div>
  )
}

export default Checkbox
