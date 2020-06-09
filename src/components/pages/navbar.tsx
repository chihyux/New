import React, { useState, useEffect, useContext } from 'react'
import { Link, withRouter } from 'react-router-dom'
import firebase from '../../config/config'
import { Auth } from '../../contexts/authContext'

const Navbar: React.FC = () => {
    const[userState, setUserState] = useState(null)
    const[userEmail, setUserEmail] = useState('')

    const{state, dispatch} = useContext(Auth)

    const fetchLogOut = async() => {
        const logout = await firebase.auth().signOut()
        .catch(err => {
            console.log(err)
            return err
        })
        return logout
    }
        
    //check state
    const getUserState = async() => {
        return new Promise(resolve => {
            firebase.auth().onAuthStateChanged(resolve)
        })
    }

    useEffect(()=> {
        getUserState().then((user:any) => { 
            if(user) {
                setUserState(user)
                setUserEmail(user.email)
            }
        })
    })

    const logout = () => {
        fetchLogOut()
        setUserState(null)
        return dispatch({
            type:'LOGOUT_SUCCESS',
            payload: {}
        })
    }

    let button;
    if(userState !== null || state.user.hasOwnProperty('user')) {
        button = (
        <>
        <div>{userEmail}</div>
        <button onClick={logout}>登出</button>
        </> 
        )
       
    } else {
        button = (
            <>
            <Link to='/login'>登入</Link>
            <Link to='/signup'>註冊</Link>
            </>
        )
    }

    return (
        <>
            <Link to='/'>Home</Link>
            <Link to='/products'>Products</Link>
            <Link to='/products/new'>New</Link>
            {button}
        </>
    )
}

export default withRouter(Navbar)