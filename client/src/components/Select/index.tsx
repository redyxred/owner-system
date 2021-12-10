import React, { useState } from 'react'
import { ISelectData, ISelectProps } from '@app/components/Select/ISelectProps'
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai'

import './_select.scss'
import { IconType } from 'react-icons'
import cn from 'classnames'

const Select: React.FC<ISelectProps> = ({
  data,
  onChange,
  block = false,
  placeholder,
}) => {
  const [visible, setVisible] = useState(false)
  const [currentOption, setCurrentOption] = useState<ISelectData>({
    name: '',
    value: '',
  })

  const onVisible = () => {
    setVisible((prevState) => !prevState)
  }

  const onChangeOption = (option: ISelectData) => {
    setVisible(false)
    onChange(option)
    setCurrentOption(option)
  }

  const RenderOptionsWrapper = (): JSX.Element | null =>
    visible ? (
      <div className="select__wrapper">
        {data.map((item) => (
          <div
            key={item.value}
            onClick={onChangeOption.bind(null, item)}
            className={cn('select__wrapper-item', {
              'select__wrapper-item--active':
                item.value === currentOption.value,
            })}
          >
            {item.name}
          </div>
        ))}
      </div>
    ) : null

  const RenderArrows: React.FC<{ icon: IconType }> = ({ icon: Icon }) => (
    <Icon className="select__input-icon" />
  )

  return (
    <div className={cn('select', { 'select--block': block })}>
      <div
        className={cn('select__input', { 'select__input--expanded': visible })}
        onClick={onVisible}
      >
        <span className="select__input-name">
          {currentOption.name
            ? placeholder
              ? `${placeholder}: ${currentOption.name}`
              : `Выбранная опция: ${placeholder}`
            : placeholder}
        </span>
        <RenderArrows icon={visible ? AiOutlineUp : AiOutlineDown} />
      </div>
      <RenderOptionsWrapper />
    </div>
  )
}

export default Select
