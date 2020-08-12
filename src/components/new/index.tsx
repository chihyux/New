import React from 'react'
import NewProductList from './newProductList'
import { ProductListWrapper } from '../products/Styled'

const New = () => {
    return (
        <ProductListWrapper>
            <NewProductList />
        </ProductListWrapper>
    )
}

export default New