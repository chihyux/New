import React, { useContext, useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import firebase from '../../config/config'
import { Auth } from '../../contexts/authContext'
import { GoogleBtn, AuthWrapper, AuthBtn } from './Styled'
import { SVG } from './googleBtn'
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

// google login btn with css but cannot connect reducer
// import { uiConfig } from '../../config/uiConfig'
// import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

const LogIn:React.FC = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [routeRedirect, setRouteRedirect] = useState(false)
    const {state, dispatch, openNotification, contextHolder, currentUser} = useContext(Auth)

    if(currentUser !== '') return <Redirect to="/" />
    if(routeRedirect) return <Redirect to='/' />

    const fetchLogin = async(email:string, password:string) => {
        // const user = await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
        // .then(()=> {
        //     console.log('fetching...')
        //     return firebase.auth().signInWithEmailAndPassword(email,password)
        // })
         const user = firebase.auth().signInWithEmailAndPassword(email,password)
        .catch(err => {
        openNotification('Login')
        return dispatch({
            type: 'LOGIN_ERROR',
            payload: err.message
        })
        })
        return user
    }

    const login = async() => {
        // e.preventDefault()
        setEmail('')
        setPassword('')
        console.log('form sent')
        let res = await fetchLogin(email,password)
        if(res) {
            setRouteRedirect(true)
            openNotification('Login')
            return dispatch({
            type: 'LOGIN_SUCCESS',
            payload: res.user.email
        })
        } 
    }

    const googleLogin = (e?:any) => {
        e.preventDefault()
        const provider = new firebase.auth.GoogleAuthProvider()
        firebase.auth().useDeviceLanguage()
        firebase.auth().signInWithPopup(provider).then((result)=> {
            console.log('this result',result)
            if(result.user)
            dispatch({ 
                type: 'GOOGLE_LOGIN_SUCCESS',
                payload: result.user.email
            })
            openNotification('Login')
        }).catch( err => {
            const errorMessage = err.message;
            dispatch({ 
            type: 'GOOGLE_LOGIN_ERROR',
            payload: errorMessage
        })
        })
        

    }

    return (
        <AuthWrapper>
            {contextHolder}
            <h5>登入帳號</h5>
            <Form
                name='login-form'
                className="login-form"
                onFinish={login}
                >
            <Form.Item
                label='email'
            >
                <label htmlFor='email'></label>
                <Input prefix={<UserOutlined className="site-form-item-icon" />} 
                       placeholder="Email" 
                       type='email' id='email' value={email}
                       onChange={(e)=> setEmail(e.target.value)} required/>
            </Form.Item>
            <Form.Item
                label='password'
            >
                <label htmlFor='password'></label>
                <Input prefix={<LockOutlined className="site-form-item-icon"/>}
                        type='password' id='password' value={password}
                        onChange={(e)=> setPassword(e.target.value)}
                        placeholder="Password" required/>
            </Form.Item>
            <AuthBtn>
                <Button type="primary" htmlType="submit" className="login-form-button">登入</Button>
                <Button><Link to='/signUp'>註冊</Link></Button>
                <GoogleBtn onClick={googleLogin}>
                    <span className='google-button__icon'>
                        <SVG />
                    </span>
                    <span className='google-button__text'>Sign in with Google</span>
                    </GoogleBtn>
                    {/* google login btn with css but cannot connect reducer
                    <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/> */}
            </AuthBtn>
            </Form>
        </AuthWrapper>
    )
}

export default LogIn
