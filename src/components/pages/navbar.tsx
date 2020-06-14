import React, { useState, useEffect, useContext } from 'react'
import { Link, withRouter, Redirect } from 'react-router-dom'
import firebase from '../../config/config'
import { Auth } from '../../contexts/authContext'
import { Menu, Button, Space, Avatar } from 'antd'
import { Logo } from './Styled'
import { UserOutlined } from '@ant-design/icons';
import Cart from '../cart/index'

const Navbar: React.FC = () => {
    const{state, dispatch, openNotification, currentUser, rmC, contextHolder } = useContext(Auth)

    const fetchLogOut = async() => {
        const logout = await firebase.auth().signOut()
        .catch(err => {
            console.log(err)
            return err
        })
        return logout
    }
        
    const logout = () => {
        fetchLogOut()
        openNotification('LogOut')
        rmC()
        return dispatch({
            type:'LOGOUT_SUCCESS',
            payload: null
        })
    }
    

    let button;
    if (currentUser !== '') {
        button = (
        <Space size='middle' style={{ float: 'right' }}>
        <Cart/>
        <Space>
            <Avatar style={{ backgroundColor: '#ffbf00' }} size='small' icon={<UserOutlined />} />
            <span>{currentUser}</span>
        </Space>
        <Button type='dashed' onClick={logout}>登出</Button>
        </Space> 
        )
    } else {
        button = (
            <Space size='middle' style={{ float: 'right' }}>
            <Button type='dashed'><Link to='/login'>登入</Link></Button>
            <Button type='primary'><Link to='/signup'>註冊</Link></Button>
            </Space>
        )
    }

    return (
        <>
        {contextHolder}
        <Logo className='logo'></Logo>
        <Menu mode='horizontal' style={{ padding: '0 50px 0 100px' }}>
                <Menu.Item key="1"><Link to='/'>Home</Link></Menu.Item>
                <Menu.Item key="2"><Link to='/products'>Products</Link></Menu.Item>
                <Menu.Item key="3"><Link to='/new'>New</Link></Menu.Item>
                {button}
        </Menu>
        </>
    )
}

export default withRouter(Navbar)