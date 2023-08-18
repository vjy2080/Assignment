import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import { BrowserRouter } from 'react-router-dom';
// import Login from './Component/Login.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<><BrowserRouter><App /></BrowserRouter></>);
// root.render(<><BrowserRouter><Login /></BrowserRouter></>);

