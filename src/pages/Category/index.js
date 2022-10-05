import * as React from 'react';
import * as ReactRedux from 'react-redux';
import * as DishAction from '@/redux/actions/dishAction';
import { Col, Row, Space, Spin } from 'antd';
import { CategoryCard } from '@/components';
import { postDataAPI, getDataAPI, getWithParams, deleteWithParams, putDataAPI, getImage } from '@/utils/fetchData';
import { GLOBALTYPES } from '@/redux/actions/globalTypes';
import ModalComponent from '@/components/ModalComponent';
import actions from '@/redux/actions/category';
import _ from 'lodash';

const Category = () => {
    const [listCate, setListCate] = React.useState(null);
    const [isDelete, setIsDelete] = React.useState(false);
    const dispatch = ReactRedux.useDispatch();
    const listCategory = ReactRedux.useSelector((state) => state.CategoryAll);
    const { loading, error, categorys } = listCategory;

    const CategoryCreate = ReactRedux.useSelector((state) => state.CategoryCreate);
    const { success } = CategoryCreate;

    React.useEffect(() => {
        dispatch(actions.GetCategory());
    }, [dispatch, success]);

    const DeleteArea = (id) => {
        // dispatch(AreaAction.deleteArea(id));
        setIsDelete(true);
    };

    return (
        <div className="category">
            <Row gutter={[window.innerWidth / 60, window.innerWidth / 60]}>
                {loading ? (
                    <Space direction="vertical" size="middle" style={{ width: '100%' }} align="center">
                        <Spin size="large" />
                    </Space>
                ) : (
                    categorys.map((v) => {
                        return (
                            <Col
                                key={v.id}
                                className="grid__col"
                                xxl={{ span: 4 }}
                                xl={{ span: 6 }}
                                sm={{ span: 8 }}
                                xs={{ span: 24 }}
                            >
                                <CategoryCard img={v.image} category={v} />
                            </Col>
                        );
                    })
                )}
            </Row>
        </div>
    );
};

export default Category;
