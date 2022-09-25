import React from 'react';
import { DataTable } from '@/components';
import * as TableIcon from '@/assets/table-icon';
import moment from 'moment';

const columns = [
    {
        title: 'STT',
        dataIndex: 'stt',
        width: 26,
        render: (_, account) => {
            return (
                <div className="data-table__datas__number">
                    <span>{account.stt}</span>
                </div>
            );
        },
    },
    {
        title: 'ID',
        dataIndex: 'id',
        width: 50,
        render: (_, account) => {
            return (
                <div className="data-table__datas__number">
                    <span>{account.id}</span>
                </div>
            );
        },
    },
    {
        title: 'Họ và tên',
        dataIndex: 'name',
        width: 180,
        render: (_, account) => {
            return (
                <div className="data-table__datas__text">
                    <TableIcon.CacbonUserIcon />
                    <span>{account.name}</span>
                </div>
            );
        },
        sorter: (a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()),
        sortDirections: ['descend'],
    },
    {
        title: 'thời gian làm',
        dataIndex: 'timeStart',
        render: (_, account) => {
            return (
                <div className="data-table__datas__text">
                    <span>{account.timeStart}</span>
                </div>
            );
        },
        sorter: (a, b) => new Date(a.timeStart) - new Date(b.timeStart),
        sortDirections: ['descend'],
    },
    {
        title: 'Số điện thoại',
        dataIndex: 'phone',
        render: (_, account) => {
            return (
                <div className="data-table__datas__text">
                    <span>{account.phone}</span>
                </div>
            );
        },
        sorter: (a, b) => a.phone.localeCompare(b.phone),
        sortDirections: ['descend'],
    },
    {
        title: 'Số CMND',
        dataIndex: 'identityCard',
        render: (_, account) => {
            return (
                <div className="data-table__datas__text">
                    <span>{account.identityCard}</span>
                </div>
            );
        },
        sorter: (a, b) => a.identityCard.localeCompare(b.identityCard),
        sortDirections: ['descend'],
    },
    {
        title: 'Địa chỉ',
        dataIndex: 'address',
        render: (_, account) => {
            return (
                <div className="data-table__datas__text">
                    <span>{account.address}</span>
                </div>
            );
        },
        sorter: (a, b) => a.address.toLowerCase().localeCompare(b.address.toLowerCase()),
        sortDirections: ['descend'],
    },
    {
        title: 'Chức vụ',
        dataIndex: 'role',
        render: (_, account) => {
            return (
                <div className="data-table__datas__text">
                    <span>{account.role}</span>
                </div>
            );
        },
        sorter: (a, b) => a.role.toLowerCase().localeCompare(b.role.toLowerCase()),
        sortDirections: ['descend'],
    },
    {
        title: 'Trạng thái',
        dataIndex: 'status',
        render: (_, account) => {
            return (
                <div className="data-table__datas__status">
                    {account.status === 'Đang làm' ? (
                        <span style={{ color: 'green' }}>{account.status}</span>
                    ) : (
                        <span style={{ color: 'red' }}>{account.status}</span>
                    )}
                </div>
            );
        },
        sorter: (a, b) => a.status.toLowerCase().localeCompare(b.status.toLowerCase()),
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

for (let i = 0; i < 50; i++) {
    data.push({
        key: i,
        stt: i,
        id: i,
        name: `John H. Watson ${i}`,
        timeStart: moment('08-15-2022').format('L'),
        phone: `037834493${i}`,
        identityCard: `${i}7037834493`,
        address: `${i + 1} Đường D1, Phường Tân Hưng, Quận 7, Thành phố Hồ Chí Minh`,
        role: `${i % 7 === 0 ? 'Quản lý' : 'Nhân viên'}`,
        status: `${i % 5 === 0 ? 'Đã nghỉ' : 'Đang làm'}`,
    });
}
const Account = () => {
    return <DataTable columns={columns} data={data} />;
};

export default Account;
