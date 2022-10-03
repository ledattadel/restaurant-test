import { combineReducers } from 'redux';
import auth from './authReducer';
import alert from './alertReducer';
import {
    CustomerAllReducer,
    CustomerCreateReducer,
    CustomerDeleteReducer,
    CustomerDetailReducer,
    CustomerUpdateReducer,
} from './customer';
import dish from './dishReducer';
import order from './orderReducer';
import routing from './routingReducer';
import category from './categoryReducer';
import areas from './areasReducer';
import tables from './tableReducer';
import functions from './functionReducer';

export default combineReducers({
    auth,
    alert,
    category,
    dish,
    order,
    routing,
    areas,
    tables,
    functions,

    CustomerAll: CustomerAllReducer,
    CustomerCreate: CustomerCreateReducer,
    CustomerDelete: CustomerDeleteReducer,
    CustomerDetail: CustomerDetailReducer,
    CustomerUpdate: CustomerUpdateReducer,
});
