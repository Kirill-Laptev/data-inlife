import { combineReducers, createStore, applyMiddleware } from "redux"
import { productsReducer } from "./products-reducer/products-reducer"
import thunkMiddleware from 'redux-thunk'

const rootReducer = combineReducers({
    products: productsReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export type AppRootStateType = ReturnType<typeof rootReducer>

//@ts-ignore
window.store = store