import * as React from 'react';
import * as ReactRedux from 'react-redux';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import actions from '@/redux/actions/areas';
import ProductCard from '@/components/Card/Product';
import './index.scss';
import { Col, Row } from 'antd';
import AreaCard from '@/components/Card/Area';
import { PermPhoneMsg } from '@mui/icons-material';
import * as AreaAction from '@/redux/actions/areaAction';
import { postDataAPI, getDataAPI, getWithParams, deleteWithParams, putDataAPI, getImage } from '@/utils/fetchData';
import { GLOBALTYPES } from '@/redux/actions/globalTypes';
import * as Redux from 'react-redux';

import _ from 'lodash';

const AreaManagement = () => {
    const [listArea, setListArea] = React.useState(null);
    const [isDelete, setIsDelete] = React.useState(false);
    const location = useLocation();
    const dispatch = ReactRedux.useDispatch();
    const listAreas = Redux.useSelector((state) => state.AreasAll);
    const { loading, error, areas } = listAreas;

    const areasCreate = Redux.useSelector((state) => state.AreasCreate);
    const { success } = areasCreate;

    React.useEffect(() => {
        dispatch(actions.getAreas());
    }, [dispatch, success]);

    const DeleteArea = (id) => {
        dispatch(AreaAction.deleteArea(id));
        setIsDelete(true);
    };

    return (
        <div>
            <Row gutter={[12, 16]}>
                {areas &&
                    areas.map((v) => {
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
                                <AreaCard product={v} deleteArea={DeleteArea} />
                            </Col>
                        );
                    })}
            </Row>
        </div>
    );
};

export default AreaManagement;
