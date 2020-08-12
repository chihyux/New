import React, { useState, useEffect, useCallback, useContext } from 'react'
import { Auth } from '../../contexts/authContext'
import { List } from 'antd';
import firebase from '../../config/config'
import { OrderedWrapper } from './Styled'
import { OrderList, Products, ListItem } from '../../types/store'
import { Redirect } from 'react-router-dom'

const User: React.FC = () => {
    const { currentUser } = useContext(Auth)
    const [orderedList, setOrderedList] = useState<OrderList>([])

    const fetchingData = useCallback(
        () => {
            const user = firebase.auth().currentUser
            if (user) {
                const unsubscribe = firebase.firestore()
                    .collection('ordered')
                    .doc(user.uid)
                    .onSnapshot((doc) => {
                        const orderedList = doc.data()
                        if (orderedList) {
                            const getList: OrderList = [...Object.values(orderedList)]
                            setOrderedList(getList)
                        }
                    })
                return () => unsubscribe()
            }
        }, [])

    useEffect(() => {
        fetchingData()
    }, [fetchingData])


    const cartDetail = (
        <List
            itemLayout="horizontal"
            dataSource={orderedList}
            renderItem={(item: Products) => (
                <List.Item
                    key={item.id}
                >
                    <List.Item.Meta
                        title={item.name}
                        description={
                            <div style={{ display: 'flex', flexDirection: 'column', width: '95%' }}>
                                <span className='ordered-id'>訂單編號: {item.id}</span>
                                <span>下單時間: {new Date(item.date).toString()}</span>
                                {item.list?.map((listItem: ListItem) => {
                                    return (
                                        <>
                                            <span className='ordered-name'>{listItem.name}</span>
                                            <span>顏色: {listItem.color}</span>
                                            <span>尺寸: {listItem.size}</span>
                                            <span>數量: {listItem.count}</span>
                                        </>
                                    )
                                })}
                                <span>狀態: {item.status}</span>
                            </div>
                        }
                    />
                </List.Item>
            )}
        />
    )

    return (
        <>
            {currentUser ?
                <OrderedWrapper>
                    <h5>訂購清單</h5>
                    {cartDetail}
                </OrderedWrapper>
                :
                <Redirect to="/" />
            }
        </>
    )
}

export default User