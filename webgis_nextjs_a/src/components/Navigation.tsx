import React from 'react';
import { Menu } from 'antd';
import { AppstoreOutlined, InfoCircleOutlined, TableOutlined } from '@ant-design/icons';

const items = [
  {
    key: 'group',
    type: 'group',
    children: [
      {
        key: '1',
        icon: <AppstoreOutlined />,
        label: 'Layers',
      },
      {
        key: '2',
        icon: <InfoCircleOutlined />,
        label: 'Info',
      },
      {
        key: '3',
        icon: <TableOutlined />,
        label: 'Table',
      },
    ],
  },
];
const Navigation: React.FC = () => {
  return (
    <Menu
      style={{ width: 256, height: '100vh' }}
      defaultSelectedKeys={['1']}
      mode="inline"
      items={items}
    />
  );
};

export default Navigation;