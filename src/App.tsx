import React from 'react';
import { renderRoutes } from 'react-router-config';
import routes from './route'
import Navbar from './components/pages/navbar/navbar'
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import styled from 'styled-components';

const { Header, Content } = Layout;
const LayoutWrapper = styled(Layout)`
  background: #fff;
  height: 100vh;
`
const HeaderWrapper = styled(Header)`
  background: none;
`
const ContentWrapper = styled(Content)`
  width: 100%;
  height: 100%;
  max-height: 100%;
  max-width: 100%
`


const App: React.FC = () => {
  return (
    <LayoutWrapper>
      <HeaderWrapper>
        <Navbar />
      </HeaderWrapper>
      <ContentWrapper>
        {renderRoutes(routes)}
      </ContentWrapper>
    </LayoutWrapper>
  )
}

export default App;
