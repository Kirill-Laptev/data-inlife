import { ProductsActionsType } from './actions';
import { ResponseType, CategoryType } from './../../api/products-api';

const initialState: InitialStateType = []

export const productsReducer = (state: InitialStateType = initialState, action: ProductsActionsType) => {
    switch(action.type){
        case 'SET_PRODUCTS': 
            return [...state, ...action.payload.data]
    
        case 'UPDATE_GOOD_COUNT': 
            // const newData = state.map((categorie) => categorie.goods.map((good) => {
            //     if(good.gid === action.payload.id){
            //      return {...good, gstore: action.payload.count}
            //     } else{
            //         return good
            //     }
            // }))

            // return newData

            // const newData = state.map((categorie) => categorie.goods.map((good) => {
            //     if(good.gid === action.payload.id){
            //      return {...categorie, goods: categorie.goods.map((el) => ({...el, gstore: action.payload.count}))}
            //     } else{
            //         return categorie
            //     }
            // }))
            // debugger
            // return newData

            const currentCategory = state.findIndex((categorie) => categorie.rid === action.payload.categoryId)
            console.log(currentCategory)
            return currentCategory

        default:
            return state
    }
}


// types
type InitialStateType = ResponseType