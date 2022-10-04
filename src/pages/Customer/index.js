// import ModalComponent from '@/components/ModalComponent';
// import * as TableIcon from '@/assets/table-icon';
// import actions from '@/redux/actions/customer';
// import { DataTable } from '@/components';
// import * as Redux from 'react-redux';
// import moment from 'moment';
// import React from 'react';
// import FormEditCustomer from '@/components/Form/FormEditCustomer';

// const itemRender = (_, type, originalElement) => {
//     if (type === 'prev') {
//         return <button className="pagination__button pagination__button__prev">Previous</button>;
//     }

//     if (type === 'next') {
//         return <button className="pagination__button pagination__button__next">Next</button>;
//     }

//     return originalElement;
// };

// const Customer = () => {
//     const dispatch = Redux.useDispatch();
//     const listCustomer = Redux.useSelector((state) => state.CustomerAll);
//     const { loading, customers } = listCustomer;

//     const customerCreate = Redux.useSelector((state) => state.CustomerCreate);
//     const { success } = customerCreate;

//     const [visible, setVisible] = React.useState(false);
//     const [take, setTake] = React.useState(10);
//     const [search, setSearch] = React.useState('');
//     const [page, setPage] = React.useState(0);
//     const [sort, setSort] = React.useState('');

//     const onChange = (page, newPageSize) => {
//         setTake(newPageSize);
//         setPage(take !== newPageSize ? 1 : page);
//         console.log(page);
//     };

//     const [tableParams, setTableParams] = React.useState({
//         pagination: {
//             current: page + 1,
//             pageSize: take,
//             total: customers.count,
//             itemRender: itemRender,
//             onChange: onChange,
//             showSizeChanger: true,
//         },
//     });

//     React.useEffect(() => {
//         if (sort) {
//             dispatch(actions.getCustomers(search, take, page, sort));
//         }
//         dispatch(actions.getCustomers(search, take, page));
//         setTableParams({
//             pagination: {
//                 current: page,
//                 pageSize: take,
//                 total: customers.count,
//                 itemRender: itemRender,
//             },
//         });
//     }, [dispatch, success, search, take, page, sort]);

//     // const getParams = (params) => ({
//     //     results: params.pagination?.pageSize,
//     //     page: params.pagination?.current,
//     //     ...params,
//     // });

//     const handleDelete = (id) => {
//         dispatch(actions.deleteCustomer(id));
//     };

//     const handleEdit = (id) => {
//         dispatch(actions.getCustomerDetail(id));
//         setVisible(true);
//     };

//     const columns = [
//         {
//             title: 'STT',
//             dataIndex: 'stt',
//             width: 26,
//             render: (_, customer) => {
//                 return (
//                     <div className="data-table__datas__number">
//                         <span>{customer.id}</span>
//                     </div>
//                 );
//             },
//         },
//         {
//             title: 'ID',
//             dataIndex: 'id',
//             width: 50,
//             render: (_, customer) => {
//                 return (
//                     <div className="data-table__datas__number">
//                         <span>{customer.id}</span>
//                     </div>
//                 );
//             },
//         },
//         {
//             title: 'Họ và tên',
//             dataIndex: 'fullName',
//             render: (_, customer) => {
//                 return (
//                     <div className="data-table__datas__text">
//                         <TableIcon.CacbonUserIcon />
//                         <span>{customer.fullName}</span>
//                     </div>
//                 );
//             },
//         },
//         {
//             title: 'Số điện thoại',
//             dataIndex: 'phoneNumber',
//             render: (_, customer) => {
//                 return (
//                     <div className="data-table__datas__text">
//                         <span>{customer.phoneNumber}</span>
//                     </div>
//                 );
//             },
//         },
//         {
//             title: 'Sinh nhật',
//             dataIndex: 'birthday',
//             render: (_, customer) => {
//                 return (
//                     <div className="data-table__datas__text">
//                         <span>{moment(customer.birthday).format('L')}</span>
//                     </div>
//                 );
//             },
//         },
//         {
//             title: 'Thao tác',
//             dataIndex: 'action',
//             width: 100,
//             render: (_, customer) => (
//                 <div className="data-table__datas__actions">
//                     <button
//                         className="data-table__datas__actions__button data-table__datas__actions__button-edit"
//                         onClick={() => {
//                             handleEdit(customer.id);
//                         }}
//                     >
//                         <TableIcon.EditIcon color={'#413ED4'} />
//                     </button>
//                     <button
//                         className="data-table__datas__actions__button data-table__datas__actions__button-delete"
//                         onClick={() => {
//                             handleDelete(customer.id);
//                         }}
//                     >
//                         <TableIcon.DeleteIcon />
//                     </button>
//                 </div>
//             ),
//         },
//     ];

//     const handleTableChange = (pagination, sorter) => {
//         setTableParams({
//             pagination,
//             ...sorter,
//         });
//         setTake(tableParams.pagination.pageSize);
//     };
//     return (
//         <div>
//             <DataTable
//                 columns={columns}
//                 data={customers.data}
//                 pagination={tableParams.pagination}
//                 onChange={handleTableChange}
//                 search={search}
//                 setSearch={setSearch}
//                 take={take}
//                 setTake={setTake}
//             />
//             <ModalComponent
//                 visible={visible}
//                 setVisible={setVisible}
//                 width={window.innerWidth / 1.7}
//                 componentForm={<FormEditCustomer setVisible={setVisible} />}
//             />
//         </div>
//     );
// };

// export default Customer;
