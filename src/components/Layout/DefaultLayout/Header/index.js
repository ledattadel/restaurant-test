import * as React from 'react';
import { Layout } from 'antd';
import { AlignLeftOutlined } from '@ant-design/icons';
import Search from '@/components/Layout/DefaultLayout/Header/Search';
import ChangeLanguague from '@/components/Layout/DefaultLayout/Header/ChangeLanguage';
import UserSetting from '@/components/Layout/DefaultLayout/Header/UserSetting';
import Notify from '@/components/Layout/DefaultLayout/Header/Notify';
import './index.scss';

const { Header } = Layout;

const DefaultHeader = ({ onHandleCollapsed, collapsed }) => {
    return (
        <Header className="header">
            {React.createElement(AlignLeftOutlined, {
                className: 'header__trigger',
                onClick: () => onHandleCollapsed(!collapsed),
            })}
            <div className="header_userhandle">
                <Search />
                <ChangeLanguague></ChangeLanguague>
                <Notify></Notify>
                <UserSetting></UserSetting>
            </div>
        </Header>
    );
};
export default DefaultHeader;
