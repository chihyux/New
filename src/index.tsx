import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Switch } from 'react-router-dom';
import { AuthProvider } from './contexts/authContext'
import { GlobalStyle } from './style/globalStyle'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthProvider>
      <GlobalStyle />
      <Switch>
          <App />
      </Switch>
    </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

