import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider 
      domain='dev-acwgp8dwoyrwudhk.us.auth0.com'
      clientId='yF4q2E9dAkG0hXsT0pwZYqSWpqSXErDM' 
      redirectUri={window.location.origin}//hasta que se haga lo anterior si puede ir a la App
    >
    <App />
    </Auth0Provider>
  </React.StrictMode>
);


reportWebVitals();
