import { IState } from '../types/store'

export const firebaseAuth = (state: IState, action: any) => {
    switch(action.type) {
        case 'LOGIN_ERROR':
            return {...state, authMessage: action.payload }

        case 'LOGIN_SUCCESS':
            return {...state, user: action.payload, authMessage: '歡迎回來' }

        case 'LOGOUT_SUCCESS':
            return {...state, user: action.payload, authMessage: '已成功登出' }

        case 'SIGNUP_ERROR':
            return {...state, authMessage: action.payload }

        case 'SIGNUP_SUCCESS':
            return {...state, user: action.payload, authMessage: '註冊成功'}

        case 'GOOGLE_LOGIN_SUCCESS':
            return {...state, user: action.payload, authMessage: '歡迎回來' }

        case 'GOOGLE_LOGIN_ERROR':
            return {...state, authMessage: action.payload }
            
        default:
            return state;
    }
}

