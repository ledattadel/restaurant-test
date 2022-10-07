import * as React from 'react';
import { useLocation } from 'react-router-dom';
import './index.scss';
import TableCard from '@/components/Card/Table';
import * as ReactRedux from 'react-redux';
import ProductCard from '@/components/Card/Product';
import './index.scss';
import { Col, Row } from 'antd';
import AreaCard from '@/components/Card/Area';
import { PermPhoneMsg } from '@mui/icons-material';
import * as AreaAction from '@/redux/actions/areaAction';
import { postDataAPI, getDataAPI, getWithParams, deleteWithParams, putDataAPI, getImage } from '@/utils/fetchData';
import { GLOBALTYPES } from '@/redux/actions/globalTypes';
import * as Redux from 'react-redux';
import actions from '@/redux/actions/areas';

const Table = () => {
    // const [listTable, setListTable] = React.useState(null);
    const [isDelete, setIsDelete] = React.useState(false);
    const location = useLocation();
    const dispatch = ReactRedux.useDispatch();
    const { areas } = Redux.useSelector((state) => state.AreasDetail);

    const listTable = Redux.useSelector((state) => state.TableAll);
    const { loading, error, table } = listTable;

    const TableDelete = Redux.useSelector((state) => state.TableDelete);
    const TableCreate = Redux.useSelector((state) => state.TableCreate);
    const TableUpdate = Redux.useSelector((state) => state.TableUpdate);

    React.useEffect(() => {
        dispatch(actions.getTable(areas.id));
    }, [dispatch, TableCreate.success, TableDelete.success, TableUpdate.success]);

    const DeleteTable = (id) => {
        dispatch(actions.deleteTable(id));
    };

    console.log('areas in table', areas);
    console.log('table', table);
    return (
        <div>
            <Row justify="space-between" align="middle" gutter={[12, 16]}>
                {table.map((v) => {
                    return (
                        <Col
                            key={v.id}
                            span={6}
                            className="grid__col"
                            xxl={{ span: 4 }}
                            xl={{ span: 8 }}
                            sm={{ span: 12 }}
                            xs={{ span: 24 }}
                        >
                            <TableCard product={v} DeleteTable={DeleteTable} />
                        </Col>
                    );
                })}
            </Row>
        </div>
    );
};

export default Table;
