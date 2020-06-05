import React from 'react'
import { Link } from 'react-router-dom'
import { RouteConfig } from 'react-router-config'

const Navbar: React.FC = () => {
    return (
        <>
            <Link to='/'>Home</Link>
            <Link to='/products'>Products</Link>
            <Link to='/products/new'>New</Link>
            
            <Link to='/login'>Login</Link>
        </>
    )
}

export default Navbar