import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space } from 'antd';
import { useSelector, useDispatch } from 'react-redux';

import UserSettingIcon from '@/assets/usersetting-icon';
import * as AuthActions from '@/redux/actions/authAction';
import * as React from 'react';
import './index.scss';

const UserSetting = () => {
    const dispatch = useDispatch();
    const [flag, changFlag] = React.useState('');

    const handleLogout = () => {
        dispatch(AuthActions.logout());
    };
    const menu = (
        <Menu
            style={{
                width: 'width: 80px !important',
            }}
            items={[
                {
                    key: '1',
                    label: (
                        <div className="header_changelanguage_flag" onClick={handleLogout}>
                            logout
                        </div>
                    ),
                },
            ]}
        />
    );
    return (
        <div className="header_setting">
            <Dropdown overlay={menu}>
                <a onClick={(e) => e.preventDefault()}>
                    <Space>
                        <UserSettingIcon></UserSettingIcon>
                        <DownOutlined className="header_setting-icon" />
                    </Space>
                </a>
            </Dropdown>
        </div>
    );
};

export default UserSetting;
