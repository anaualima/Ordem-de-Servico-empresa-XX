import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";
// import reportWebVitals from './reportWebVitals';
// import './index.css';
import App from './App';
// import Provider from './context/Provider';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <Provider> */}
      <App />
      {/* </Provider> */}
    </BrowserRouter>
  </React.StrictMode>,
);