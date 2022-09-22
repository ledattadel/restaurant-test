import * as React from 'react';
import * as ReactRedux from 'react-redux';
import * as DishAction from '@/redux/actions/dishAction';
import { Col, Row } from 'antd';
import ProductCard from '@/components/Card/Product';

import axios from 'axios';

// test api
import { postDataAPI, getDataAPI, getWithParams, deleteWithParams, putDataAPI, getImage } from '@/utils/fetchData';

const Dish = () => {
    const [listDish, setListDish] = React.useState([]);

    const dispatch = ReactRedux.useDispatch();

    const getAllDishes = async () => {
        let currentUser = JSON.parse(localStorage.getItem('user'));
        let { data } = await getWithParams({
            path: `dishes`,
            params: { companyId: currentUser.companyId },
        });
        return data;
    };

    React.useEffect(() => {
        getAllDishes().then((res) => {
            setListDish(res);
        });
    }, [listDish]);

    return (
        <div className="dish">
            <Row justify="space-around" align="middle" gutter={[window.innerWidth / 60, window.innerWidth / 60]}>
                {listDish
                    ? listDish.map((v) => {
                          return (
                              <Col
                                  key={v.id}
                                  className="grid__col"
                                  xxl={{ span: 4 }}
                                  xl={{ span: 6 }}
                                  sm={{ span: 8 }}
                                  xs={{ span: 24 }}
                              >
                                  <ProductCard product={v} img={v.image} />
                              </Col>
                          );
                      })
                    : []}
            </Row>
        </div>
    );
};

export default Dish;
