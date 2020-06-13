import React, { createContext, Context, useState, useReducer, useEffect } from 'react'
import { firebaseAuth } from '../reducer/authReducer'
import { Products, IContext, IState } from '../types/store'
import firebase from '../config/config'
import { notification } from 'antd';

const productList: Products[] = []
const orderList: Products[]  = []

export const Auth = createContext({} as IContext)

const initialState:IState = {
    user: null,
    authMessage: null
}

export const AuthProvider:React.FC<{}> = ({ children }) => {
    const [state, dispatch] = useReducer(firebaseAuth, initialState)
    const [api, contextHolder] = notification.useNotification();

    const [currentUser, setCurrentUser] = useState<string>('')
    
    useEffect(() => {
        console.log('update')
        findCurrentUser()
    }, [])

    const findCurrentUser = () => {
        firebase.auth().onAuthStateChanged(function(user:any) {
            if(user) {
               setCurrentUser(user.email) 
            }
        });
    }

    const rmC = () => {
        setCurrentUser('')
    }

    const des = (
        <Auth.Consumer>
            {({ state }) => `${state.authMessage}`}
        </Auth.Consumer>
    )

    const openNotification = (placement:string) => {
      api.info({
        message: `Notification ${placement}`,
        description: des
      });
    };

    const value = { state, dispatch, openNotification, contextHolder, currentUser,rmC}
    return (
        <Auth.Provider value={value}>
            {children}
        </Auth.Provider>
    )
}
