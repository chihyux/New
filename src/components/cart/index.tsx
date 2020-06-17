import React,{ useState, useEffect } from 'react'
import { Button, Drawer, List, Skeleton } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import firebase from '../../config/config'
import { firestore } from 'firebase';

const Cart:React.FC = () => {
    const [visible, setVisible] = useState(false)
    const [cartList, setCartList] = useState([] as any)

    const authUser = firebase.auth().currentUser

    useEffect(() => {
        if(authUser) {
        const unsubscribe = firebase.firestore()
        .collection('cartList')
        .doc(authUser.uid)
        .onSnapshot((doc) => {
          const cartList = doc.data()
          console.log(cartList)
          if(cartList) {
              const getList: string[] = [...Object.values(cartList)]
              setCartList(getList)
          }
        })
    
        return () => unsubscribe()
        }
    }, [])

    const remove = async(id:string) => {
        console.log('remove from cart')
        if(authUser) {
            const userCart = await firebase.firestore().collection('cartList').doc(authUser.uid)
            .update({
                ['userCart' + id]: firebase.firestore.FieldValue.delete()
            })
            .catch( err => console.log(err) )
            return userCart
        }
    }

    const showDrawer = () => {
        setVisible(!visible)
      }
    
    const onClose = () => {
        setVisible(!visible)
      }
    
    const submit = async(item: Array<string>) => {
        const date = Date.now()
        if(authUser) {
            const userOrdered = await firebase.firestore().collection('ordered').doc(authUser.uid)
            .set({
                [date]: {
                list: [...item],
                id: date,
                date: Date.now(),
                status: 'pending'   
                }
            },{ merge: true })  
            .then(() => {
                firebase.firestore().collection('cartList').doc(authUser.uid).delete()
                setCartList([])
            })
            .catch( err => console.log(err) )
            return userOrdered
        }
    }

    const cartDetail = (
        <Drawer
        title="購物車商品"
        width='30%'
        onClose={onClose}
        visible={visible}
        bodyStyle={{ paddingBottom: 80 }}
        footer={
            <div
              style={{
                textAlign: 'right',
              }}
            >
              <Button onClick={onClose} style={{ marginRight: 8 }}>
                取消
              </Button>
              <Button onClick={()=> submit(cartList)} type="primary">
                確認購買
              </Button>
            </div>
        }
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
