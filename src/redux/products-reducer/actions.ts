import { AppRootStateType } from './../store';
import { ResponseType, productsAPI } from './../../api/products-api'
import { ThunkDispatch, ThunkAction } from 'redux-thunk'

export const setProductsAC = (data: ResponseType) => ({type: 'SET_PRODUCTS', payload: {data}} as const)
export const updateGoodCountAC = (count: number, categoryId: string, goodId: string) => ({type: 'UPDATE_GOOD_COUNT', payload: {count, categoryId, goodId}} as const)

export const fetchProductsTC = (): ThunkType => {
    return async (dispatch: DispatchType) => {
        try{
            await productsAPI.getProducts()
            .then(({data}) => dispatch(setProductsAC(data)))
        } catch(e){
            throw new Error(e)
        }
    }
}


// types
type FetchProductsActionType = ReturnType<typeof setProductsAC>
type UpdateGoodCountActionType = ReturnType<typeof updateGoodCountAC>

export type ProductsActionsType = 
| FetchProductsActionType
| UpdateGoodCountActionType

type DispatchType = ThunkDispatch<AppRootStateType, unknown, ProductsActionsType>
type ThunkType = ThunkAction<void, AppRootStateType, unknown, ProductsActionsType>
