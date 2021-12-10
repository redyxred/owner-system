import React from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import cn from 'classnames'
import { IEmptyProps } from '@app/components/Empty/IEmpty'
import { AiOutlineFrown, AiOutlineLeft } from 'react-icons/ai'
import Button from '@app/components/Button'

import './_empty.scss'

const Empty: React.FC<IEmptyProps & RouteComponentProps> = ({
  description,
  className,
  history,
  withAnimation,
}) => {
  return (
    <div className={cn('empty', className)}>
      <AiOutlineFrown
        className={cn('empty__icon', {
          'empty__icon--withAnimation': withAnimation,
        })}
        size={75}
      />
      <h3 className="empty__title">Произошла ошибка</h3>
      {description && <span className="empty__description">{description}</span>}
      <Button
        onClick={() => {
          history.goBack()
        }}
        className="empty__backBtn"
        icon={AiOutlineLeft}
      >
        Вернуться назад
      </Button>
    </div>
  )
}

export default withRouter(Empty)
