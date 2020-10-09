import React from 'react'
import NewProductList from './newProductList'
import { ProductListWrapper } from '../products/style/Styled'

const New = () => {
    return (
        <ProductListWrapper>
            <NewProductList />
        </ProductListWrapper>
    )
}

export default New