import * as React from 'react';
import * as ReactRedux from 'react-redux';
import * as DishAction from '@/redux/actions/dishAction';
import { Col, Row } from 'antd';
import ProductCard from '@/components/Card/Product';
import { GLOBALTYPES } from '@/redux/actions/globalTypes';

import axios from 'axios';

// test api
import { postDataAPI, getDataAPI, getWithParams, deleteWithParams, putDataAPI, getImage } from '@/utils/fetchData';

const Dish = React.memo(() => {
    const [listDish, setListDish] = React.useState(null);
    const [isDelete, setIsDelete] = React.useState(false);
    const { dish } = ReactRedux.useSelector((state) => state);

    const dispatch = ReactRedux.useDispatch();

    const getAllDishes = async () => {
        let currentUser = JSON.parse(localStorage.getItem('user'));
        let { data } = await getWithParams({
            path: `dishes`,
            params: { companyId: currentUser.companyId },
        });
        dispatch({
            type: GLOBALTYPES.LOADDISH,
            payload: data,
        });
    };

    React.useEffect(() => {
        if (listDish === null || isDelete) {
            getAllDishes();
            setIsDelete(false);
        }
    }, [isDelete]);
    const DeleteDish = (id) => {
        dispatch(DishAction.deleteDish(id));
        setIsDelete(true);
    };

    return (
        <div className="dish">
            {dish.data && (
                <Row gutter={[window.innerWidth / 60, window.innerWidth / 60]}>
                    {dish.data.map((v) => {
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
            )}
        </div>
    );
});

export default Dish;
