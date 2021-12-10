import React from 'react'

export interface ICheckboxTarget {
  target: ICheckBoxChangeData
}

export interface ICheckBoxChangeData {
  name: string
  checked: boolean
}

export interface ICheckboxProps {
  ref?: React.Ref<any>
  defaultValue?: boolean
  name: string
  title?: string
  onChange: (result: ICheckboxTarget) => void
}
