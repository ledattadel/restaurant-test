export const GET_ALL_DISHES = 'DISH/GET_ALL';
export const GET_ALL_DISHES_ERROR = 'DISH/GET_ALL_ERROR';

export const UPLOAD_IMAGE_SUCCESS = 'DISH/UPLOAD_IMAGE_SUCCESS';
export const UPLOAD_IMAGE_ERROR = 'DISH/UPLOAD_IMAGE_ERROR';

export const DELETE_IMAGE_SUCCESS = 'DISH/DELETE_IMAGE_SUCCESS';
export const DELETE_IMAGE_ERROR = 'DISH/DELETE_IMAGE_ERROR';

export const CREATE_DISH = 'DISH/CREATE_DISH';
export const CREATE_DISH_ERROR = 'DISH/CREATE_DISH_ERROR';
export const CREATE_DISH_SUCCESS = 'DISH/CREATE_SUCCESS';

export const DELETE_DISH_ERROR = 'DISH/DELETE_DISH_ERROR';
export const DELETE_DISH_SUCCESS = 'DISH/DELETE_SUCCESS';

export const UPDATE_DISH_ERROR = 'DISH/UPDATE_DISH_ERROR';
export const UPDATE_DISH_SUCCESS = 'DISH/UPDATE_SUCCESS';

export const EDIT_DISH = 'DISH/EDIT_DISH';
export const INIT_DISH = 'DISH/INIT_DISH';

export const SEARCH_DISHES = 'DISH/SEARCH';
export const SEARCH_DISHES_SUCCESS = 'DISH/SEARCH_DISHES_SUCCESS';
export const SEARCH_DISHES_ERROR = 'DISH/SEARCH_DISHES_ERROR';

export const FETCH_STORE_MENU = 'DISH/FETCH_STORE_MENU';
export const FETCH_STORE_MENU_ERROR = 'DISH/FETCH_STORE_MENU_ERROR';

const INITIAL_STATE = {
    dishes: [],
    deletedDish: null,
};

export default (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case GET_ALL_DISHES:
        case SEARCH_DISHES_SUCCESS:
            return {
                ...state,
                dishes: payload || [],
            };
        case DELETE_DISH_SUCCESS: {
            const dishes = state.dishes.filter((d) => d.id !== payload);
            return {
                ...state,
                dishes,
            };
        }
        case CREATE_DISH_SUCCESS:
            state.dishes.push(payload);
            return {
                ...state,
            };
        case UPDATE_DISH_SUCCESS:
            let dishIndex = state.dishes.findIndex((dish) => dish.id === payload.id);
            if (dishIndex > -1) state.dishes[dishIndex] = payload;
            return {
                ...state,
            };
        case UPLOAD_IMAGE_SUCCESS:
            return {
                ...state,
                uploadedImage: payload,
            };
        case EDIT_DISH:
            return {
                ...state,
                editDish: true,
                initialFormValues: {
                    ...payload,
                },
            };
        case INIT_DISH:
            return {
                ...state,
                initialFormValues: {},
            };

        default:
            return state;
    }
};
