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

    const CategoryDelete = ReactRedux.useSelector((state) => state.CategoryDelete);
    const CategoryCreate = ReactRedux.useSelector((state) => state.CategoryCreate);
    const CategoryUpdate = ReactRedux.useSelector((state) => state.CategoryUpdate);

    React.useEffect(() => {
        dispatch(actions.GetCategory());
    }, [dispatch, CategoryCreate.success, CategoryDelete.success, CategoryUpdate.success]);

    const deleteCategory = (id) => {
        // dispatch(AreaAction.deleteArea(id));
        dispatch(actions.deleteCategory(id));
    };

    return (
        <div className="category">
            <Row gutter={[window.innerWidth / 60, window.innerWidth / 60]}>
                {categorys.map((v) => {
                    return (
                        <Col
                            key={v.id}
                            className="grid__col"
                            xxl={{ span: 4 }}
                            xl={{ span: 6 }}
                            sm={{ span: 8 }}
                            xs={{ span: 24 }}
                        >
                            <CategoryCard img={v.image} category={v} deleteCategory={deleteCategory} />
                        </Col>
                    );
                })}
            </Row>
        </div>
    );
};

export default Category;
