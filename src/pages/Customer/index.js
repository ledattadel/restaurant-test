import * as TableIcon from '@/assets/table-icon';
import actions from '@/redux/actions/customer';
import { DataTable } from '@/components';
import * as Redux from 'react-redux';
import moment from 'moment';
import React from 'react';

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

    const customerCreate = Redux.useSelector((state) => state.CustomerCreate);
    const { success } = customerCreate;

    React.useEffect(() => {
        if (sort) {
            dispatch(actions.getCustomers(search, take, page, sort));
        }
        dispatch(actions.getCustomers(search, take, page));
    }, [dispatch, success, search, take, page, sort]);

    const getParams = (params) => ({
        results: params.pagination?.pageSize,
        page: params.pagination?.current,
        ...params,
    });

    const handleDelete = (id) => {
        dispatch(actions.deleteCustomer(id));
    };

    const handleEdit = (id) => {
        dispatch(actions.deleteCustomer(id));
    };

    const columns = [
        {
            title: 'STT',
            dataIndex: 'stt',
            width: 26,
            render: (_, customer) => {
                return (
                    <div className="data-table__datas__number">
                        <span>{customer.id}</span>
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
        },
        {
            title: 'Sinh nhật',
            dataIndex: 'birthday',
            render: (_, customer) => {
                return (
                    <div className="data-table__datas__text">
                        <span>{moment(customer.birthday).format('L')}</span>
                    </div>
                );
            },
        },
        {
            title: 'Thao tác',
            dataIndex: 'action',
            width: 100,
            render: (_, customer) => (
                <div className="data-table__datas__actions">
                    <button
                        className="data-table__datas__actions__button data-table__datas__actions__button-edit"
                        onClick={() => {
                            handleEdit(customer.id);
                        }}
                    >
                        <TableIcon.EditIcon color={'#413ED4'} />
                    </button>
                    <button
                        className="data-table__datas__actions__button data-table__datas__actions__button-delete"
                        onClick={() => {
                            handleDelete(customer.id);
                        }}
                    >
                        <TableIcon.DeleteIcon />
                    </button>
                </div>
            ),
        },
    ];

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
