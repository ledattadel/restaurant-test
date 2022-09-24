import React from 'react';
import { DataTable } from '@/components';
import * as TableIcon from '@/assets/table-icon';
import moment from 'moment';

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
        sorter: (a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()),
        sortDirections: ['descend'],
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
        sorter: (a, b) => a.phone.localeCompare(b.phone),
        sortDirections: ['descend'],
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
        sorter: (a, b) => new Date(a.birthday) - new Date(b.birthday),
        sortDirections: ['descend'],
    },
    {
        title: 'Thao tác',
        dataIndex: 'action',
        width: 100,
        render: () => (
            <div className="data-table__datas__actions">
                <button className="data-table__datas__actions__button data-table__datas__actions__button-edit">
                    <TableIcon.EditIcon color={'#413ED4'} />
                </button>
                <button className="data-table__datas__actions__button data-table__datas__actions__button-delete">
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
        birthday: moment('8-10-2019').format('L'),
    });
}

const Customer = () => {
    return <DataTable columns={columns} data={data} />;
};

export default Customer;
