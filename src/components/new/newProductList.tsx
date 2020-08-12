import React, { useContext } from 'react'
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import { ProductListCard, ListDetail } from '../products/Styled'
import { ProductsStore } from '../../contexts/productContext'

const NewProductList = () => {
    const { state } = useContext(ProductsStore)
    const { newProductList } = state

    return (
        <Row gutter={[16, 32]}>
            {newProductList.map((product) => {
                return (
                    <Col xs={{ span: 12 }} sm={{ span: 8 }} md={{ span: 6 }} lg={{ span: 6 }} key={product.id}>
                        <Link to={'/detail/' + product.id} >
                            <ProductListCard
                                hoverable
                                cover={<img alt={product.name} src={product.img} />}
                            >
                                <ListDetail>
                                    <span className='name'>{product.name}</span>
                                    <span>{
                                        product.size.map(size => {
                                            return <span key={size}>{size}</span>
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

export default NewProductList