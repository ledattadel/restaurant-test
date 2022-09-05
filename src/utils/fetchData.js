import * as React from 'react';
import axios from 'axios';

export const httpRequest = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});
const getToken = () => {
    return '' || localStorage.getItem('token');
};

export const getWithParams = async ({ path = '', params = {} }) => {
    const options = {
        params,
        baseURL: httpRequest.baseUrl,
        withCredentials: false,
        headers: { Authorization: 'Bearer ' + getToken() },
    };
    let response = await httpRequest.get(`/api/${path}`, options);
    return response;
};

export const deleteWithParams = async ({ path = '', params = {} }) => {
    const options = {
        params,
        method: 'DELETE',
        baseURL: httpRequest.baseUrl,
        withCredentials: false,
        headers: { Authorization: 'Bearer ' + getToken() },
    };
    let response = await httpRequest.delete(`/api/${path}`, options);
    return response;
};

export const putDataAPI = async (url, post) => {
    console.log('path', url);
    console.log('params', post);
    const res = await httpRequest.put(`/api/${url}`, post, {
        headers: { Authorization: 'Bearer ' + getToken() },
    });
    console.log('res', res);
    return res;
};

export const postDataAPI = async (url, post) => {
    console.log('path', url);
    console.log('params', post);
    const res = await httpRequest.post(`/api/${url}`, post, {
        headers: { Authorization: 'Bearer ' + getToken() },
    });
    console.log('res', res);
    return res;
};

export const getDataAPI = async (url, token) => {
    const res = await httpRequest.get(`/api/${url}`, {
        headers: { Authorization: token },
    });
    return res;
};

// export const postDataAPI = async (url, post, token) => {
//     const res = await httpRequest.post(`/api/${url}`, post, {
//         headers: { Authorization: token },
//     });
//     console.log(res);
//     return res;
// };

export const patchDataAPI = async (url, post, token) => {
    const res = await httpRequest.patch(`/api/${url}`, post, {
        headers: { Authorization: token },
    });
    return res;
};

export const deleteDataAPI = async (url, token) => {
    const res = await httpRequest.delete(`/api/${url}`, {
        headers: { Authorization: token },
    });
    return res;
};
