import React from 'react'
import { formatPhoneNumber } from '@app/utils/validators'

const PhoneLink: React.FC<{ number: string }> = ({ number }) =>
  number ? (
    <a href={`tel:+48${number}`}>{formatPhoneNumber(number)}</a>
  ) : (
    <>&mdash;</>
  )

export default PhoneLink
