import { combineReducers } from 'redux';
import auth from './authReducer';
import alert from './alertReducer';
import dish from './dishReducer';
import order from './orderReducer';
import routing from './routingReducer';
import category from './categoryReducer';
import areas from './areasReducer';

export default combineReducers({
    auth,
    alert,
    dish,
    order,
    routing,
    category,
    areas,
});
