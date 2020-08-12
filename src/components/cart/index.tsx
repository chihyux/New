import React, { useState, useContext } from 'react'
import { Button, Drawer, List } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import firebase from '../../config/config'
import { Auth } from 'contexts/authContext';
import { CartList, Products } from '../../types/store'

const Cart: React.FC = () => {
  const [visible, setVisible] = useState(false)
  const [cartList, setCartList] = useState<CartList>([])
  const { uid, currentUser } = useContext(Auth)

  const remove = async (id: string) => {
    if (currentUser) {
      const userCart = await firebase.firestore().collection('cartList').doc(uid)
        .update({
          ['userCart' + id]: firebase.firestore.FieldValue.delete()
        })
      return userCart
    }
  }

  const showDrawer = () => {
    setVisible(!visible)
    if (currentUser) {
      const unsubscribe = firebase.firestore()
        .collection('cartList')
        .doc(uid)
        .onSnapshot((doc) => {
          const cartList = doc.data()
          if (cartList) {
            const getList: CartList = [...Object.values(cartList)]
            setCartList(getList)
          }
        })

      return () => unsubscribe()
    }
  }

  const onClose = () => {
    setVisible(!visible)
  }

  const submit = async (item: CartList) => {
    const date = Date.now()
    if (currentUser) {
      const userOrdered = await firebase.firestore().collection('ordered').doc(uid)
        .set({
          [date]: {
            list: [...item],
            id: date,
            date: Date.now(),
            status: 'pending'
          }
        }, { merge: true })
        .then(() => {
          firebase.firestore().collection('cartList').doc(uid).delete()
          setCartList([])
        })
        .catch(err => console.log(err))
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
          <Button onClick={() => submit(cartList)} type="primary">
            確認購買
              </Button>
        </div>
      }
    >
      <List
        itemLayout="horizontal"
        dataSource={cartList}
        renderItem={(item: Products) => (
          <List.Item
            actions={[<button key="list-remove" onClick={() => remove(item.id)}>刪除</button>]}
            key={item.id}
          >
            <List.Item.Meta
              title={item.name}
              description={
              <div className='cart-detail' style={{ display: 'flex' }}>
                <div style={{ display: 'flex', flexDirection: 'column', width: '95%' }}>
                  <span>顏色: {item.color}</span>
                  <span>尺寸: {item.size}</span>
                  <span>數量: {item.count}</span>
                </div>
                <div>
                  <img style={{ width: 50, height: 50 }} src={item.img} alt={item.name} />
                </div>
              </div>
              }
            />
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
        onClick={showDrawer} />
      {cartDetail}
    </>
  )
}

export default Cart
