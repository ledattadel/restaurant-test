import axios from 'axios';
export const httpRequest = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});
const getToken = () => {
    return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEyMywiY29tcGFueUlkIjoxMzcsImlhdCI6MTY2NDc5NDg1NiwiZXhwIjoxNjY1Mzk5NjU2fQ.ieTvkgTAEjZGq3an0oKweB2lxM5ShmAP_9QIYFTSMDQ';
};
const config = {
    baseURL: httpRequest.baseUrl,
    headers: {
        'Content-Type': 'application/json',
        authorization: 'Bearer ' + getToken(),
    },
};
const configFile = {
    baseURL: httpRequest.baseUrl,
    headers: {
        'Content-Type': 'multipart/form-data',
        authorization: 'Bearer ' + getToken(),
    },
};
const fetch = {
    GetDishesAll: async (params = {}) => {
        const options = {
            params,
            baseURL: httpRequest.baseUrl,
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + getToken(),
            },
        };

        let response = await httpRequest.get(`/api/dishes`, options);
        return response;
    },

    GetDishesDetail: async (id) => {
        let response = await httpRequest.get(`/api/dishes/${id}`, config);
        return response;
    },
    CreateDishes: async (dishes) => {
        console.log('config when add dish', dishes);
        let response = await httpRequest.post(`/api/dishes/`, dishes, configFile);

        return response;
    },
    DeleteDishes: async (id) => {
        let response = await httpRequest.delete(`/api/dishes/${id}`, config);
        return response;
    },
    UpdateDishes: async (id, dishes) => {
        let response = await httpRequest.put(`/api/dishes/${id}`, dishes, configFile);
        return response;
    },
};

export default fetch;
