import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App';
import AuthProvider from './Context/AuthProvider';

//styles
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HashRouter>
      {/* <AuthProvider> */}
      <App />
      {/* </AuthProvider> */}
    </HashRouter>
);

