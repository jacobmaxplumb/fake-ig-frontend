import { getUserData } from "../services/user.service";

export const GET_USER_DATA_SUCCESS = '[User] Get User Data Success';
export const UPDATE_NAME = '[User] Update Name';
export const UPDATE_AGE = '[User] Update Age';

export const getUserDataAction = () => dispatch => {
    getUserData().then(result => {
        dispatch(getUserDataSuccessAction(result));
    })
}

export const updateNameAction = (name) => {
    return {type: UPDATE_NAME, name};
}

export const updateAgeAction = (age) => {
    return {type: UPDATE_AGE, age}
}

const getUserDataSuccessAction = (userData) => {
    return {type: GET_USER_DATA_SUCCESS, userData: userData};
}