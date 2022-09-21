import * as React from 'react';
import { Layout } from 'antd';
import * as MenuIcon from '@/assets/menu-icon/';
import { Menu } from 'antd';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import constants from '@/constants';
import * as ReactRedux from 'react-redux';
import './index.scss';
import { GLOBALTYPES } from '@/redux/actions/globalTypes';

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
const items = [
    getItem('Trang chủ', '/', <MenuIcon.HomeIcon color={'white'} />),
    getItem('Quản lý menu', '', <MenuIcon.MenuIcon />, [
        getItem('Quản lý danh mục', '', <MenuIcon.DishIcon />),
        getItem('Quản lý món ăn', '/dish', <MenuIcon.CategoryIcon />),
    ]),
    getItem('Quản lý bàn ăn', '/area', <MenuIcon.TableIcon />),
    getItem('Khuyến mãi', '/discount', <MenuIcon.DiscountIcon />),
    getItem('Quản lý nhân viên', '/account', <MenuIcon.AccountIcon />),
];

const Sidebar = ({ collapsed, setBreadcum, renderBreadcum }) => {
    const [current, setCurrent] = React.useState('1');
    const navigate = useNavigate();
    const location = useLocation();

    const onClick = (e) => {
        console.log(e.key);
        navigate(e.key);
        let titleBreadcum = constants.sidebar.find((v) => v.key === e.key).label;
        setBreadcum(titleBreadcum);
        setCurrent(e.key);
    };

    return (
        <Sider collapsedWidth={76} width={283} trigger={null} collapsible collapsed={collapsed} className="siderbar">
            <Link to="/">
                <div className="siderbar_logo">LOGO</div>
            </Link>
            <Menu
                className="siderbar_menu"
                onClick={onClick}
                style={{
                    width: 256,
                }}
                defaultOpenKeys={['sub1']}
                selectedKeys={location.pathname === '/' ? ['/'] : [current]}
                mode="inline"
                items={items}
                defaultSelectedKeys={['/']}
            />
        </Sider>
    );
};

export default Sidebar;
