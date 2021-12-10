import { CSSProperties } from 'react'

export interface IFlexboxProps {
  flexDirection?: 'column' | 'row'
  justifyContent?: 'space-between' | 'center'
  alignItems?: 'center'
  style?: CSSProperties
}
