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

const Table = () => {
    const [listTable, setListTable] = React.useState(null);
    const [isDelete, setIsDelete] = React.useState(false);
    const location = useLocation();
    const dispatch = ReactRedux.useDispatch();
    const listAreas = Redux.useSelector((state) => state.AreasAll);
    const { loading, error, areas } = listAreas;

    const areasCreate = Redux.useSelector((state) => state.AreasCreate);
    const { success } = areasCreate;

    // React.useEffect(() => {
    //     dispatch(actions.getAreas());
    // }, [dispatch, success]);

    return (
        <div>
            {/* <Row justify="space-between" align="middle" gutter={[12, 16]}>
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
            </Row> */}
        </div>
    );
};

export default Table;
