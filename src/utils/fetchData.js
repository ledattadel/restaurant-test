import axios from 'axios';

export const httpRequest = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

const getToken = () => {
    return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEyMywiY29tcGFueUlkIjoxMzcsImlhdCI6MTY2NDcwNjg1NywiZXhwIjoxNjY0NzkzMjU3fQ.goyKv2I6nG6hU_-VYPdDrUW5mShEHjbFpk2SVSFP51E';
};

export const getImage = async (path, img) => {
    let api = `https://api-fnb.pvssolution.com/fnb-api/api/media/${path}/${img}`;
    return api;
};

export const getWithParams = async ({ path = '', params = {} }) => {
    const options = {
        params,
        baseURL: httpRequest.baseUrl,
        withCredentials: true,
        mode: 'cors',
        headers: { 'Access-Control-Allow-Origin': '*', authorization: 'Bearer ' + getToken() },
    };
    let response = await httpRequest.get(`/api/${path}`, options);
    return response;
};

export const getNoneParams = async ({ path = '' }) => {
    const options = {
        baseURL: httpRequest.baseUrl,
        withCredentials: true,
        mode: 'cors',
        headers: { 'Access-Control-Allow-Origin': '*', authorization: 'Bearer ' + getToken() },
    };
    let response = await httpRequest.get(`/api/${path}`, options);
    return response;
};

export const deleteWithParamsId = async ({ path = '', params = {} }, id) => {
    const options = {
        params,
        method: 'DELETE',
        baseURL: httpRequest.baseUrl,
        withCredentials: false,
        headers: { 'Access-Control-Allow-Origin': '*', authorization: 'Bearer ' + getToken() },
    };
    let response = await httpRequest.delete(`/api/${path}/${id}?`, options);
    return response;
};

export const putWithParamsId = async ({ path = '', params = {} }, id) => {
    const options = {
        params,
        method: 'PUT',
        baseURL: httpRequest.baseUrl,
        withCredentials: false,
        headers: { 'Access-Control-Allow-Origin': '*', authorization: 'Bearer ' + getToken() },
    };
    let response = await httpRequest.put(`/api/${path}/${id}?`, options);
    return response;
};

export const putWithParamsIdAndFile = async ({ path = '', params = {} }, id) => {
    const options = {
        params,
        method: 'PUT',
        baseURL: httpRequest.baseUrl,
        withCredentials: false,
        headers: {
            'Content-Type': 'multipart/form-data',
            authorization: 'Bearer ' + getToken(),
        },
    };
    let response = await httpRequest.put(`/api/${path}/${id}?`, options);
    return response;
};

export const putDataAPI = async (url, post) => {
    console.log('path', url);
    console.log('params', post);
    const res = await httpRequest.put(`/api/${url}`, post, {
        headers: { 'Access-Control-Allow-Origin': '*', authorization: 'Bearer ' + getToken() },
    });
    console.log('res', res);
    return res;
};

export const postDataAPI = async (url, post) => {
    console.log('path', url);
    console.log('params', post);
    const res = await httpRequest.post(`/api/${url}`, post, {
        headers: { 'Access-Control-Allow-Origin': '*', authorization: 'Bearer ' + getToken() },
    });
    console.log('res', res);
    return res;
};
export const postDataAPIWithFile = async (url, post) => {
    console.log('path', url);
    console.log('params', post);
    const res = await httpRequest.post(`/api/${url}`, post, {
        headers: { 'Content-Type': 'multipart/form-data', authorization: 'Bearer ' + getToken() },
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
