import React, { createContext, useState, useReducer, useEffect } from 'react'
import { firebaseAuth } from '../reducer/authReducer'
import { IContext, IState } from '../types/store'
import firebase from '../config/config'
import { notification } from 'antd'

export const Auth = createContext({} as IContext)

const initialState: IState = {
    user: '',
    authMessage: ''
}

export const AuthProvider: React.FC<{}> = ({ children }) => {
    const [state, dispatch] = useReducer(firebaseAuth, initialState)
    const [api, contextHolder] = notification.useNotification();
    const [currentUser, setCurrentUser] = useState<string>('')
    const [uid, setUid] = useState<string>('')

    useEffect(() => {
        findCurrentUser()
    }, [uid])

    const findCurrentUser = () => {
        firebase.auth().onAuthStateChanged((user: any) => {
            if (user) {
                setCurrentUser(user.email)
                setUid(user.uid)
            }
        });
    }

    const removeCurrentUser = () => {
        setCurrentUser('')
    }

    const des = (
        <Auth.Consumer>
            {({ state }) => `${state.authMessage}`}
        </Auth.Consumer>
    )

    const openNotification = (placement: string) => {
        api.info({
            message: `Notification ${placement}`,
            description: des
        });
    };

    const value = { state, dispatch, openNotification, contextHolder, currentUser, removeCurrentUser, uid }
    return (
        <Auth.Provider value={value as IContext}>
            {children}
        </Auth.Provider>
    )
}
