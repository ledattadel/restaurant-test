import * as React from 'react';
import { Layout } from 'antd';
import { AlignLeftOutlined } from '@ant-design/icons';
import Search from '@/components/Search';

const { Header } = Layout;

const pages = [
    { name: 'Phân khu', link: 'area' },
    { name: 'Quản lý bàn', link: 'table' },
];
const settings = ['Profile', 'Account', 'Logout'];

const HeaderDefaul = () => {
    const [collapsed, setCollapsed] = React.useState(false);
    return (
        <Header
            className='header'
        >
            {React.createElement( AlignLeftOutlined, {
                className: 'header__trigger color-white',
                onClick: () => setCollapsed(!collapsed),
            })}
            <Search/>
        </Header>
    );
};
export default HeaderDefaul;
