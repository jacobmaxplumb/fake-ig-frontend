import { GET_USER_DATA_SUCCESS, UPDATE_AGE, UPDATE_NAME } from "../actions/user.actions"

const initalState = {
    fullName: null,
    age: null,
    signedUp: null
}

export const userReducer = (state = initalState, action) => {
    switch(action.type) {
        case GET_USER_DATA_SUCCESS:
            return {...state, ...action.userData}
        case UPDATE_NAME:
            return {...state, fullName: action.name}
        case UPDATE_AGE:
            return {...state, age: action.age}
        default:
            return state
    }
}