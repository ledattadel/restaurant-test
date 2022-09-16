import * as MenuIcon from '@/assets/menu-icon/';
import * as React from 'react';

const constants = {
    sidebar: [
        {
            key: '/',
            icon: <MenuIcon.HomeIcon color={'white'} />,
            label: 'Trang chủ',
        },
        {
            key: '/dish',
            icon: <MenuIcon.DishIcon />,
            label: 'Quản lý món ăn',
        },
        {
            key: '/table',
            icon: <MenuIcon.TableIcon />,
            label: 'Quản lý bàn ăn',
        },
        {
            key: '/discount',
            icon: <MenuIcon.DiscountIcon />,
            label: 'Khuyến mãi',
        },
        {
            key: '/account',
            icon: <MenuIcon.AccountIcon />,
            label: 'Quản lý nhân viên',
        },
        {
            key: '/customer',
            icon: <MenuIcon.AccountIcon />,
            label: 'Quản lý Khách hàng',
        },
    ],

    breadcrumb: [
        {
            key: '/',
            label: 'Trang chủ',
        },
        {
            key: '/catalogy',
            label: 'Quản lý danh mục',
            buttonLabel: 'Thêm danh mục',
        },
        {
            key: '/dish',
            label: 'Quản lý món ăn',
            buttonLabel: 'Tạo món mới',
        },
        {
            key: '/area',
            label: 'Quản lý khu vực bàn',
            buttonLabel: 'Tạo khu vực',
        },
        {
            key: '/table',
            label: 'Chi tiết bàn',
            buttonLabel: 'Tạo bàn',
        },
        {
            key: '/discount',
            label: 'Khuyến mãi',
            buttonLabel: 'Thêm khuyến mãi',
        },
        {
            key: '/account',
            label: 'Quản lý nhân viên',
            buttonLabel: 'Thêm nhân viên',
        },
        {
            key: '/customer',
            label: 'Quản lý khách hàng',
            buttonLabel: 'Thêm khách hàng',
        },
    ],

    modal: [
        {
            key: '/dish',
            label: 'FormAddDish',
        },
    ],
};

export default constants;
