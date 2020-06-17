import React, { createContext, Context, useState, useReducer, useEffect } from 'react'
import { firebaseProducts } from '../reducer/productsReducer'
import { Products, ProductContext, IProduct } from '../types/store'
import firebase from '../config/config'

const productList: Array<Products> = []
const newProductList: Array<Products> = []
// const orderList:Set<string> = new Set([])

export const ProductsStore = createContext({} as ProductContext)

const defaultContext:IProduct = {
    productList,
    newProductList
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

    useEffect(() => {
        // filter 一個月內商品
        const nowDay = Date.now()
        const nowMonth = new Date(nowDay).getMonth()
        const nowYear = new Date(nowDay).getFullYear()

        const nowMonthFirstDay = new Date(nowYear,nowMonth,1)
        const nowMonthDay = new Date(nowYear,nowMonth,0).getDate() -1
        const nowMonthEndDay = new Date(nowYear,nowMonth,nowMonthDay)

        firebase.firestore().collection('products')
        .where('update','>=',nowMonthFirstDay)
        .where('update','<=',nowMonthEndDay)
        .get()
        .then((querySnapshot:any) => {
        console.log('New...')
        let newProducts:Products[] = []
        querySnapshot.forEach((doc:any) => {
        newProducts.push({
            id: doc.id,
            ...doc.data()})
        })
        dispatch({ type:'GET_NEWEST_PRODUCTS', newProductList: newProducts })
    })
    }, [])

    const value = { state, dispatch }
    return (
        <ProductsStore.Provider value={value}>
            {children}
        </ProductsStore.Provider>
    )
}
