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
const fetch = {
    GetTableAll: async (params = {}) => {
        const options = {
            params,
            baseURL: httpRequest.baseUrl,
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + getToken(),
            },
        };

        let response = await httpRequest.get(`/api/Table`, options);
        return response;
    },

    GetTableDetail: async (id) => {
        let response = await httpRequest.get(`/api/Table/${id}`, config);
        return response;
    },
    CreateTable: async (Table) => {
        console.log('config', config);
        let response = await httpRequest.post(`/api/Table/`, Table, config);

        return response;
    },
    DeleteTable: async (id) => {
        let response = await httpRequest.delete(`/api/Table/${id}`, config);
        return response;
    },
    UpdateTable: async (id, Table) => {
        let response = await httpRequest.put(`/api/Table/${id}`, Table, config);
        return response;
    },
};

export default fetch;
