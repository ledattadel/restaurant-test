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
    GetAreasAll: async (params = {}) => {
        const options = {
            params,
            baseURL: httpRequest.baseUrl,
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + getToken(),
            },
        };

        let response = await httpRequest.get(`/api/areas`, options);
        return response;
    },

    GetAreasDetail: async (id) => {
        let response = await httpRequest.get(`/api/areas/${id}`, config);
        return response;
    },
    CreateAreas: async (areas) => {
        console.log('config', config);
        let response = await httpRequest.post(`/api/areas/`, areas, config);

        return response;
    },
    DeleteAreas: async (id) => {
        let response = await httpRequest.delete(`/api/areas/${id}`, config);
        return response;
    },
    UpdateAreas: async (id, areas) => {
        let response = await httpRequest.put(`/api/areas/${id}`, areas, config);
        return response;
    },
};

export default fetch;
