import React from 'react'
import { FilterProps } from 'react-table'
import Input from '@app/components/Input/Input'

const InputColumnFilter: React.FC<FilterProps<any>> = ({
  column: { filterValue, preFilteredRows, setFilter },
}) => {
  // const count = preFilteredRows.length
  return (
    <Input
      noStyles
      name="search"
      style={{
        width: '100%',
        paddingLeft: 5,
        paddingRight: 0,
        paddingBottom: 0,
      }}
      value={filterValue || ''}
      onChange={(e) => {
        setFilter(e.target.value)
      }}
      placeholder="Поиск среди пользователей"
    />
  )
}

export default InputColumnFilter
