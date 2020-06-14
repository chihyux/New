import React,{ useContext } from 'react'
import { ProductsStore } from '../../contexts/productContext'
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import { ProductListCard, ListDetail } from './Styled'

const ProductList = () => {
    const { state } = useContext(ProductsStore)
    const { productList } = state
        
    return (
        <Row gutter={[16,32]}>
        {productList.map((product) => {
        return (
            <Col xs={{ span: 12 }} sm={{ span: 8 }} md={{ span: 6 }} lg={{ span: 4 }}>
            <Link to={'/detail/'+product.id}  key={product.id} >
                <ProductListCard
                hoverable
                cover={<img alt={product.name} src={product.img} />}
                >
                <ListDetail>
                    <span className='name'>{product.name}</span>
                    <span>{
                    product.size.map(i => {
                        return <span>{i}</span> 
                    })
                    }</span>
                    <span>{product.color}</span>
                    <span>NT.$ {product.price}</span>  
                </ListDetail>
                </ProductListCard>
            </Link>
            </Col>
            )
        })}
        </Row>
    )
}

export default ProductList