import React, { useContext } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Auth } from '../../../contexts/authContext'
import { Menu } from 'antd'
import { Logo, SubMenu } from '../style/Styled'
import IsLogInBtn from './IsLogInBtn'
import IsLogOutBtn from './IsLogOutBtn'

const Navbar: React.FC = () => {
    const { currentUser, contextHolder } = useContext(Auth)

    return (
        <>
            {contextHolder}
            <Menu mode='horizontal'>
                <Logo>
                    <Link to='/'>
                        <span><p>Apr.12</p></span>
                    </Link>
                </Logo>
                <Menu.Item key="1"><Link to='/new'>NEW</Link></Menu.Item>
                <Menu.Item key="2"><Link to='/products'>COLLECTION</Link></Menu.Item>
                <SubMenu title={currentUser ? <IsLogInBtn /> : <IsLogOutBtn />}></SubMenu>
            </Menu>
        </>
    )
}

export default withRouter(Navbar)