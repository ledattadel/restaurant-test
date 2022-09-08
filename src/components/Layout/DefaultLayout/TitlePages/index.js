import React from 'react';
import { HomeOutlined } from '@ant-design/icons';
import { Breadcrumb } from 'antd';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import icons from '@/assets/icons';
import home from '@/assets/icons/home.svg';
import './index.scss';

const items2 = [
    {
        key: '/',

        label: 'Trang chủ',
    },
    {
        key: '/dish',

        label: 'Quản lý món ăn',
    },
    {
        key: '/table',

        label: 'Quản lý bàn ăn',
    },
    {
        key: '/discount',

        label: 'Khuyến mãi',
    },
    {
        key: '/account',

        label: 'Quản lý nhân viên',
    },
];

const TitlePages = ({ title, setRouteBreadcumRender }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const routeToHome = () => {
        navigate('/');
        setRouteBreadcumRender('/');
    };
    const routeToLink = () => {
        navigate(location.pathname);
    };

    const findTitle = items2.find((v) => v.key === location.pathname).label;

    return (
        <Breadcrumb className="title-pages">
            <Breadcrumb.Item onClick={routeToHome} className=" title-pages__item title-breadcum-home color-orange">
                <HomeOutlined color="orange" /> Home
            </Breadcrumb.Item>
            <Link to="/"> </Link>
            <Breadcrumb.Item onClick={routeToLink} className=" title-pages__item">
                <span>{findTitle === 'Trang chủ' ? '' : findTitle}</span>
            </Breadcrumb.Item>
        </Breadcrumb>
    );
};

export default TitlePages;
