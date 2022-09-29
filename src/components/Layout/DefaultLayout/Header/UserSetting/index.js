import * as React from 'react';
import * as AuthActions from '@/redux/actions/authAction';
import { useSelector, useDispatch } from 'react-redux';
import { Dropdown, Menu, Space } from 'antd';
import { DefaultModal } from '@/components';
import { FiLogOut } from 'react-icons/fi';
import UserIcon2 from '@/assets/user2.icon';
import { DownOutlined } from '@ant-design/icons';
import UserSettingIcon from '@/assets/usersetting-icon';
import './index.scss';
const UserSetting = () => {
    const dispatch = useDispatch();
    const [visible, setVisible] = React.useState(false);

    const handleLogout = () => {
        dispatch(AuthActions.logout());
    };

    const showModal = () => {
        setVisible(true);
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
                        <div className="header_menu_item" onClick={() => showModal()}>
                            <UserIcon2 color={'#6D6D6D'} />
                            <p>Thông tin cá nhân</p>
                        </div>
                    ),
                },
                {
                    key: '2',
                    label: (
                        <div className="header_menu_item" onClick={() => handleLogout()}>
                            <FiLogOut />
                            <p>Đăng xuất</p>
                        </div>
                    ),
                },
            ]}
        />
    );
    return (
        <div className="header_setting">
            <Dropdown overlay={menu} placement="bottom">
                <a onClick={(e) => e.preventDefault()}>
                    <Space>
                        <UserSettingIcon></UserSettingIcon>
                        <DownOutlined className="header_setting-icon" />
                    </Space>
                </a>
            </Dropdown>
            <DefaultModal visible={visible} setVisible={setVisible} userProfile={true} />
        </div>
    );
};

export default UserSetting;
