import React from 'react'
import { matchSorter } from 'match-sorter'
import {
  FilterTypes,
  TableInstance,
  useFilters,
  useSortBy,
  useTable,
} from 'react-table'
import { ITableProps } from '@app/components/Table/ITableProps'
import InputColumnFilter from '@app/components/Table/InputColumnFilter'

import { AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai'
import './_table.scss'

const Table: React.FC<ITableProps> = ({ columns, data }) => {
  const filterTypes = React.useMemo<FilterTypes<any>>(
    () => ({
      fuzzyFilter: (rows, id, filterValue) =>
        matchSorter(rows, filterValue, {
          keys: [(row) => row.values[id.toString()]],
          threshold: matchSorter.rankings.WORD_STARTS_WITH,
        }),
    }),
    []
  )

  const defaultColumn = React.useMemo(
    () => ({
      Filter: InputColumnFilter,
    }),
    []
  )

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable<TableInstance>(
      {
        columns,
        data,
        defaultColumn,
        filterTypes,
      },
      useFilters,
      useSortBy
    )

  const RenderSortArrows: React.FC<{ isSortedDesc: boolean | undefined }> = ({
    isSortedDesc,
  }) => (isSortedDesc ? <AiOutlineCaretDown /> : <AiOutlineCaretUp />)

  return (
    <table {...getTableProps()} className="table">
      <thead className="table__head">
        {headerGroups.map((headerGroup) => (
          <tr
            {...headerGroup.getHeaderGroupProps()}
            className="table__head-row"
          >
            {headerGroup.headers.map((column) => (
              <th
                {...column.getHeaderProps(column.getSortByToggleProps())}
                className="table__head-row-cell"
              >
                <span className="table__head-row-cell-arrows">
                  {column.isSorted ? (
                    <RenderSortArrows isSortedDesc={column.isSortedDesc} />
                  ) : null}
                </span>
                {column.render('Header')}
                {column.canFilter ? column.render('Filter') : null}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()} className="table__body">
        {rows.map((row) => {
          prepareRow(row)
          return (
            <React.Fragment key={row.id}>
              <tr {...row.getRowProps()} className="table__body-row">
                {row.cells.map((cell) => (
                  <td className="table__body-row-cell" {...cell.getCellProps()}>
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
              <tr className="separator" />
            </React.Fragment>
          )
        })}
      </tbody>
    </table>
  )
}

export default Table
