import * as React from 'react';
import * as ReactRedux from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';

//import antd
import { Input, Typography as TypographyAntd, Button, Table } from 'antd';

//import Mui
import Typography from '@mui/material/Typography';

//import assets
import './area.pages.scss';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
//import components
import AddAreaForm from '@/components/AreaComponents/AddAreaForm';

const columns = [
    {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'Mã khu vực',
        dataIndex: 'makv',
        key: 'makv',
    },
    {
        title: 'Tên khu vực',
        dataIndex: 'tenkv',
        key: 'tenkv',
    },
    {
        title: 'Sử dụng',
        dataIndex: 'sudung',
        key: 'sudung',
        render: (dataIndex) => {
            if (dataIndex) return 1;
            else return 0;
        },
    },
    {
        title: 'Mô tả',
        dataIndex: 'mota',
        key: 'mota',
    },

    {
        title: 'Chỉnh sửa',
        dataIndex: '',
        width: '20',
        render: (_, record) => {
            return (
                <>
                    <Button type="primary">Edit</Button>
                </>
            );
        },
    },
];

const Area = () => {
    const [selectedRowKeys, setSelectedRowKeys] = React.useState([]);
    const [selected, setSelected] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [data, setData] = React.useState([]);
    const childRef = React.useRef(null);
    const [newValue, setNewValue] = React.useState({});
    const [searchText, setSearchText] = React.useState('');
    const [searchedColumn, setSearchedColumn] = React.useState('');
    const searchInput = React.useRef(null);

    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };

    const handleReset = (clearFilters) => {
        clearFilters();
        setSearchText('');
    };

    React.useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const { data: response } = await axios.get('https://62e741b769bd03090f7a370c.mockapi.io/api/areas');
                setData(
                    response.map((v) => {
                        var addKey = { key: v.id };

                        return {
                            ...v,
                            ...addKey,
                        };
                    }),
                );
                console.log(data);
            } catch (error) {
                console.error(error.message);
            }
            setLoading(false);
        };
        console.log('newValue', newValue);
        fetchData();
    }, []);

    const onSelectChange = (newSelectedRowKeys) => {
        console.log('selected:', newSelectedRowKeys);
        setSelected(newSelectedRowKeys);
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
    };

    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };

    const handleAddNewArea = () => {
        childRef.current();
    };

    const handleSubmit = async (values) => {
        await axios
            .post('https://reqres.in/api/users', values)
            .then((response) => {
                console.log('Status: ', response.status);
                console.log('Data: ', response.data);
            })
            .catch((error) => {
                console.error('Something went wrong!', error);
            });
    };

    return (
        <div className="area-page">
            <div className="area-sidebar">
                <TypographyAntd.Title level={4} style={{ color: '#3d405b' }}>
                    Tìm kiếm khu vực
                </TypographyAntd.Title>
                <Input placeholder="Mã khu vực" />
                <Input placeholder="Tên khu vực" />
                <div className="btn-findArea">
                    <Button>Clear</Button>
                    <Button type="primary">Tìm Kiếm</Button>
                </div>
            </div>
            <div className="area-content">
                <div className="bth-table">
                    <Button onClick={handleAddNewArea} type="primary">
                        Thêm
                    </Button>
                    <Button type="primary" danger>
                        Xóa
                    </Button>
                </div>
                <AddAreaForm childRef={childRef} handleSubmitForm={handleSubmit}></AddAreaForm>
                <Table className="table-layout" rowSelection={rowSelection} columns={columns} dataSource={data} />
            </div>
        </div>
    );
};

export default Area;
