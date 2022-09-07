import React from 'react';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb } from 'antd';

import icons from '@/assets/icons';
import home from '@/assets/icons/home.svg';

const TitlePages = () => {
    return (
        <Breadcrumb className='title-pages'>
            <Breadcrumb.Item href="" className=' title-pages__item color-orange'>
                <HomeOutlined color='orange'/> Home
            </Breadcrumb.Item>
            <Breadcrumb.Item href="" className=' title-pages__item'>
                <span>Quản lý món ăn</span>
            </Breadcrumb.Item>
        </Breadcrumb>
    );
};

export default TitlePages;
