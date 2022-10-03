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

const Table = () => {
    const [listTable, setListTable] = React.useState(null);
    const [isDelete, setIsDelete] = React.useState(false);
    const location = useLocation();
    const dispatch = ReactRedux.useDispatch();
    const { tables } = ReactRedux.useSelector((state) => state);

    React.useEffect(() => {
        if (listTable === null || isDelete) {
            getAllTables();
            setIsDelete(false);
        }
    }, []);
    const getAllTables = async () => {
        let currentUser = JSON.parse(localStorage.getItem('user'));
        let arrLocation = location.pathname.split('/');
        let elementExactlyLocation = arrLocation[arrLocation.length - 1];

        let { data } = await getWithParams({
            path: `tables`,
            params: { companyId: 0, areaId: parseInt(elementExactlyLocation) },
        });

        dispatch({
            type: GLOBALTYPES.LOADTABLES,
            payload: data,
        });
    };

    return (
        <div>
            <Row justify="space-between" align="middle" gutter={[12, 16]}>
                {tables.data &&
                    tables.data.map((v) => {
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
                                <TableCard product={v} />
                            </Col>
                        );
                    })}
            </Row>
        </div>
    );
};

export default Table;
