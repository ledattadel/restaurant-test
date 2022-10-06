import * as React from 'react';
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
import ModalComponent from '@/components/ModalComponent';
import FormEditArea from '@/components/Form/FormEditArea';
import _ from 'lodash';

const AreaManagement = () => {
    const [listArea, setListArea] = React.useState(null);
    const [isDelete, setIsDelete] = React.useState(false);
    const location = useLocation();
    const dispatch = Redux.useDispatch();
    const listAreas = Redux.useSelector((state) => state.AreasAll);
    const { loading, error, areas } = listAreas;

    const AreasDelete = Redux.useSelector((state) => state.AreasDelete);
    const AreasCreate = Redux.useSelector((state) => state.AreasCreate);
    const AreasUpdate = Redux.useSelector((state) => state.AreasUpdate);

    React.useEffect(() => {
        dispatch(actions.getAreas());
    }, [dispatch, AreasCreate.success, AreasDelete.success, AreasUpdate.success]);

    const DeleteArea = (id) => {
        dispatch(actions.deleteAreas(id));
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
