import { Col, Row, Table } from 'antd';
import React, { useState } from 'react';
import { Search } from '@/components';
import './index.scss';

const DataTable = ({ columns, data }) => {
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);

    const onSelectChange = (newSelectedRowKeys) => {
        setSelectedRowKeys(newSelectedRowKeys);
    };

    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
        selections: [
            Table.SELECTION_ALL,
            Table.SELECTION_INVERT,
            Table.SELECTION_NONE,
            {
                key: 'odd',
                text: 'Select Odd Row',
                onSelect: (changableRowKeys) => {
                    let newSelectedRowKeys = [];
                    newSelectedRowKeys = changableRowKeys.filter((_, index) => {
                        if (index % 2 !== 0) {
                            return false;
                        }

                        return true;
                    });
                    setSelectedRowKeys(newSelectedRowKeys);
                },
            },
            {
                key: 'even',
                text: 'Select Even Row',
                onSelect: (changableRowKeys) => {
                    let newSelectedRowKeys = [];
                    newSelectedRowKeys = changableRowKeys.filter((_, index) => {
                        if (index % 2 !== 0) {
                            return true;
                        }

                        return false;
                    });
                    setSelectedRowKeys(newSelectedRowKeys);
                },
            },
        ],
    };
    return (
        <div className={'data-table'}>
            <Row className={'data-table__header'}>
                <Col span={8}>
                    <p>Danh sách khách hàng</p>
                </Col>
                <Col span={8} offset={8} className={'data-table__header-filter'}>
                    <Search />
                </Col>
            </Row>
            <Table className={'data-table__datas'} columns={columns} dataSource={data} />;
        </div>
    );
};

export default DataTable;
