import { createStore, combineReducers } from "redux"
// import bookReducer from "./reducers/bookReducer"
import { composeWithDevTools } from 'redux-devtools-extension';
import bookReducer from "./reducers/bookReduser";


const combineReducer = combineReducers({
    books : bookReducer,
    // user : userReducer, 
})

export const store  = createStore(combineReducer, composeWithDevTools())