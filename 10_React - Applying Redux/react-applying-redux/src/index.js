import React from 'react';
import * as ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider } from "react-router-dom";
import router from './Router'




ReactDOM.createRoot = ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);