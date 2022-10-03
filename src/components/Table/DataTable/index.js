import React from 'react';
import { Col, Row, Table } from 'antd';
import { useLocation } from 'react-router-dom';
import { Search, SizeChanger } from '@/components';
import ReactPaginate from 'react-paginate';
import constants from '@/constants';

const DataTable = ({ columns, data }) => {
    const location = useLocation();
    // const [selectedRowKeys, setSelectedRowKeys] = React.useState([]);

    // const onSelectChange = (newSelectedRowKeys) => {
    //     setSelectedRowKeys(newSelectedRowKeys);
    // };
    const address = constants?.breadcrumb?.find((v) => v.key === location.pathname);

    const itemRender = (_, type, originalElement) => {
        if (type === 'prev') {
            return <button className="pagination__button pagination__button__prev">Previous</button>;
        }

        if (type === 'next') {
            return <button className="pagination__button pagination__button__next">Next</button>;
        }

        return originalElement;
    };

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
                    <Search />
                    <SizeChanger />
                </Col>
            </Row>
            <Table
                className="data-table__datas"
                columns={columns}
                dataSource={data}
                pagination={{ itemRender: itemRender }}
                rowKey={(record) => record.id}
            />
        </div>
    );
};

export default DataTable;
