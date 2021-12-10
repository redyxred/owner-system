import React from 'react'
import moment from 'moment'
import { ServerUser } from '@app/feathers/serverInterfaces'
import { Col } from 'react-flexbox-grid'
import Card from '@app/components/Card'
import Avatar from '@app/components/Avatar'
import Stats from '@app/components/Stats'
import Descriptions from '@app/components/Descriptions'
import { IDescriptionsItems } from '@app/components/Descriptions/IDescriptions'
import PhoneLink from '@app/components/PhoneLink'
import Button from '@app/components/Button'
import { renderPermissionName } from '@app/utils/permissions'

import './_detailStaffContainer.scss'

const StaffInfo: React.FC<{
  username: string
  createdAt: string
  email: string
}> = ({ username, email, createdAt }) => (
  <Card classNameContent="detailStaff">
    <div className="detailStaff__info">
      <Avatar size="lg" username={username} />
      <h3 className="detailStaff__info-username">{username}</h3>
      <small>{email}</small>
    </div>
    <Stats
      className="detailStaff__stats"
      items={[
        {
          key: 'jobDays',
          name: 'Рабочих дней',
          value: moment(new Date()).diff(createdAt, 'days').toString(),
        },
        {
          key: 'rating',
          name: 'Рейтинг',
          value: '20',
        },
      ]}
    />
    <div className="detailStaff__actions">
      <Button type="default" block>
        Редактировать
      </Button>
    </div>
  </Card>
)

const DetailStaffInfo: React.FC<{ staffData: ServerUser }> = ({
  staffData,
}) => {
  const itemsDescription: IDescriptionsItems[] = [
    {
      key: 'phone',
      title: 'Номер телефона',
      value: <PhoneLink number={staffData.phone} />,
    },
    {
      key: 'gender',
      title: 'Пол',
      value: staffData.gender,
    },
    {
      key: 'permission',
      title: 'Должность',
      value: renderPermissionName(staffData.permissions),
    },
    {
      key: 'permission2',
      title: 'Должность',
      value: renderPermissionName(staffData.permissions),
    },
    {
      key: 'permission1',
      title: 'Должность',
      value: renderPermissionName(staffData.permissions),
    },
    {
      key: 'createdAt',
      title: 'Дата регистрации',
      value: moment(staffData.createdAt).format('LL'),
    },
  ]

  return (
    <Card
      className="descriptionStaffCard"
      classNameContent="descriptionStaffCard__content"
    >
      <Descriptions items={itemsDescription} />
    </Card>
  )
}

const DetailStaffContainer: React.FC<{ staffData: ServerUser }> = ({
  staffData,
}) => {
  return (
    <React.Fragment>
      <Col xs={4}>
        <StaffInfo
          username={`${staffData.firstname} ${staffData.lastname}`}
          createdAt={staffData.createdAt}
          email={staffData.email}
        />
      </Col>
      <Col xs={8}>
        <DetailStaffInfo staffData={staffData} />
      </Col>
    </React.Fragment>
  )
}

export default DetailStaffContainer
