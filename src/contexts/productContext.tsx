import React, { createContext, Context, useState, useReducer, useEffect } from 'react'
import { firebaseProducts } from '../reducer/productsReducer'
import { Products, ProductContext, IProduct } from '../types/store'
import firebase from '../config/config'

const productList: Array<Products> = []
// const orderList:Set<string> = new Set([])

export const ProductsStore = createContext({} as ProductContext)

const defaultContext:IProduct = {
    productList
    // orderList
}

export const ProductsProvider:React.FC<{}> = ({ children }) => {
    const [state, dispatch] = useReducer(firebaseProducts, defaultContext as any )

    useEffect(() => {
        firebase.firestore().collection('products').get()
        .then((querySnapshot:any) => {
        console.log('fetching...')
        let products:Products[] = []
        querySnapshot.forEach((doc:any) => {
        products.push({
            id: doc.id,
            ...doc.data()})
        })
        dispatch({ type: 'GET_PRODUCTS', productList: products })
    })
    }, [])

    const value = { state, dispatch }
    return (
        <ProductsStore.Provider value={value}>
            {children}
        </ProductsStore.Provider>
    )
}
