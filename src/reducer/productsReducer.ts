import { IProduct, ProductsAction, Products } from '../types/store'

export const firebaseProducts = (state: IProduct, action: ProductsAction ) => {
    switch(action.type) {
        case 'GET_PRODUCTS':
            console.log(action);
            return {...state, productList: action.productList as Products[] }

        case 'GET_NEWEST_PRODUCTS':
            console.log(action);
            return {...state, newProductList: action.newProductList as Products[] }
            
        // case 'CART_ADD':
        //     console.log(action);
        //     return {...state, orderList: new Set([...Array.from(state.orderList), action.orderList]) }

        // case 'CART_REMOVE':
        //     console.log(action);
        //     return {...state, orderList: new Set([...Array.from(state.orderList), action.orderList]) }

        default:
            return state;
    }
}