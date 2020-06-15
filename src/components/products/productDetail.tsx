import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ProductsStore } from '../../contexts/productContext'
import { Row, Col, Select, Divider, InputNumber, Button } from 'antd'
import { ProductDetail, ProductWrapper } from './Styled'
import  firebase from '../../config/config'

const Detail = () => {
    const { state } = useContext(ProductsStore)
    const { productList } = state
    const [size, setSize] = useState('S')
    const [count, setCount] = useState(1)

    let { id } = useParams()

    const { Option } = Select;

    function handleChange(value:string) {
        setSize(value)
    }
    
    function onChange(value:any) {
        setCount(value)
    }

    const AddCart = (product:any) => {
        console.log('add Cart')
        const authUser = firebase.auth().currentUser
        if(authUser) {
            const id = product.id
            const userOrdered = firebase.firestore().collection('cartList').doc(authUser.uid)
            .set({
                ['userCart' + id]: {
                    ...product, 
                    size: size,
                    count: count
                }
            },{ merge: true })
            .then( err => console.log(err) )
            
            return userOrdered
        }
    }

    return (
        <ProductWrapper>
        { productList.map(item => {
        if(id === item.id) return (
        <Row gutter={[40,16]} key={item.id}>
            <Col span={15}>
                <div>
                    <img style={{ width: '100%' }} alt={item.name} src={item.img} />
                </div>
            </Col>
            <Col span={8}>
                <ProductDetail>
                <div className='details name'>{item.name}</div>
                <div className='details color'>{item.color}</div>
                <div className='details option'>
                <Select defaultValue='S' style={{ width: 120 }} onChange={handleChange}>
                    <Option value={item.size[0]}>{item.size[0]}</Option> 
                    <Option value={item.size[1]}>{item.size[1]}</Option> 
                    <Option value={item.size[2]}>{item.size[2]}</Option> 
                </Select>
                <InputNumber min={1} max={5} defaultValue={1} onChange={onChange} />
                </div>
                <span>NT.$ {item.price}</span>  
                <Divider />
                <Button onClick={() => AddCart(item)}>購買</Button>
                </ProductDetail>
            </Col>  
        </Row>
        )}) }
        </ProductWrapper>
    )
}

export default Detail
