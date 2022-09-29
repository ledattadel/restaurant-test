import * as React from 'react';
import * as ReactRedux from 'react-redux';
import { useNavigate, Link, useLocation } from 'react-router-dom';

import ProductCard from '@/components/Card/Product';
import './index.scss';
import { Col, Row } from 'antd';
import AreaCard from '@/components/Card/Area';
import { PermPhoneMsg } from '@mui/icons-material';
import * as AreaAction from '@/redux/actions/areaAction';
import { postDataAPI, getDataAPI, getWithParams, deleteWithParams, putDataAPI, getImage } from '@/utils/fetchData';
import { GLOBALTYPES } from '@/redux/actions/globalTypes';

const AreaManagement = () => {
    const [listArea, setListArea] = React.useState(null);
    const [isDelete, setIsDelete] = React.useState(false);
    const location = useLocation();
    const dispatch = ReactRedux.useDispatch();
    const { areas } = ReactRedux.useSelector((state) => state);

    React.useEffect(() => {
        if (listArea === null || isDelete) {
            getAllAreas();
            setIsDelete(false);
        }
    }, []);
    const getAllAreas = async () => {
        let currentUser = JSON.parse(localStorage.getItem('user'));
        let { data } = await getWithParams({
            path: `areas`,
            params: { companyId: 0 },
        });
        setListArea(data);
        dispatch({
            type: GLOBALTYPES.LOADAREAS,
            payload: data,
        });
    };

    return (
        <div>
            <Row justify="space-between" align="middle" gutter={[12, 16]}>
                {listArea &&
                    listArea.map((v) => {
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
                                <AreaCard product={v} />
                            </Col>
                        );
                    })}
            </Row>
        </div>
    );
};

export default AreaManagement;
