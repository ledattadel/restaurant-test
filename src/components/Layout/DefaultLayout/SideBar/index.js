import * as React from 'react';
import { Layout } from 'antd';
import * as MenuIcon from '@/assets/menu-icon/';
import { Menu } from 'antd';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './index.scss';
const { Sider } = Layout;

// function getItem(label, key, icon, children, type) {
//     return {
//         key,
//         icon,
//         children,
//         label,
//         type,
//     };
// }

const items2 = [
    {
        key: '/',
        icon: <MenuIcon.HomeIcon color={'white'} />,
        label: 'Trang chủ',
    },
    {
        key: '/dish',
        icon: <MenuIcon.DishIcon />,
        label: 'Quản lý món ăn',
    },
    {
        key: '/table',
        icon: <MenuIcon.TableIcon />,
        label: 'Quản lý bàn ăn',
    },
    {
        key: '/discount',
        icon: <MenuIcon.DiscountIcon />,
        label: 'Khuyến mãi',
    },
    {
        key: '/account',
        icon: <MenuIcon.AccountIcon />,
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

    // const handleSelectMenu = (e) => {
    //     console.log(e);
    // };

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
