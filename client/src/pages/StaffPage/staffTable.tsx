import React, { useCallback } from 'react'
import { Column } from 'react-table'
import Flexbox from '@app/components/Flexbox'
import Avatar from '@app/components/Avatar'
import IconButton from '@app/components/IconButton'
import { AiOutlineEdit } from 'react-icons/ai'
import Table from '@app/components/Table'
import Tag from '@app/components/Tag'
import { Link, RouteComponentProps, withRouter } from 'react-router-dom'
import { STAFF } from '@app/consts/routes'
import { ServerUser } from '@app/feathers/serverInterfaces'
import PhoneLink from '@app/components/PhoneLink'
import { renderPermissionName } from '@app/utils/permissions'

const RenderStaffInfo: React.FC<{
  username: any
  email: any
}> = ({ username: { firstname, lastname, _id }, email: { email } }) => (
  <Flexbox style={{ width: 'max-content' }}>
    <Link to={{ pathname: `${STAFF}/${_id}` }}>
      <Avatar username={firstname + ' ' + lastname} />
    </Link>
    <Flexbox
      style={{
        marginLeft: 10,
      }}
      flexDirection="column"
      justifyContent="center"
    >
      <Link to={{ pathname: `${STAFF}/${_id}` }}>
        <b style={{ marginBottom: 5 }}>
          {firstname} {lastname}
        </b>
      </Link>
      <small>{email}</small>
    </Flexbox>
  </Flexbox>
)

const RenderPermission: React.FC<{ permission: any }> = ({ permission }) => {
  return <Tag>{renderPermissionName(permission)}</Tag>
}

const StaffTable: React.FC<{ data: any } & RouteComponentProps> = ({
  data,
  history,
}) => {
  const assignLink = useCallback(
    (id: string) => {
      history.push({ pathname: `${STAFF}/${id}`, search: '?action=edit' })
    },
    [history]
  )

  const columns = React.useMemo<Column[]>(
    () => [
      {
        Header: 'Информация',
        id: 'info',
        accessor: (row: any) => `${row.firstname} ${row.lastname}`,
        Cell: ({ row }) => {
          return (
            <RenderStaffInfo username={row.original} email={row.original} />
          )
        },
        filter: 'fuzzyFilter',
        disableSortBy: true,
      },
      {
        Header: 'Номер телефона',
        accessor: 'phone',
        Cell: ({ value }) => <PhoneLink number={value} />,
        filter: 'number',
        disableSortBy: true,
      },
      {
        Header: 'Должность',
        accessor: 'permissions',
        Cell: ({ value }) => <RenderPermission permission={value} />,
        sortType: 'number',
        disableFilters: true,
      },
      {
        accessor: 'actions',
        Cell: ({ row }: { row: { original: ServerUser } }) => (
          <IconButton
            type="ghost"
            icon={AiOutlineEdit}
            onClick={assignLink.bind(null, row.original._id)}
          />
        ),
        disableSortBy: true,
        disableFilters: true,
      },
    ],
    [assignLink]
  )
  return <Table data={data} columns={columns} />
}

export default withRouter(StaffTable)
