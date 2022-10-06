import * as React from 'react';
import * as ReactRedux from 'react-redux';
import * as DishAction from '@/redux/actions/dishAction';
import { Col, Row } from 'antd';
import ProductCard from '@/components/Card/Product';
import { GLOBALTYPES } from '@/redux/actions/globalTypes';
import _ from 'lodash';
import actions from '@/redux/actions/dishes';

import axios from 'axios';

const Dish = () => {
    const [listDish, setListDish] = React.useState(null);
    const [isDelete, setIsDelete] = React.useState(false);
    const dispatch = ReactRedux.useDispatch();
    const listDishes = ReactRedux.useSelector((state) => state.DishesAll);
    const { loading, error, dishes } = listDishes;

    const DishesDelete = ReactRedux.useSelector((state) => state.DishesDelete);
    const DishesCreate = ReactRedux.useSelector((state) => state.DishesCreate);
    const DishesUpdate = ReactRedux.useSelector((state) => state.DishesUpdate);

    React.useEffect(() => {
        dispatch(actions.getDishes());
    }, [dispatch, DishesCreate.success, DishesDelete.success, DishesUpdate.success]);

    const DeleteDish = (id) => {
        console.log('delete ,', id);
        dispatch(actions.deleteDishes(id));
    };

    return (
        <div className="dish">
            <Row gutter={[window.innerWidth / 60, window.innerWidth / 60]}>
                {dishes.map((v) => {
                    return (
                        <Col
                            key={v.id}
                            className="grid__col"
                            xxl={{ span: 4 }}
                            xl={{ span: 6 }}
                            sm={{ span: 8 }}
                            xs={{ span: 24 }}
                        >
                            <ProductCard DeleteDish={DeleteDish} product={v} img={v.image} />
                        </Col>
                    );
                })}
            </Row>
        </div>
    );
};

export default Dish;
