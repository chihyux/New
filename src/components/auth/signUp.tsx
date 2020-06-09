import React, { useState, useContext } from 'react'
import { Link, Redirect } from 'react-router-dom'
import firebase from '../../config/config'
import { Auth } from '../../contexts/authContext'

const SignUp:React.FC = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [routeRedirect, setRouteRedirect] = useState(false)

    const {state, dispatch} = useContext(Auth)

    const postSignUp = async (email:string, password:string) => {
    const user = await firebase.auth().createUserWithEmailAndPassword(email,password)
    .catch(err => {
      console.log('post err', err.messsage)
      return dispatch({
          type: 'SIGNUP_ERROR',
          payload: err.message
      })
    })
    return user
  }
    const signup = async(e?: any) => {
        console.log(state)
        e.preventDefault()
        console.log('form sent')
        let res = await postSignUp(email, password)
        if (res) {
            setRouteRedirect(true)
            return dispatch({
                type: 'SIGNUP_SUCCESS',
                payload: res.user
            })
        }
        setEmail('')
        setPassword('')
    }

    const redirect = routeRedirect;
    if(redirect) {
        return <Redirect to='/' />
    }

    return (
        <div>
            <form onSubmit={signup}>
                <h5>註冊新帳號</h5>
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
                    <button type='submit'>註冊</button>
                    <Link to='/logIn'><button>返回並登入</button></Link>
                </div>
            </form>
        </div>
    )
}

export default SignUp
