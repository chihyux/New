import React from 'react'
import ProductList from './productList'
import { ProductListWrapper } from './style/Styled'

const Products: React.FC = () => {
    return (
        <ProductListWrapper>
            <ProductList />
        </ProductListWrapper>
    )
}

export default Products