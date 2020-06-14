import React,{ useState, useEffect } from 'react'
import { Button, Drawer, List, Skeleton } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import firebase from '../../config/config'

const Cart:React.FC = () => {
    const [visible, setVisible] = useState(false)
    const [cartList, setCartList] = useState([])

    useEffect(() => {
        const authUser = firebase.auth().currentUser
        if(authUser) {
        const unsubscribe = firebase.firestore()
        .collection('ordered')
        .doc(authUser.uid)
        .onSnapshot((doc) => {
          const cartList = doc.data()
          if(cartList) {
              setCartList(cartList.orderList.map((item:any)=> {
                return item
              }))
          }
        })
    
        return () => unsubscribe()
        }
    }, [])

    const remove = async(id:string) => {
        console.log('remove from cart')
        const authUser = firebase.auth().currentUser
        if(authUser) {
            const userCart = firebase.firestore().collection('ordered').doc(authUser.uid)
            userCart.update({
            orderList: firebase.firestore.FieldValue.arrayRemove({ 
                id: id
            })
        })
        }
    }
    const showDrawer = () => {
        setVisible(!visible)
      }
    
    const onClose = () => {
        setVisible(!visible)
      }
    
    const cartDetail = (
        <Drawer
        title="購物車商品"
        width='30%'
        onClose={onClose}
        visible={visible}
        bodyStyle={{ paddingBottom: 80 }}
        // footer={<button>送出</button>}
        >
        <List
        itemLayout="horizontal"
        dataSource={cartList}
        renderItem={(item:any) => (
            <List.Item
                actions={[<a key="list-remove" onClick={()=> remove(item.id)}>刪除</a>]}
                key={item.id}
            >
                <Skeleton avatar title={false} loading={item.loading} active>
                <List.Item.Meta
                    title={item.name}
                    description={ <div className='cart-detail' style={{ display: 'flex'}}>
                                    <div style={{ display: 'flex', flexDirection: 'column', width: '95%' }}>
                                        <span>顏色: {item.color}</span>
                                        <span>尺寸: {item.size}</span>
                                        <span>數量: {item.count}</span>
                                    </div>
                                    <div>
                                        <img style={{ width: 50, height: 50 }} src={item.img} alt={item.name}/>
                                    </div>
                                  </div>
                                }
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
