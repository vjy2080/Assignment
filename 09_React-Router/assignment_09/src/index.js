import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Router.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { RouterProvider } from "react-router-dom";
import Login from './components/Login.js';
import Registration from './components/Registeration.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <RouterProvider router={Router} /> */}
    <><Registration /><Login /></>
  </React.StrictMode>
);
