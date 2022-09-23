import * as React from 'react';
import { ContentFnB } from '@/components/Layout/Content';
import { DataTable } from '@/components';
import * as TableIcon from '@/assets/table-icon';

const columns = [
    {
        title: 'STT',
        dataIndex: 'stt',
        width: 26,
        render: (_, customer) => {
            return (
                <div className="data-table__datas__number">
                    <span>{customer.stt}</span>
                </div>
            );
        },
    },
    {
        title: 'ID',
        dataIndex: 'id',
        width: 50,
        render: (_, customer) => {
            return (
                <div className="data-table__datas__number">
                    <span>{customer.id}</span>
                </div>
            );
        },
    },
    {
        title: 'Họ và tên',
        dataIndex: 'name',
        render: (_, customer) => {
            return (
                <div className="data-table__datas__text">
                    <TableIcon.CacbonUserIcon />
                    <span>{customer.name}</span>
                </div>
            );
        },
    },
    {
        title: 'Số điện thoại',
        dataIndex: 'phone',
        render: (_, customer) => {
            return (
                <div className="data-table__datas__text">
                    <span>{customer.phone}</span>
                </div>
            );
        },
    },
    {
        title: 'Sinh nhật',
        dataIndex: 'birthday',
        render: (_, customer) => {
            return (
                <div className="data-table__datas__text">
                    <span>{customer.birthday}</span>
                </div>
            );
        },
    },
    {
        title: 'Thao tác',
        dataIndex: 'action',
        width: 100,
        render: () => (
            <div className="data-table__datas__actions">
                <button className="data-table__datas__actions__button">
                    <TableIcon.EditIcon color={'#413ED4'} />
                </button>
                <button className="data-table__datas__actions__button">
                    <TableIcon.DeleteIcon />
                </button>
            </div>
        ),
    },
];
const data = [];

for (let i = 0; i < 46; i++) {
    data.push({
        key: i,
        stt: i,
        id: i,
        name: `Edward King ${i}`,
        phone: `037834493${i}`,
        birthday: `14/09/202${i}`,
    });
}

const Customer = () => {
    return (
        // <ContentFnB className={'customer-management'}>
            <DataTable columns={columns} data={data} />
        // </ContentFnB>
    );
};

export default Customer;
