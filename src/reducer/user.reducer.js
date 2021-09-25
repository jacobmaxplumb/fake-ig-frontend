import { GET_USER_DATA_SUCCESS, UPDATE_AGE, UPDATE_NAME } from "../actions/user.actions"

const initalState = {
    fullName: null,
    age: null,
    signedUp: null,
    isUpdating: false
}

export const userReducer = (state = initalState, action) => {
    switch(action.type) {
        case GET_USER_DATA_SUCCESS:
            return {...state, ...action.userData, isUpdating: false}
        case UPDATE_NAME:
            return {...state, fullName: action.name, isUpdating: true}
        case UPDATE_AGE:

            return {...state, age: action.age, isUpdating: true}
        default:
            return state
    }
}