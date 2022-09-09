import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space } from 'antd';
import * as React from 'react';
import './index.scss';
import vietnamFlag from '@/assets/flag-icon/vietnamFlag.icon';

const menu = (
    <Menu
        style={{
            width: 'width: 80px !important',
        }}
        items={[
            {
                key: '1',
                label: (
                    <div className="header_changelanguage_flag">
                        <img src="https://scontent.fsgn5-6.fna.fbcdn.net/v/t1.15752-9/296450634_5252181018222318_3734198812436382762_n.png?stp=cp0_dst-png&_nc_cat=108&ccb=1-7&_nc_sid=ae9488&_nc_ohc=kt2Tz6Yo-70AX9CvX3V&tn=07g79kduVSr1Jt36&_nc_ht=scontent.fsgn5-6.fna&oh=03_AVJKDyGKExl61e_iFUNbVLKzFcT-nSySx1_wAVHpR18Aaw&oe=63415DBA"></img>
                    </div>
                ),
            },
        ]}
    />
);

const ChangeLanguage = () => {
    const [flag, changFlag] = React.useState('');

    return (
        <div className="header_changelanguage">
            <Dropdown overlay={menu}>
                <a onClick={(e) => e.preventDefault()}>
                    <Space>
                        <div className="header_changelanguage_flag">
                            <img src="https://scontent.fsgn5-6.fna.fbcdn.net/v/t1.15752-9/296450634_5252181018222318_3734198812436382762_n.png?stp=cp0_dst-png&_nc_cat=108&ccb=1-7&_nc_sid=ae9488&_nc_ohc=kt2Tz6Yo-70AX9CvX3V&tn=07g79kduVSr1Jt36&_nc_ht=scontent.fsgn5-6.fna&oh=03_AVJKDyGKExl61e_iFUNbVLKzFcT-nSySx1_wAVHpR18Aaw&oe=63415DBA"></img>
                        </div>
                        <DownOutlined className="header_changelanguage-icon" />
                    </Space>
                </a>
            </Dropdown>
        </div>
    );
};

export default ChangeLanguage;
