import { combineReducers, createStore } from "redux"

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

export const store = createStore(reducers);