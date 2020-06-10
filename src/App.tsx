import React, { useEffect } from 'react';
import { renderRoutes } from 'react-router-config';
import routes from './route'
import Navbar from './components/pages/navbar'
import 'antd/dist/antd.css';
import { Layout } from 'antd';


const App: React.FC = () => {
  const { Header, Content } = Layout
  return (
    <Layout style={{ background: '#fff', height: '100vh' }}>
      <Header style={{ padding: 0, position: 'relative' }}>
         <Navbar />
      </Header>
      <Content>
         { renderRoutes(routes) }
      </Content>
    </Layout>
  )
}

export default App;
