import React, { useContext } from 'react'
import { Link, withRouter } from 'react-router-dom'
import firebase from '../../config/config'
import { Auth } from '../../contexts/authContext'
import { Menu, Button, Space } from 'antd'
import { Logo, BtnWrapper } from './Styled'
import Cart from '../cart/index'
import DropMenu from './dropMenu'

const Navbar: React.FC = () => {
    const{ dispatch, openNotification, currentUser, removeCurrentUser, contextHolder } = useContext(Auth)

    const fetchLogOut = async() => {
        const logout = await firebase.auth().signOut()
        .catch(err => console.log(err))
        return logout
    }
        
    const logout = () => {
        fetchLogOut()
        openNotification('LogOut')
        removeCurrentUser()
        return dispatch({
            type:'LOGOUT_SUCCESS',
            payload: null
        })
    }
    
    let button;
    if (currentUser !== '') {
        button = (
        <BtnWrapper>
            <Space size='middle'>
                <Cart/>
                <DropMenu />      
                <Button type='dashed' onClick={logout}>登出</Button>
            </Space> 
        </BtnWrapper>
        )
    } else {
        button = (
            <BtnWrapper>
                <Space size='middle'>
                    <Button type='dashed'><Link to='/login'>登入</Link></Button>
                    <Button type='primary'><Link to='/signup'>註冊</Link></Button>
                </Space>
            </BtnWrapper>
        )
    }

    return (
        <>
        {contextHolder}
        <Menu mode='horizontal'>
                <Logo>
                    <Link to='/'>
                    <span><p>Void</p></span>
                    </Link>
                </Logo>
                 <Menu.Item key="1"><Link to='/new'>NEW</Link></Menu.Item>
                 <Menu.Item key="2"><Link to='/products'>COLLECTION</Link></Menu.Item>
                {button}
        </Menu>
        </>
    )
}

export default withRouter(Navbar)