import { IState, Actions } from '../types/store'

export const firebaseAuth = (state: IState, action: any) => {
    switch(action.type) {
        case 'LOGIN_ERROR':
            console.log(action);
            return {...state, authMessage: action.payload }

        case 'LOGIN_SUCCESS':
            console.log('login success');
            console.log(action);
            return {...state, user: action.payload, authMessage: '歡迎回來' }

        case 'LOGOUT_SUCCESS':
            console.log(action);
            return {...state, user: action.payload, authMessage: '已成功登出' }

        case 'SIGNUP_ERROR':
            console.log('signup error');
            console.log(action);
            return {...state, authMessage: action.payload }

        case 'SIGNUP_SUCCESS':
            console.log('signup success');
            console.log(action);
            return {...state, user: action.payload, authMessage: '註冊成功'}

        case 'GOOGLE_LOGIN_SUCCESS':
            console.log(action);
            return {...state, user: action.payload, authMessage: '歡迎回來' }

        case 'GOOGLE_LOGIN_ERROR':
            console.log(action);
            return {...state, authMessage: action.payload }
            
        default:
            return state;
    }
}

