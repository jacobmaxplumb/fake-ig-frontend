import { applyMiddleware, combineReducers, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"

const initialState = {
    title: 'Fake Instagram'
}

const sharedReducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state
    }
}

const reducers = combineReducers({
    app: sharedReducer
})

export const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));