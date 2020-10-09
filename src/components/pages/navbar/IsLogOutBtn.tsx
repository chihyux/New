import React from 'react'
import { Button, Space } from 'antd'
import { Link } from 'react-router-dom'

const IsLogOutBtn: React.FC = () => (
    <Space size='middle'>
        <Button type='dashed'><Link to='/login'>登入</Link></Button>
        <Button type='primary'><Link to='/signup'>註冊</Link></Button>
    </Space>
)

export default IsLogOutBtn