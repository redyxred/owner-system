import React from "react";
import { Link, RouteComponentProps, withRouter } from "react-router-dom";
import { Space, Table, Tag } from "antd";

import { STAFF } from "@app/consts/routes";

import { renderPermissionName } from "@app/utils/permissions";

const RenderPermission: React.FC<{ permission: any }> = ({ permission }) => {
  return <Tag>{renderPermissionName(permission)}</Tag>;
};

const StaffTable: React.FC<
  { data: any; loading: boolean } & RouteComponentProps
> = ({ loading, data, history }) => {
  const columns = React.useMemo(
    () => [
      {
        title: "Информация",
        dataIndex: "info",
        key: "info",
        render: (text: any, record: any) => (
          <Link to={`${STAFF}/${record._id}`}>
            <Space>
              <span>
                {record.firstname} {record.lastname}
              </span>
            </Space>
          </Link>
        ),
      },
      {
        title: "Номер телефона",
        dataIndex: "phone",
        key: "phone",
      },
      {
        title: "Должность",
        dataIndex: "permissions",
        key: "permissions",
        render: (perm) => <RenderPermission permission={perm} />,
      },
      {
        key: "actions",
        // render: ({ row }: { row: { original: ServerUser } }) => (
        //   <IconButton
        //     type="ghost"
        //     icon={AiOutlineEdit}
        //     onClick={assignLink.bind(null, row.original._id)}
        //   />
        // ),
      },
    ],
    []
  );
  return (
    <Table
      loading={loading}
      rowKey={(key) => key._id}
      size="small"
      dataSource={data}
      columns={columns}
    />
  );
};

export default withRouter(StaffTable);
