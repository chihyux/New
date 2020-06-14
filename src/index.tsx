import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Switch } from 'react-router-dom'
import { AuthProvider } from './contexts/authContext'
import { GlobalStyle } from './style/globalStyle'
import { ProductsProvider } from './contexts/productContext'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
     <Switch>
    <AuthProvider>
      <ProductsProvider>
        <GlobalStyle />
          <App />
      </ProductsProvider>
    </AuthProvider>
     </Switch> 
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

