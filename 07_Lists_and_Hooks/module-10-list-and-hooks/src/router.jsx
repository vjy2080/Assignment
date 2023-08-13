import * as React from "react";
import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import ClassCompo from "./Components/ClassCompo/ExampleOfClassComponent"
import ClassCompoRouter from "../src/Components/ClassCompo/ClassCompoRouter"
import FunctionalCompo from "../src/Components/FunctionalCompo/ExampleOfFunctionalComponent"
import FunctionalCompoRouter from "../src/Components/FunctionalCompo/FunctionalCompoRouter"
import Home from "./Home"
import NavBar from "./CommanCompo/NavBar";

const router = createBrowserRouter([
    {
        path: "/",
        element: (<> <NavBar /> <Home /></>),
    },
    {
        path: "/classCompo",
        element: (<> <NavBar /><ClassCompo /></>),
        children: [
            {
                path: "classcompo/*",
                element: <Suspense><ClassCompoRouter /></Suspense>,
            }]
    },
    {
        path: "/functionalCompo",
        element: (<> <NavBar /><FunctionalCompo /> </>),
        children: [
            {
                path: "functionalcompo/*",
                element: <Suspense><FunctionalCompoRouter /></Suspense>,
            }]
    },
]);

export default router


