// import * as MenuIcon from '@/assets/menu-icon/';
// import * as React from 'react';

const constants = {
    sidebar: [
        {
            key: '/',

            label: 'Trang chủ',
        },
        {
            key: '/dish',

            label: 'Quản lý menu',
        },
        {
            key: '/category',

            label: 'Quản lý danh mục',
        },
        {
            key: '/area',

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
        {
            key: '/customer',

            label: 'Quản lý Khách hàng',
        },
    ],

    breadcrumb: [
        {
            key: '/',
            label: 'Trang chủ',
            buttonLabel: '',
        },
        {
            key: '/category',
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
            key: '/area/table',
            label: 'Quản lý khu vực bàn / Chi tiết bàn',
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
};

export default constants;
