import React, { useEffect, useState } from 'react'
import firebase from '../../config/config'
import { Products } from '../../types/store'
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