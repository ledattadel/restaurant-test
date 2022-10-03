import axios from 'axios';
export const httpRequest = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});
const getToken = () => {
    return '' || localStorage.getItem('token');
};
const config = {
    baseURL: httpRequest.baseUrl,
    headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + getToken(),
    },
};
const fetch = {
    GetCustomerALL: async (params = {}) => {
        const options = {
            params,
            baseURL: httpRequest.baseUrl,
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + getToken(),
            },
        };
        let response = await httpRequest.get(
            `/api/customers`,
            options,
        );
        return response;
    },
    GetCustomerDetail: async (id) => {
        let response = await httpRequest.get(`/api/customers/${id}`, config);
        return response;
    },
    CreateCustomer: async (customer) => {
        let response = await httpRequest.post(`/api/customers/`, customer, config);
        return response;
    },
    DeleteCustomer: async (id) => {
        let response = await httpRequest.delete(`/api/customers/${id}`, config);
        return response;
    },
    UpdateCustomer: async (id, customer) => {
        let response = await httpRequest.put(`/api/customers/${id}`, customer, config);
        return response;
    },
};

export default fetch;
