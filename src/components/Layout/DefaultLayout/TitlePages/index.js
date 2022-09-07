import React from 'react';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb } from 'antd';

import icons from '@/assets/icons';
import home from '@/assets/icons/home.svg';

const TitlePages = () => {
    return (
        <Breadcrumb>
            <Breadcrumb.Item href="">
                <HomeOutlined />
            </Breadcrumb.Item>
            <Breadcrumb.Item href="">
                <UserOutlined />
                <span>Application List</span>
            </Breadcrumb.Item>
            <Breadcrumb.Item>Application</Breadcrumb.Item>
        </Breadcrumb>
    );
};

export default TitlePages;
