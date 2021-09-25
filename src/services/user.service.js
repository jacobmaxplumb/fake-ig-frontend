import axios from 'axios';

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