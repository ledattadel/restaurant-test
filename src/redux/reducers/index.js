import { combineReducers } from 'redux';
import auth from './authReducer';
import alert from './alertReducer';
import dish from './dishReducer';
import order from './orderReducer';
import routing from './routingReducer';

export default combineReducers({
    auth,
    alert,
    dish,
    order,
    routing,
});
