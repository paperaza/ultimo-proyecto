import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';
import { Provider } from 'react-redux';
import store from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Auth0Provider
        domain='dev-acwgp8dwoyrwudhk.us.auth0.com'
        clientId='yF4q2E9dAkG0hXsT0pwZYqSWpqSXErDM'
        redirectUri={window.location.origin}//hasta que se haga lo anterior si puede ir a la App
      >
        <App />
      </Auth0Provider>
    </Provider>
  </React.StrictMode>
);


reportWebVitals();
