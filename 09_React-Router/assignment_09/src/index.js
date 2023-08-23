import React from 'react';
import ReactDOM from 'react-dom/client';
// import Router from './Router.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Example from './Bike/Hero/Hero';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Router /> */} <Example />
  </React.StrictMode>
);
