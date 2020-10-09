import React, { useContext } from 'react'
import { Menu, Dropdown, Avatar } from 'antd'
import { DownOutlined, UserOutlined } from '@ant-design/icons'
import { Auth } from '../../../contexts/authContext'
import { Link } from 'react-router-dom'
import { MenuInnerWrapper } from '../style/Styled'

const DropMenu = () => {
  const { currentUser, uid } = useContext(Auth)

  const menu = (
    <Menu>
      <Menu.Item key="0" disabled>
        帳戶資訊
      </Menu.Item>
      <Menu.Item key="1">
        <Link to={`/user/${uid}/ordered`}>訂單查詢</Link>
      </Menu.Item>
    </Menu>
  )

  return (
    <Dropdown overlay={menu} trigger={['click']}>
      <MenuInnerWrapper onClick={e => e.preventDefault()}>
        <Avatar style={{ backgroundColor: '#ffbf00' }} size='small' icon={<UserOutlined />} />
        <span>
          {currentUser}
        </span>
        <DownOutlined />
      </MenuInnerWrapper>
    </Dropdown>
  )
}

export default DropMenu