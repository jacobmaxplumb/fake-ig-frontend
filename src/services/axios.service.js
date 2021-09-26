import axios from 'axios';
import { auth } from './firebase.service';

const customAxios = axios.create({});

const requestHandler = request => {
    if (auth.currentUser) {
        request.headers.Authorization = `Bearer ${auth.currentUser.accessToken}`;
    }
    return request;
};

const responseHandler = response => {
    if (response.status === 401) {
        window.location = '/login';
    }

    return response;
};

const errorHandler = error => {
    return Promise.reject(error);
};

customAxios.interceptors.request.use(
    (request) => requestHandler(request),
    (error) => errorHandler(error)
);

customAxios.interceptors.response.use(
    (response) => responseHandler(response),
    (error) => errorHandler(error)
 );

 export default customAxios;