import React, { useContext, useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import firebase from '../../config/config'
import { Auth } from '../../contexts/authContext'

const LogIn:React.FC = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [routeRedirect, setRouteRedirect] = useState(false)

    const {state, dispatch} = useContext(Auth)

    console.log(state)
    const fetchLogin = async(email:string, password:string) => {
        const user = await firebase.auth().signInWithEmailAndPassword(email,password)
        .catch(err => {
        console.log('fetch err',err.message)
        return dispatch({
            type: 'LOGIN_ERROR',
            payload: err.message
        })
        })
        return user
    }

    const login = async(e?:any) => {
        e.preventDefault()
        setEmail('')
        setPassword('')
        console.log('form sent')
        let res = await fetchLogin(email,password)
        if(res) {
            setRouteRedirect(true)
            return dispatch({
            type: 'LOGIN_SUCCESS',
            payload: res.user
        })
        } 
    }

    const googleLogin = (e?:any) => {
        e.preventDefault()
        const provider = new firebase.auth.GoogleAuthProvider()
        firebase.auth().useDeviceLanguage()
        firebase.auth().signInWithPopup(provider).then((result)=> {
            console.log('this result',result)
            dispatch({ 
                type: 'GOOGLE_LOGIN_SUCCESS',
                payload: result.user
            })
        }).catch( err => {
            const errorMessage = err.message;
            dispatch({ 
            type: 'GOOGLE_LOGIN_ERROR',
            payload: errorMessage
        })
        })
        

    }

    const redirect = routeRedirect;
    if(redirect) {
        return <Redirect to='/' />
    }

    return (
        <div>
            <form onSubmit={login}>
                <h5>登入帳號</h5>
                <div>
                    <label htmlFor='email'>信箱</label>
                    <input type='email' id='email'
                           onChange={(e)=> setEmail(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor='email'>密碼</label>
                    <input type='password' id='password'
                           onChange={(e)=> setPassword(e.target.value)}/>
                </div>
                <div>
                    <button type='submit'>登入</button>
                    <Link to='/signUp'><button>註冊</button></Link>
                    <div className="g-signin2" data-onsuccess="onSignIn" onClick={googleLogin}></div>
                </div>
            </form>
        </div>
    )
}

export default LogIn
