import React from 'react'
import {
  IHeaderProps,
  ISubHeaderProps,
} from '@app/components/Header/IHeaderProps'
import IconButton from '@app/components/IconButton'
import { AiFillBell } from 'react-icons/ai'

import './_header.scss'
import cn from 'classnames'

export const SubHeader: React.FC<ISubHeaderProps> = ({
  rightExtras,
  leftExtras,
  rightDivider = false,
  leftDivider = false,
}) => {
  return (
    <div className="header__sub">
      <div
        className={cn('header__sub-leftExtras', {
          'header__sub-leftExtras--divided': leftDivider,
        })}
      >
        {leftExtras &&
          leftExtras.map((item) => (
            <div key={item.key} className="header__sub-leftExtras-item">
              {item}
            </div>
          ))}
      </div>
      <div
        className={cn('header__sub-rightExtras', {
          'header__sub-rightExtras--divided': rightDivider,
        })}
      >
        {rightExtras &&
          rightExtras.map((item) => (
            <div key={item.key} className="header__sub-rightExtras-item">
              {item}
            </div>
          ))}
      </div>
    </div>
  )
}

const Header: React.FC<IHeaderProps> = ({ title, icon: Icon, subHeader }) => {
  const RenderHeaderMain = (): JSX.Element => {
    return (
      <div className="header__main">
        <div className="header__main-leftItems">
          {Icon && <Icon className="header__main-leftItems-icon" />}
          <h3 className="header__main-leftItems-title">{title}</h3>
        </div>
        <div className="header__main-rightItems">
          <IconButton
            icon={AiFillBell}
            onClick={(e) => {
              console.log(e)
            }}
          />
        </div>
      </div>
    )
  }

  return (
    <div className="header">
      <RenderHeaderMain />
      {subHeader && subHeader}
    </div>
  )
}

export default Header
