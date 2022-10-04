import { Search, SizeChanger } from '@/components';
import actions from '@/redux/actions/customer';
import { Col, Row, Space, Spin } from 'antd';
import Table from '@/components/Table/Table';
import ReactPaginate from 'react-paginate';
import * as Redux from 'react-redux';
import React from 'react';

const column = [
    { heading: 'STT', value: 'id' },
    { heading: 'ID', value: 'id' },
    { heading: 'Họ và tên', value: 'fullName' },
    { heading: 'Phone', value: 'phoneNumber' },
    { heading: 'Ngày sinh', value: 'birthday' },
];

const Customer = () => {
    const dispatch = Redux.useDispatch();

    const listCustomer = Redux.useSelector((state) => state.CustomerAll);
    const { loading, customers } = listCustomer;

    const customerCreate = Redux.useSelector((state) => state.CustomerCreate);
    const { success } = customerCreate;

    const [take, setTake] = React.useState(10);
    const [search, setSearch] = React.useState('');
    const [page, setPage] = React.useState(1);
    const [sortOrder, setSortOrder] = React.useState('');

    React.useEffect(() => {
        if (sortOrder !== '') {
            console.log('sort');
            dispatch(actions.getCustomers(search, take, page, sortOrder));
        } else {
            console.log('not sort');
            dispatch(actions.getCustomers(search, take, page));
        }
    }, [dispatch, success, search, take, page, sortOrder]);

    const handlePageClick = (pages) => {
        setPage(pages.selected + 1);
    };

    return (
        <div className="data-table">
            <Row className="data-table__header">
                <Col xs={24} lg={12} className="data-table__header__title">
                    <p>Danh sách khách hàng</p>
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
                <Table data={customers.data || []} column={column} sortOrder={sortOrder} setSortOrder={setSortOrder} />
            )}

            <ReactPaginate
                previousLabel={'Quay lại'}
                nextLabel={'Tiếp tục'}
                breakLabel={'...'}
                pageCount={customers.lastPage}
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

export default Customer;
