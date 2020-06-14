import React,{ useState } from 'react'
import { Button, Drawer, List, Skeleton } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';

const Cart:React.FC = () => {
    const [visible, setVisible] = useState(false)

    const showDrawer = () => {
        setVisible(true)
      }
    
    const onClose = () => {
        setVisible(false)
      }

    const list = [
        {
            id: '1',
            name: 'skit',
            img: '',
            loading: false
        }
    ]
    
    const cartDetail = (
        <Drawer
        title="購物車商品"
        width={500}
        onClose={onClose}
        visible={visible}
        bodyStyle={{ paddingBottom: 80 }}
        >
        <List 
        itemLayout="horizontal"
        dataSource={list}
        renderItem={item => (
            <List.Item
                actions={[<a key="list-loadmore-edit">edit</a>, <a key="list-loadmore-more">more</a>]}
            >
                <Skeleton avatar title={false} loading={item.loading} active>
                <List.Item.Meta
                    title={<a href="">{item.name}</a>}
                />
                </Skeleton>
            </List.Item>
            )}
            />
       </ Drawer>
    )
    return (
        <>
        <Button type='primary' 
                shape='circle' 
                icon={<ShoppingCartOutlined />} 
                size='small' 
                onClick={showDrawer}/>
        {cartDetail}
        </>   
    )
}

export default Cart
