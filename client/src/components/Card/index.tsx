import React from 'react'
import { Link } from 'react-router-dom'
import { isString } from '@app/utils/validators'
import { ICardExtraLink, ICardProps } from '@app/components/Card/ICard'

import './_card.scss'
import cn from 'classnames'

const Card: React.FC<ICardProps> = ({
  children,
  title,
  extraLink,
  footer,
  className,
  classNameContent,
}) => {
  const RenderExtraLink = (): JSX.Element => {
    const { icon: Icon, name } = extraLink as ICardExtraLink

    const Wrapper: React.FC<{ className: string }> = ({
      children,
      className,
    }) => {
      const { event } = extraLink as ICardExtraLink
      return event ? (
        isString(event) ? (
          <Link className={className} to={event as string}>
            {children}
          </Link>
        ) : (
          <div className={className} onClick={event as () => {}}>
            {children}
          </div>
        )
      ) : (
        <div className="card__header-extraLink-text">{children}</div>
      )
    }

    return (
      <Wrapper className="card__header-extraLink">
        {Icon && <Icon className="card__header-extraLink-icon" />}
        {name}
      </Wrapper>
    )
  }

  const RenderFooter = (): JSX.Element | null =>
    footer ? (
      <div className="card__footer">{footer.map((item) => item)}</div>
    ) : null

  return (
    <div className={cn('card', className)}>
      {title && (
        <div className="card__header">
          <h5 className="card__header-title">{title}</h5>
          {extraLink && <RenderExtraLink />}
        </div>
      )}
      <div className={cn('card__content', classNameContent)}>{children}</div>
      <RenderFooter />
    </div>
  )
}

export default Card
