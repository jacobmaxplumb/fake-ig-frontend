import axios from "axios"

export const axiosWithHeaders = () => {
    if (!!localStorage.getItem('token')) {
        return axios.create({headers: {Authorization: localStorage.getItem('token')}});
    }
    return axios.create();
}