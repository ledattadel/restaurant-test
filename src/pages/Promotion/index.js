import React from 'react';
import { DataTable } from '@/components';
import * as TableIcon from '@/assets/table-icon';
import moment from 'moment';

const columns = [
    {
        title: 'STT',
        dataIndex: 'stt',
        width: 26,
        render: (_, promotion) => {
            return (
                <div className="data-table__datas__number">
                    <span>{promotion.stt}</span>
                </div>
            );
        },
    },
    {
        title: 'Sự kiện',
        dataIndex: 'event',
        render: (_, promotion) => {
            return (
                <div className="data-table__datas__text">
                    <span>{promotion.event}</span>
                </div>
            );
        },
        sorter: (a, b) => a.event.toLowerCase().localeCompare(b.event.toLowerCase()),
        sortDirections: ['descend'],
    },
    {
        title: 'Giảm giá',
        dataIndex: 'discount',
        render: (_, promotion) => {
            return (
                <div className="data-table__datas__text">
                    <span>{promotion.discount}</span>
                </div>
            );
        },
        sorter: (a, b) =>
            Number(a.discount.substring(0, a.discount.length - 1)) -
            Number(b.discount.substring(0, b.discount.length - 1)),
        sortDirections: ['descend'],
    },
    {
        title: 'Đơn tối thiểu',
        dataIndex: 'minimum',
        render: (_, promotion) => {
            return (
                <div className="data-table__datas__text">
                    <span>{promotion.minimum}</span>
                </div>
            );
        },
        sorter: (a, b) => Number(a.minimum) - Number(b.minimum),
        sortDirections: ['descend'],
    },
    {
        title: 'Ngày bắt đầu',
        dataIndex: 'begin',
        render: (_, promotion) => {
            return (
                <div className="data-table__datas__text">
                    <span>{promotion.begin}</span>
                </div>
            );
        },
        sorter: (a, b) => new Date(a.begin) - new Date(b.begin),
        sortDirections: ['descend'],
    },
    {
        title: 'Ngày kết thúc',
        dataIndex: 'end',
        render: (_, promotion) => {
            return (
                <div className="data-table__datas__text">
                    <span>{promotion.end}</span>
                </div>
            );
        },
        sorter: (a, b) => new Date(a.end) - new Date(b.end),
        sortDirections: ['descend'],
    },
    {
        title: 'Trạng thái',
        dataIndex: 'status',
        render: (_, promotion) => {
            return (
                <div className="data-table__datas__status">
                    {new Date(promotion.end) > Date.now() ? (
                        <span style={{ color: 'green' }}>Đang diễn ra</span>
                    ) : (
                        <span style={{ color: 'red' }}>Đã kết thúc</span>
                    )}
                </div>
            );
        },
        sorter: (a, b) => new Date(b.end) - new Date(a.end),
        sortDirections: ['descend'],
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
            </div>
        ),
    },
];
const data = [
    {
        key: 1,
        stt: 1,
        event: `Black Friday`,
        discount: `16%`,
        minimum: '500.000',
        begin: moment('02-09-2022').format('L'),
        end: moment('07-09-2022').format('L'),
        status: '',
    },
    {
        key: 2,
        stt: 2,
        event: `Black Saturday`,
        discount: `17%`,
        minimum: '600.000',
        begin: moment('03-09-2022').format('L'),
        end: moment('10-30-2022').format('L'),
        status: '',
    },
    {
        key: 3,
        stt: 3,
        event: `Black Sunday`,
        discount: `15%`,
        minimum: '800.000',
        begin: moment('01-09-2022').format('L'),
        end: moment('07-10-2022').format('L'),
        status: '',
    },
];

console.log(new Date(data[0].end) > Date.now());

const Promotion = () => {
    return <DataTable columns={columns} data={data} />;
};

export default Promotion;
