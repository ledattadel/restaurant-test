import React from 'react';
import { Col, Row, Table } from 'antd';
import { useLocation } from 'react-router-dom';
import { SizeChanger, Search } from '@/components';
import ReactPaginate from 'react-paginate';
import constants from '@/constants';

const DataTable = ({ columns, data, search, setSearch, take, setTake, pagination, loading, onChange }) => {
    const location = useLocation();
    // const [selectedRowKeys, setSelectedRowKeys] = React.useState([]);

    // const onSelectChange = (newSelectedRowKeys) => {
    //     setSelectedRowKeys(newSelectedRowKeys);
    // };
    const address = constants?.breadcrumb?.find((v) => v.key === location.pathname);

    // const rowSelection = {
    //     selectedRowKeys,
    //     onChange: onSelectChange,
    //     selections: [
    //         Table.SELECTION_ALL,
    //         Table.SELECTION_INVERT,
    //         Table.SELECTION_NONE,
    //         {
    //             key: 'odd',
    //             text: 'Select Odd Row',
    //             onSelect: (changableRowKeys) => {
    //                 let newSelectedRowKeys = [];
    //                 newSelectedRowKeys = changableRowKeys.filter((_, index) => {
    //                     if (index % 2 !== 0) {
    //                         return false;
    //                     }

    //                     return true;
    //                 });
    //                 setSelectedRowKeys(newSelectedRowKeys);
    //             },
    //         },
    //         {
    //             key: 'even',
    //             text: 'Select Even Row',
    //             onSelect: (changableRowKeys) => {
    //                 let newSelectedRowKeys = [];
    //                 newSelectedRowKeys = changableRowKeys.filter((_, index) => {
    //                     if (index % 2 !== 0) {
    //                         return true;
    //                     }

    //                     return false;
    //                 });
    //                 setSelectedRowKeys(newSelectedRowKeys);
    //             },
    //         },
    //     ],
    // };
    return (
        <div className="data-table">
            <Row className="data-table__header">
                <Col xs={24} lg={12} className="data-table__header__title">
                    <p>{address.table}</p>
                </Col>
                <Col xs={24} lg={12} className="data-table__header__filter">
                    <Search search={search} setSearch={setSearch} />
                    <SizeChanger take={take} setTake={setTake} />
                </Col>
            </Row>
            <Table
                className="data-table__datas"
                columns={columns}
                dataSource={data}
                pagination={pagination}
                loading={loading}
                onChange={onChange}
                rowKey={(record) => record.id}
            />
        </div>
    );
};

export default DataTable;
