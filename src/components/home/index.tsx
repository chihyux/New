import React, { useContext, useState, useEffect } from 'react'
import { Auth } from '../../contexts/authContext'

const Home = () => {
    const {contextHolder} = useContext(Auth)
    
    return (
        <div>
        {contextHolder}
        Home
        </div>
    )
}

export default Home