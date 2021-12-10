import React from 'react'
import cn from 'classnames'
import { Col, Row } from 'react-flexbox-grid'
import { IStatsProps } from '@app/components/Stats/IStats'

import './_stats.scss'

const Stats: React.FC<IStatsProps> = ({ items, className }) => {
  return (
    <Row className={cn('stats', className)}>
      {items.map(({ key, value, name }) => (
        <Col xs key={key} className="stats__item">
          <h4 className="stats__item-value">{value}</h4>
          <small className="stats__item-name">{name}</small>
        </Col>
      ))}
    </Row>
  )
}

export default Stats
