export type Products = {
    id: string;
    name: string;
    color: string;
    img: string;
    price: number;
    size: Array<string>;
}

export interface ProductContext {
    state: IProduct;
    dispatch: any;
}

export type IProduct = {
    productList: Products[];
    newProductList: Products[];
    // orderList: Set<any>;
}

interface IGetProducts {
    type: 'GET_PRODUCTS';
    productList: Products[];
}

interface IGetNewProducts {
    type: 'GET_NEWEST_PRODUCTS';
    newProductList: Products[];
}

// interface ICartAdd {
//     type: 'CART_ADD';
//     orderList: Set<string>;
//     // orderList: OrderList;
// }

export type ProductsAction = IGetProducts | IGetNewProducts;

//
export type Props = {
    children: React.ReactNode;
}

export interface IContext {
    state: IState;
    // dispatch?: ({type}: {type:string}) => void;
    dispatch: any;
    currentUser: string;
    contextHolder: React.ReactNode;
    openNotification: (placement:string) => void;
    removeCurrentUser: () => void;
    uid: string;
}

export type IState = {
    authMessage: string | null;
    user: string | null;
}

interface ILoginSuccess {
    type: 'LOGIN_SUCCESS';
    value: any;
}

interface ILoginError {
    type: 'LOGIN_ERROR';
    value: any;
}

interface ISignUpSuccess {
    type: 'SIGNUP_SUCCESS';
    value: any;
}

interface ISignUpError {
    type: 'SIGNUP_ERROR';
    value: any;
}

interface IGLS {
    type: 'GOOGLE_LOGIN_SUCCESS';
    value: any;
}

interface IGLE {
    type: 'GOOGLE_LOGIN_ERROR';
    value: any;
}

interface ILogOutSuccess {
    type: 'LOGOUT_SUCCESS';
    value: any;
}

export type Actions = ILoginSuccess | ILoginError | ISignUpSuccess | ISignUpError | IGLS | IGLE | ILogOutSuccess;


