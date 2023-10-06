import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import NavBar from "./Components/Navbar";
import Assignment10 from "./Components/Assignment10";
import Example1 from "./Components/Example1.jsx";
import CreateProduct from "./Components/CreateProduct";

const router = createBrowserRouter([
    {
        path: "/",
        element: <>
            <NavBar />
            <Assignment10 />
        </>,
    },
    {
        path: "/Example1",
        element: <>
            <NavBar />
            <Example1 />
        </>,
        children: [
            {
                path: "/CreateProduct",
                element: <>
                    <NavBar />
                    <CreateProduct />
                </>,
            },
        ],
    },

]);

export default router;

