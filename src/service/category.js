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
    GetCategoryAll: async (params = {}) => {
        const options = {
            params,
            baseURL: httpRequest.baseUrl,
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + getToken(),
            },
        };

        let response = await httpRequest.get(`/api/menus`, options);
        return response;
    },

    GetCategoryDetail: async (id) => {
        let response = await httpRequest.get(`/api/menus/${id}`, config);
        return response;
    },
    CreateCategory: async (menus) => {
        console.log('config', config);
        let response = await httpRequest.post(`/api/menus/`, menus, configFile);
        return response;
    },
    DeleteCategory: async (id) => {
        let response = await httpRequest.delete(`/api/menus/${id}`, config);
        return response;
    },
    UpdateCategory: async (id, menus) => {
        let response = await httpRequest.put(`/api/menus/${id}`, menus, configFile);
        return response;
    },
};

export default fetch;
