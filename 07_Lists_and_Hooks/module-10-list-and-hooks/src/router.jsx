import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import FunctionalCompo from "../src/Components/ExampleOfFunctionalComponent"
import ClassCompo from "../src/Components/ExampleOfClassComponent"
import Home from "./Home"
import NavBar from "./Components/NavBar";


const router = createBrowserRouter([
    {
        path: "/",
        element: (<> <NavBar /> <Home /></>),

    },

    {
        path: "/functionalCompo",
        element: (<> <NavBar /><FunctionalCompo /> </>),
    },
    {
        path: "/classCompo",
        element: (<> <NavBar /><ClassCompo /></>),
    },

]);

export default router


