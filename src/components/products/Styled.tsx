import styled from 'styled-components'
import { Card } from 'antd'

export const ProductWrapper = styled.div`
    width: 60%;
    margin: 2em auto;
`
export const ProductDetail = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px 0;
    .details {
        line-height: 2.5;
        &.name {
            font-weight: bold;
        }
        &.color {
            font-size: 13px;
        }
        &.option {
            padding: 10px 0 20px;
        }
    }
`
// product List
export const ProductListWrapper = styled.div`
    width: 70%;
    margin: 2em auto;
`

export const ProductListCard = styled(Card)`
    .ant-card-cover {
        overflow: hidden;
    }
    .ant-card-body {
        padding: 10px 0;
    }
`

export const ListDetail = styled.div`
    display: flex;
    flex-direction: column;
    span {
        text-align: center;
        &.name { font-weight: bold; }
        span { margin: 5px; }
    }
`