import * as React from 'react';
import { ContentFnB } from '@/components/Layout/Content';
import { DataTable } from '@/components';
import './index.scss';

const columns = [
    {
        title: 'Stt',
        dataIndex: 'stt',
    },
    {
        title: 'Họ và tên',
        dataIndex: 'name',
    },
    {
        title: 'Số điện thoại',
        dataIndex: 'phone',
    },
    {
        title: 'Sinh nhật',
        dataIndex: 'birthday',
    },
    {
        title: 'Thao tác',
        dataIndex: 'action',
    },
];
const data = [];

for (let i = 0; i < 46; i++) {
    data.push({
        stt: i,
        name: `Edward King ${i}`,
        phone: `037834493${i}`,
        birthday: `14/09/202${i}`,
    });
}

const Customer = () => {
    return (
        <ContentFnB className={'customer-management'}>
            <DataTable columns={columns} data={data} />
        </ContentFnB>
    );
};

export default Customer;
