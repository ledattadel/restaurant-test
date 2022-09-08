import * as React from 'react';
import { Layout } from 'antd';
import { AlignLeftOutlined } from '@ant-design/icons';
import Search from '@/components/Layout/DefaultLayout/Header/Search';
import ChangeLanguague from '@/components/Layout/DefaultLayout/Header/ChangeLanguage';
import UserSetting from '@/components/Layout/DefaultLayout/Header/UserSetting';
import './index.scss';

const { Header } = Layout;

const pages = [
    { name: 'Phân khu', link: 'area' },
    { name: 'Quản lý bàn', link: 'table' },
];
const settings = ['Profile', 'Account', 'Logout'];

const HeaderDefaul = ({ onHandleCollapsed, collapsed }) => {
    return (
        <Header className="wrapper header ">
            {React.createElement(AlignLeftOutlined, {
                className: 'header__trigger color-white',
                onClick: () => onHandleCollapsed(!collapsed),
            })}
            <div className="header_userhandle">
                <Search />
                <ChangeLanguague></ChangeLanguague>
                <UserSetting></UserSetting>
            </div>
        </Header>
    );
};
export default HeaderDefaul;
