import axios from 'axios';
import { axiosWithHeaders } from './axios.interceptor';

export const getUserData = () => {
    const uid = localStorage.getItem('uid');
    return axiosWithHeaders().get(`http://localhost:8080/api/users/${uid}`).then(result => {
        return result.data
    })
}

export const updateUserData = (userData) => {
    const uid = localStorage.getItem('uid');
    return axiosWithHeaders().put(`http://localhost:8080/api/users/${uid}`, userData);
}