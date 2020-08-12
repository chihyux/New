import React from 'react'
import { Spin } from 'antd';
import { SpingWrapper } from './Styled'

const Loading = () => {
    return (
        <SpingWrapper>
            <Spin size="large" />
        </SpingWrapper >
    )
}

export default Loading