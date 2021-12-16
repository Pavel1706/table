import {applyMiddleware, combineReducers, createStore} from "redux";
import { usersReducer} from "./reducer";
import thunk from "redux-thunk";


const rootReducer = combineReducers({
    users: usersReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, applyMiddleware(thunk))