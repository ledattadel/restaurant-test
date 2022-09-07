import * as React from 'react';
import * as ReactRedux from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
// import components
import TableChoiceComponents from '@/components/TableChoiceComponents/FormEditTable';

//import antd
import { Input, Typography as TypographyAntd, Button, Table, Select, Form, Row, Col } from 'antd';

//import Mui
import Typography from '@mui/material/Typography';

//import assets
import './Table.pages.scss';

const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};

const TableManagement = () => {
    const [loading, setLoading] = React.useState(true);
    const [dataArea, setDataArea] = React.useState([]);
    const [dataTable, setDataTable] = React.useState([]);
    const [dataEditTable, setDataEditTable] = React.useState({});

    const childRef = React.useRef(null);

    React.useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const { data: response } = await axios.get('https://62e741b769bd03090f7a370c.mockapi.io/api/areas');
                setDataArea(
                    response.map((v) => {
                        var addKey = { key: v.id };

                        return {
                            ...v,
                            ...addKey,
                        };
                    }),
                );
            } catch (error) {
                console.error(error.message);
            }
            setLoading(false);
        };

        fetchData();
    }, []);
    const onFinish = (value) => {
        createTable(value.numOfTable, value.codeTable, value.areaTable);
    };
    const createTable = (numOfTable, codeTable, areaTable) => {
        let arrTable = [];
        for (let index = 0; index < numOfTable; index++) {
            let element = {
                areaTable: areaTable,
                Table: codeTable + '' + index,
            };
            arrTable.push(element);
        }
        console.log('arrTable', arrTable);
        let isNewDataTable = true;
        for (let index = 0; index < dataTable.length; index++) {
            if (arrTable[0].areaTable === dataTable[index][0].areaTable) {
                const arr = dataTable;

                arr[index] = arr[index].concat(arrTable);

                setDataTable([...arr]);
                console.log('datatable sau khi concat arr:', dataTable);
                isNewDataTable = false;
            }
        }
        if (isNewDataTable) {
            setDataTable([...dataTable, arrTable]);
        }
        localStorage.setItem('Table', dataTable);
    };

    const handleTableClick = (valueRoomTable, valueTable) => {
        setDataEditTable(valueTable);

        childRef.current(valueRoomTable, valueTable);
    };

    return (
        <div className="table-page">
            <TableChoiceComponents childRef={childRef} dataEditTable={dataEditTable}></TableChoiceComponents>
            <div className="table-sidebar">
                <Form id="createTableForm" onFinish={onFinish} validateMessages={validateMessages}>
                    <Form.Item
                        name="numOfTable"
                        label="Số bàn"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input placeholder="" />
                    </Form.Item>
                    <Form.Item
                        name="codeTable"
                        label="Ký hiệu bàn"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input placeholder="" />
                    </Form.Item>
                    <Form.Item
                        name="areaTable"
                        label="Khu vực"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Select placeholder="Nhấn để chọn khu vực">
                            {dataArea.map((v) => {
                                return <Select.Option value={v.tenkv}>{v.tenkv}</Select.Option>;
                            })}
                        </Select>
                    </Form.Item>

                    <div className="btn-createTable">
                        <Button>Khởi tạo lại</Button>
                        <Button type="primary" form="createTableForm" key="submit" htmlType="submit">
                            Tạo bàn
                        </Button>
                    </div>
                </Form>
            </div>
            <div className="table-content">
                {dataTable
                    ? dataTable.map((v) => {
                          return (
                              <Row className="areaTable" gutter={[48, 48]}>
                                  <p style={{ width: '100%', textAlign: 'center' }}>{v[0].areaTable}</p>
                                  <br></br>
                                  {v.map((c) => {
                                      return (
                                          <Col span={2} className="col-elementTable">
                                              <Button className="elementTable" onClick={() => handleTableClick(v, c)}>
                                                  {c.Table}
                                              </Button>
                                          </Col>
                                      );
                                  })}
                              </Row>
                          );
                      })
                    : []}
            </div>
        </div>
    );
};

export default TableManagement;
