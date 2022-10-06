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
import {
    AreasAllReducer,
    AreasCreateReducer,
    AreasDeleteReducer,
    AreasDetailReducer,
    AreasUpdateReducer,
} from './areas';
import { UserAllReducer, UserCreateReducer, UserDeleteReducer, UserDetailReducer, UserUpdateReducer } from './account';
import {
    CategoryAllReducer,
    CategoryCreateReducer,
    CategoryDeleteReducer,
    CategoryDetailReducer,
    CategoryUpdateReducer,
} from './category';
import {
    DishesAllReducer,
    DishesCreateReducer,
    DishesDeleteReducer,
    DishesDetailReducer,
    DishesUpdateReducer,
} from './dishes';

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

    AreasAll: AreasAllReducer,
    AreasCreate: AreasCreateReducer,
    AreasDelete: AreasDeleteReducer,
    AreasDetail: AreasDetailReducer,
    AreasUpdate: AreasUpdateReducer,

    UserAll: UserAllReducer,
    UserCreate: UserCreateReducer,
    UserDelete: UserDeleteReducer,
    UserDetail: UserDetailReducer,
    UserUpdate: UserUpdateReducer,

    CategoryAll: CategoryAllReducer,
    CategoryCreate: CategoryCreateReducer,
    CategoryDelete: CategoryDeleteReducer,
    CategoryDetail: CategoryDetailReducer,
    CategoryUpdate: CategoryUpdateReducer,

    DishesAll: DishesAllReducer,
    DishesCreate: DishesCreateReducer,
    DishesDelete: DishesDeleteReducer,
    DishesDetail: DishesDetailReducer,
    DishesUpdate: DishesUpdateReducer,
});
