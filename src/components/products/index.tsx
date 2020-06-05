import React from 'react'
import { renderRoutes, RouteConfig } from 'react-router-config'

const Products: React.FC = ({ route }: RouteConfig) => {
    return (
        <>
        <div>Products</div>
        {renderRoutes(route && route.routes)}
        </>
    )
}

export default Products