import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import router from "./router"
// import LoaderCompo from './CommanCompo/LoaderCompo';
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <LoaderCompo />  */}
  </React.StrictMode>
);
