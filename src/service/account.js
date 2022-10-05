import axios from 'axios';
export const httpRequest = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});
const getToken = () => {
    return (
        localStorage.getItem('token') ||
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEyMywiY29tcGFueUlkIjoxMzcsImlhdCI6MTY2NDc5NDg1NiwiZXhwIjoxNjY1Mzk5NjU2fQ.ieTvkgTAEjZGq3an0oKweB2lxM5ShmAP_9QIYFTSMDQ'
    );
};
const config = {
    baseURL: httpRequest.baseUrl,
    headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + getToken(),
    },
};
const fetch = {
    GetUserALL: async (params = {}) => {
        const options = {
            params,
            baseURL: httpRequest.baseUrl,
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + getToken(),
            },
        };
        let response = await httpRequest.get(`/api/users`, options);
        return response;
    },
    GetUserDetail: async (id) => {
        let response = await httpRequest.get(`/api/users/${id}`, config);
        return response;
    },
    CreateUser: async (users) => {
        let response = await httpRequest.post(`/api/users/`, users, config);
        return response;
    },
    DeleteUser: async (id) => {
        let response = await httpRequest.delete(`/api/users/${id}`, config);
        return response;
    },
    UpdateUser: async (id, users) => {
        let response = await httpRequest.put(`/api/users/${id}`, users, config);
        return response;
    },
};

export default fetch;
