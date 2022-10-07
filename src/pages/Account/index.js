import { Search, SizeChanger } from '@/components';
import actions from '@/redux/actions/account';
import { Col, Row, Space, Spin } from 'antd';
import Table from '@/pages/Account/Table/Table/';
import ReactPaginate from 'react-paginate';
import * as Redux from 'react-redux';
import React from 'react';

const column = [
    { heading: 'ID', value: 'id' },
    { heading: 'Họ và tên', value: 'fullName' },
    { heading: 'Thời gian làm', value: 'timeStart' },
    { heading: 'SDT', value: 'phoneNumber' },
    { heading: 'Địa chỉ', value: 'address' },
    { heading: 'Số CMND', value: 'identityCard' },
    { heading: 'Chức vụ', value: 'role.description' },
    { heading: 'Trạng thái', value: 'status.name' },
];

const Account = () => {
    const dispatch = Redux.useDispatch();

    const listUser = Redux.useSelector((state) => state.UserAll);
    const listCustomer = Redux.useSelector((state) => state.CustomerAll);
    const { customers } = listCustomer;
    const { loading, users } = listUser;

    const userCreate = Redux.useSelector((state) => state.UserCreate);
    const userDelete = Redux.useSelector((state) => state.UserDelete);
    const userUpdate = Redux.useSelector((state) => state.UserUpdate);

    const [take, setTake] = React.useState(10);
    const [search, setSearch] = React.useState('');
    const [page, setPage] = React.useState(1);
    const [sortOrder, setSortOrder] = React.useState('');

    React.useEffect(() => {
        if (sortOrder !== '') {
            console.log('sort');
            dispatch(actions.getUsers(search, take, page, sortOrder));
        } else {
            console.log('not sort');
            dispatch(actions.getUsers(search, take, page));
        }
        console.log('users.data', users.data, customers);
    }, [dispatch, userCreate.success, userDelete.success, userUpdate.success, search, take, page, sortOrder]);

    const handlePageClick = (pages) => {
        setPage(pages.selected + 1);
    };

    return (
        <div className="data-table">
            <Row className="data-table__header">
                <Col xs={24} lg={12} className="data-table__header__title">
                    <p>Danh sách nhân viên</p>
                </Col>
                <Col xs={24} lg={12} className="data-table__header__filter">
                    <Search search={search} setSearch={setSearch} />
                    <SizeChanger take={take} setTake={setTake} />
                </Col>
            </Row>
            {loading ? (
                <Space direction="vertical" size="middle" style={{ width: '100%' }} align="center">
                    <Spin size="large" />
                </Space>
            ) : (
                <Table data={users.data || []} column={column} sortOrder={sortOrder} setSortOrder={setSortOrder} />
            )}

            <ReactPaginate
                previousLabel={'Quay lại'}
                nextLabel={'Tiếp tục'}
                breakLabel={'...'}
                pageCount={users.lastPage}
                marginPagesDisplayed={3}
                pageRangeDisplayed={6}
                onPageChange={handlePageClick}
                containerClassName={'new-pagination'}
                pageClassName={'page-item'}
                pageLinkClassName={'page-link'}
                previousClassName={'page-item'}
                previousLinkClassName={'page-link'}
                nextClassName={'page-item'}
                nextLinkClassName={'page-link'}
                breakLinkClassName={'page-link'}
                activeClassName={'active'}
            />
        </div>
    );
};

export default Account;
