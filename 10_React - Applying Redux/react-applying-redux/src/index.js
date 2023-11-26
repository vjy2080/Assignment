import React from 'react';
import * as ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider } from "react-router-dom";
import Router from './Router.jsx'
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';


const store = configureStore({
  reducer: {

  }
})

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={Router} />
  </Provider>
);