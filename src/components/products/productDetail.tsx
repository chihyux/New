import React, { useContext, useState } from 'react'
import { useParams, Redirect } from 'react-router-dom'
import { ProductsStore } from '../../contexts/productContext'
import { Row, Col, Select, Divider, InputNumber, Button } from 'antd'
import { ProductDetail, ProductWrapper } from './Styled'
import  firebase from '../../config/config'
import { Auth } from 'contexts/authContext'
import { Products } from 'types/store'

const Detail = () => {
    const { state } = useContext(ProductsStore)
    const { productList } = state
    const [size, setSize] = useState('S')
    const [count, setCount] = useState(1)
    const { uid } = useContext(Auth)
    const [routeRedirect, setRouteRedirect] = useState(false)

    let { id } = useParams()
    const { Option } = Select;

    if(routeRedirect) return <Redirect to='/login' />

    function handleChange(value:string) {
        setSize(value)
    }
    
    function onChange(value:any) {
        setCount(value)
    }

    const AddCart = async(product:any) => {
        if (uid){
            console.log('add Cart')
            const id = product.id
            const userOrdered = await firebase.firestore().collection('cartList').doc(uid)
            .set({
                ['userCart' + id]: {
                    ...product, 
                    size: size,
                    count: count
                }
            },{ merge: true })
            .catch( err => console.log(err) )
            return userOrdered
        } else {
           setRouteRedirect(true)
        }
    }

    return (
        <ProductWrapper>
        {productList.filter((item:Products) => id === item.id)
        .map(item => {
            return (
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
            )
        })
        }
        </ProductWrapper>
    )
}

export default Detail

