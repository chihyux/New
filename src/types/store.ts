export type AuthMessage = {
    authMessage: string | null;
}

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

export interface AuthContext {
    user?: any;
    authMessage?: string | null;
    dispatch?: any;
    state?: any;
}
