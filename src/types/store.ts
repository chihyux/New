export interface Products {
    id: string;
    name: string;
    color: string;
    img: string;
    price: number;
}

type InitialPType = {
    products: Products[];
}

export interface ProductContext {
    productList: Products[];
    orderList: Products[];
}

// export interface AuthContext {
//     user?: any;
//     authMessage?: string | null;
//     dispatch?: any;
//     state?: any;
//     currentUser?: any;
// }

//
type Props = {
    children: React.ReactNode
}

export interface IContext {
    state: IState;
    // dispatch?: ({type}: {type:string}) => void;
    dispatch: any;
    // currentUser: string;
    contextHolder: React.ReactNode;
    openNotification: (placement:string) => void;
    // findCurrentUser: () => void;
    // rmC: () => void;
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


