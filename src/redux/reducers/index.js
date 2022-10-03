import { combineReducers } from 'redux';
import auth from './authReducer';
import alert from './alertReducer';
import category from './categoryReducer';
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

export default combineReducers({
    auth,
    alert,
    category,
    dish,
    order,
    routing,

    // Customer Reducer
    CustomerAll: CustomerAllReducer,
    CustomerCreate: CustomerCreateReducer,
    CustomerDelete: CustomerDeleteReducer,
    CustomerDetail: CustomerDetailReducer,
    CustomerUpdate: CustomerUpdateReducer,
});
