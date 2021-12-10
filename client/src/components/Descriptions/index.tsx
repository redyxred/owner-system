import React from 'react'
import { Col, Row } from 'react-flexbox-grid'

import { IDescriptionsProps } from '@app/components/Descriptions/IDescriptions'
import './_descriptions.scss'

const Descriptions: React.FC<IDescriptionsProps> = ({ items }) => {
  return (
    <Row className="descriptions">
      {items.map(({ key, title, value }) => (
        <Col key={key} xs={4} className="descriptions__item">
          <h5 className="descriptions__item-title">{title}</h5>
          <small className="descriptions__item-value">
            {value ? value : <>&mdash;</>}
          </small>
        </Col>
      ))}
    </Row>
  )
}

export default Descriptions
