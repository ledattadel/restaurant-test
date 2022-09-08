import * as React from 'react';
import { Layout } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import * as MenuIcon from '@/assets/menu-icon/';
import { Menu, Switch } from 'antd';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import './index.scss';
const { Sider } = Layout;

function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}

const items2 = [
    {
        key: '/',
        icon: <MenuIcon.homeIcon />,
        label: 'Trang chủ',
    },
    {
        key: '/dish',
        icon: <MenuIcon.dishIcon />,
        label: 'Quản lý món ăn',
    },
    {
        key: '/table',
        icon: <MenuIcon.tableIcon />,
        label: 'Quản lý bàn ăn',
    },
    {
        key: '/discount',
        icon: <MenuIcon.discountIcon />,
        label: 'Khuyến mãi',
    },
    {
        key: '/account',
        icon: <MenuIcon.accountIcon />,
        label: 'Quản lý nhân viên',
    },
];

const Sidebar = ({ collapsed, setBreadcum, renderBreadcum }) => {
    const [current, setCurrent] = React.useState('1');
    const navigate = useNavigate();
    const location = useLocation();

    const onClick = (e) => {
        console.log('click ', e);
        navigate(e.key);
        let titleBreadcum = items2.find((v) => v.key === e.key).label;

        setBreadcum(titleBreadcum);
        setCurrent(e.key);
    };
    const handleSelectMenu = (e) => {
        console.log(e);
    };

    return (
        <Sider collapsedWidth={76} width={283} trigger={null} collapsible collapsed={collapsed} className="siderbar">
            <Link to="/">
                <div className="siderbar_logo">LOGO</div>
            </Link>
            <Menu
                // theme={theme}
                className="siderbar_menu"
                onClick={onClick}
                style={{
                    width: 256,
                }}
                defaultOpenKeys={['sub1']}
                selectedKeys={location.pathname === '/' ? ['/'] : [current]}
                mode="inline"
                items={items2}
                defaultSelectedKeys={['/']}
            />
        </Sider>
    );
};

export default Sidebar;
