import React, { useContext } from 'react'
import firebase from '../../config/config'
import { Auth } from '../../contexts/authContext'
import { BtnWrapper } from './Styled'
import { Button, Space } from 'antd'
import DropMenu from './dropMenu'
import Cart from '../cart/index'

const IsLogInBtn: React.FC = () => {
    const { dispatch, openNotification, removeCurrentUser } = useContext(Auth)

    const fetchLogOut = async () => {
        const logout = await firebase.auth().signOut()
        return logout
    }

    const logout = () => {
        fetchLogOut()
        openNotification('LogOut')
        removeCurrentUser()
        return dispatch({
            type: 'LOGOUT_SUCCESS',
            payload: null
        })
    }
    return (
        <BtnWrapper>
            <Space size='middle'>
                <Cart />
                <DropMenu />
                <Button type='dashed' onClick={logout}>登出</Button>
            </Space>
        </BtnWrapper>
    )
}

export default IsLogInBtn
