import axios from "./axios.service"; 
import env from 'react-dotenv';

export const getFriendsPosts = (uid) => {
    return axios.get(`${env.API_ENDPOINT}users/${uid}/friends/posts`).then(result => {
        return result.data;
    })
}