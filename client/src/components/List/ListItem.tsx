import React from 'react'
import { IListItemProps } from '@app/components/List/IList'
import './_list.scss'

const ListItem: React.FC<IListItemProps> = ({
  title,
  subTitle,
  avatar: AvatarComponent,
}) => {
  return (
    <div className="list__item">
      <div className="list__item-info">
        {AvatarComponent && <AvatarComponent />}
        <div className="list__item-info-head">
          <div className="list__item-info-head-title">{title}</div>
          {subTitle && (
            <div className="list__item-info-head-subTitle">{subTitle}</div>
          )}
        </div>
      </div>
      <div>Actions</div>
    </div>
  )
}

export default ListItem
