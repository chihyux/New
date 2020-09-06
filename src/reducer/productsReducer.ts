import { IProduct, ProductsAction, Products } from '../types/store'

export const firebaseProducts = (state: IProduct, action: ProductsAction) => {
    switch (action.type) {
        case 'GET_PRODUCTS':
            return { ...state, productList: action.productList as Products[] }

        case 'GET_NEWEST_PRODUCTS':
            return { ...state, newProductList: action.newProductList as Products[] }

        default:
            return state;
    }
}