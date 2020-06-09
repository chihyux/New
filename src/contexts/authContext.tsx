import React, { createContext, Context, useState, useReducer } from 'react'
import { firebaseAuth } from '../reducer/authReducer'
import { Products, AuthContext } from '../types/store'

const productList: Products[] = []
const orderList: Products[]  = []

const initialState: AuthContext = {
    user: {
        email: '',
        password: ''
    },
    authMessage: null
}

export const Auth: Context<AuthContext> = createContext<AuthContext>(
    initialState
)

export const AuthProvider:React.FC<{}> = ({ children }) => {
    const [state, dispatch] = useReducer(firebaseAuth, initialState)
    const value:any = { state, dispatch }
    
    return (
        <Auth.Provider value={value}>
            {children}
        </Auth.Provider>
    )
}
