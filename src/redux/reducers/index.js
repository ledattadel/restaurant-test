import { combineReducers } from 'redux';
import auth from './authReducer';
import alert from './alertReducer';
import dish from './dishReducer';
import order from './orderReducer';

export default combineReducers({
    auth,
    alert,
    dish,
    order,
});
