export type Products = {
    id: string;
    name: string;
    color: string;
    img: string;
    price: number;
    size: Array<string>;
    count?: number;
    date?: any;
    list?: ListItem[];
    status?: string;
}

export interface ProductContext {
    state: IProduct;
    dispatch: ({type}: {type:string}) => void;
}

export type IProduct = {
    productList: Products[];
    newProductList: Products[];
}

export type CartList = Products[];
export type OrderList = Products[];

export type ListItem = {
    color: string;
    size: string;
    count: number;
    name: string;
}


interface IGetProducts {
    type: 'GET_PRODUCTS';
    productList: Products[];
}

interface IGetNewProducts {
    type: 'GET_NEWEST_PRODUCTS';
    newProductList: Products[];
}

export type ProductsAction = IGetProducts | IGetNewProducts;

//
export type Props = {
    children: React.ReactNode;
}

export interface IContext {
    state: IState;
    dispatch: any;
    currentUser: string;
    contextHolder: React.ReactNode;
    openNotification: (placement:string) => void;
    removeCurrentUser: () => void;
    uid: string;
}

export type IState = {
    authMessage: string;
    user: string;
}

interface ILoginSuccess {
    type: 'LOGIN_SUCCESS';
    payload: IState;
}

interface ILoginError {
    type: 'LOGIN_ERROR';
    payload: IState;
}

interface ISignUpSuccess {
    type: 'SIGNUP_SUCCESS';
    payload: IState;
}

interface ISignUpError {
    type: 'SIGNUP_ERROR';
    payload: IState;
}

interface IGoogleLoginSuccess {
    type: 'GOOGLE_LOGIN_SUCCESS';
    payload: IState;
}

interface IGoogleLoginError {
    type: 'GOOGLE_LOGIN_ERROR';
    payload: IState;
}

interface ILogOutSuccess {
    type: 'LOGOUT_SUCCESS';
    payload: IState;
}

export type AuthActions = ILoginSuccess | ILoginError | ISignUpSuccess | ISignUpError | IGoogleLoginSuccess | IGoogleLoginError | ILogOutSuccess;
