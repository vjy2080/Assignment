import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import NavBar from "./Components/Navbar";
import Assignment10 from "./Components/Assignment10";
import Example from "./Components/Example.jsx";
import CreateProduct from "./Components/CreateProduct";

const router = createBrowserRouter([
    { path: "/", element: <><NavBar /><Assignment10 /></>, },
    { path: "/Example", element: <><NavBar /><Example /></>, },
    { path: "/create", element: <><NavBar /><CreateProduct /></>, },

]);

export default router;

