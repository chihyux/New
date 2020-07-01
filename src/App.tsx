import React from 'react';
import { renderRoutes } from 'react-router-config';
import routes from './route'
import Navbar from './components/pages/navbar'
import 'antd/dist/antd.css';
import { Layout } from 'antd';


const App: React.FC = () => {
  const { Header, Content } = Layout
  return (
    <Layout style={{ background: '#fff', height: '100vh' }}>
      <Header style={{ background: 'none', position: 'relative' }}>
         <Navbar />
      </Header>
      <Content style={{ width: '100%',
    height: '100%',
    maxWidth: '100%',
    maxHeight: '100%' }}>
         { renderRoutes(routes) }
      </Content>
    </Layout>
  )
}

export default App;
