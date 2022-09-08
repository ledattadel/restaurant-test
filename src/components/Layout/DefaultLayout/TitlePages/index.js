import React from 'react';
import { HomeOutlined } from '@ant-design/icons';
import { Breadcrumb } from 'antd';

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
