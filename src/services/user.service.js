import axios from '../interceptors/axios.interceptor';
import { auth } from './firebase.service';

export const getUserData = () => {
    const uid = localStorage.getItem('uid');
    return axios.get(`http://localhost:3000/users/${uid}`).then(result => {
        return result.data
    })
}

export const updateUserData = (userData) => {
    const uid = localStorage.getItem('uid');
    return axios.put(`http://localhost:3000/users/${uid}`, userData);
}

export const getUsersPosts = () => {
    const uid = auth.currentUser.uid;
    return axios.get(`http://localhost:8080/api/users/${uid}/friends/posts`).then(res => res.data);
}