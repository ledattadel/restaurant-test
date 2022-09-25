import React from 'react';
import { DataTable } from '@/components';
import * as TableIcon from '@/assets/table-icon';
import moment from 'moment';

const columns = [
    {
        title: 'STT',
        dataIndex: 'stt',
        width: 26,
        render: (_, invoice) => {
            return (
                <div className="data-table__datas__number">
                    <span>{invoice.stt}</span>
                </div>
            );
        },
    },
    {
        title: 'Số hóa đơn',
        dataIndex: 'orderId',
        render: (_, invoice) => {
            return (
                <div className="data-table__datas__number">
                    <span>{invoice.orderId}</span>
                </div>
            );
        },
        sorter: (a, b) => a.orderId - b.orderId,
        sortDirections: ['descend'],
    },
    {
        title: 'Họ và tên',
        dataIndex: 'name',
        render: (_, invoice) => {
            return (
                <div className="data-table__datas__text">
                    <TableIcon.CacbonUserIcon />
                    <span>{invoice.name}</span>
                </div>
            );
        },
        sorter: (a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()),
        sortDirections: ['descend'],
    },

    {
        title: 'Ngày tạo',
        dataIndex: 'createAt',
        render: (_, invoice) => {
            return (
                <div className="data-table__datas__text">
                    <span>{invoice.createAt}</span>
                </div>
            );
        },
        sorter: (a, b) => new Date(a.createAt) - new Date(b.createAt),
        sortDirections: ['descend'],
    },
    {
        title: 'Tổng món',
        dataIndex: 'quantity',
        render: (_, invoice) => {
            return (
                <div className="data-table__datas__text">
                    <span>{invoice.quantity}</span>
                </div>
            );
        },
        sorter: (a, b) => a.quantity - b.quantity,
        sortDirections: ['descend'],
    },
    {
        title: 'Tổng hóa đơn',
        dataIndex: 'grandTotal',
        render: (_, invoice) => {
            return (
                <div className="data-table__datas__text">
                    <span>{invoice.grandTotal}</span>
                </div>
            );
        },
        sorter: (a, b) => a.grandTotal - b.grandTotal,
        sortDirections: ['descend'],
    },
    {
        title: 'Thao tác',
        dataIndex: 'action',
        width: 100,
        render: () => (
            <div className="data-table__datas__actions">
                 <button className="data-table__datas__actions__button data-table__datas__actions__button-view">
                    <TableIcon.EyeIcon/>
                </button>
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

for (let i = 0; i < 50; i++) {
    data.push({
        key: i,
        stt: i,
        orderId: i,
        name: `Sherlock Holmes ${i}`,
        createAt: moment('8-10-2019').format('L'),
        quantity: i,
        grandTotal: i * 10000,
    });
}

const Invoice = () => {
    return <DataTable columns={columns} data={data} />;
};

export default Invoice;
