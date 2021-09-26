import { applyMiddleware, combineReducers, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import { USER_UPDATED } from "../actions/shared.actions"

const initialState = {
    title: 'Fake Instagram',
    userUpdate: 0
}

const sharedReducer = (state = initialState, action) => {
    switch(action.type) {
        case USER_UPDATED:
            return {...state, userUpdate: state.userUpdate + 1}
        default:
            return state
    }
}

const reducers = combineReducers({
    app: sharedReducer
})

export const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));