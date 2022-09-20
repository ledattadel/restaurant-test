import * as React from 'react';
import { Layout } from 'antd';
import * as MenuIcon from '@/assets/menu-icon/';
import { Menu } from 'antd';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import constants from '@/constants';
import './index.scss';
const { Sider } = Layout;

const Sidebar = ({ collapsed, setBreadcum, renderBreadcum }) => {
    const [current, setCurrent] = React.useState('1');
    const navigate = useNavigate();
    const location = useLocation();

    const onClick = (e) => {
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
                // theme={theme}
                className="siderbar_menu"
                onClick={onClick}
                style={{
                    width: 256,
                }}
                defaultOpenKeys={['sub1']}
                selectedKeys={location.pathname === '/' ? ['/'] : [current]}
                mode="inline"
                items={constants.sidebar}
                defaultSelectedKeys={['/']}
            />
        </Sider>
    );
};

export default Sidebar;
