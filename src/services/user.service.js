import { store } from "../reducer";
import axios from "./axios.service";

export const getUserData = () => {
    const uid = store.getState().user.uid;
    return axios.get(`http://localhost:8080/api/users/${uid}`).then(result => {
        return result.data;
    })
}

export const updateUserData = (userData) => {
    const uid = store.getState().user.uid;
    return axios.put(`http://localhost:8080/api/users/${uid}`, userData);
}

const handleChanges = () => {
    let previous = current;
    current = store.getState().app.userUpdate;
    if (current !== previous) {
        console.log(`previous: ${previous}, current: ${previous}`);
    }
}

export const userSubscription = () => {
    store.subscribe(handleChanges);
}