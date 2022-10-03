import React from 'react';
import * as Redux from 'react-redux';
import { DataTable } from '@/components';
import * as TableIcon from '@/assets/table-icon';
import moment from 'moment';
import actions from '@/redux/actions/customer';

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
        dataIndex: 'fullName',
        render: (_, customer) => {
            return (
                <div className="data-table__datas__text">
                    <TableIcon.CacbonUserIcon />
                    <span>{customer.fullName}</span>
                </div>
            );
        },
        sorter: (a, b) => a.fullName.toLowerCase().localeCompare(b.fullName.toLowerCase()),
        sortDirections: ['descend'],
    },
    {
        title: 'Số điện thoại',
        dataIndex: 'phoneNumber',
        render: (_, customer) => {
            return (
                <div className="data-table__datas__text">
                    <span>{customer.phoneNumber}</span>
                </div>
            );
        },
        sorter: (a, b) => a.phone.localeCompare(b.phoneNumber),
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

const getParams = (params) => ({
    results: params.pagination?.pageSize,
    page: params.pagination?.current,
    ...params,
});

const data = [];
for (let i = 0; i < 50; i++) {
    data.push({
        key: i,
        stt: i,
        id: i,
        name: `James Moriarty ${i}`,
        phone: `037834493${i}`,
        birthday: moment('8-10-2019').format('L'),
    });
}

const Customer = () => {
    const dispatch = Redux.useDispatch();

    const [take, setTake] = React.useState(10);
    const [search, setSearch] = React.useState('');
    const [page, setPage] = React.useState('');
    const [sort, setSort] = React.useState('');
    const [tableParams, setTableParams] = React.useState({
        pagination: {
            current: null,
            pageSize: null,
        },
    });

    const listCustomer = Redux.useSelector((state) => state.CustomerAll);
    const { loading, error, customers } = listCustomer;
    console.log(customers);
    console.log('====================================');
    console.log(error);
    console.log('====================================');
    React.useEffect(() => {
        if (sort) {
            dispatch(actions.getCustomers(search, take, page, sort));
        }
        dispatch(actions.getCustomers(search, take, page));
    }, [dispatch, search, take, page, sort]);

    const handleTableChange = (pagination, sorter) => {
        setTableParams({
            pagination,
            ...sorter,
        });
    };

    return (
        <DataTable
            columns={columns}
            data={customers.data}
            pagination={tableParams.pagination}
            loading={loading}
            onChange={handleTableChange}
        />
    );
};

export default Customer;
