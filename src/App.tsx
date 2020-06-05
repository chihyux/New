import React from 'react';
import { renderRoutes } from 'react-router-config';
import routes from './route'
import Navbar from './components/pages/navbar'

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      { renderRoutes(routes) }
    </>
  )
}

export default App;
