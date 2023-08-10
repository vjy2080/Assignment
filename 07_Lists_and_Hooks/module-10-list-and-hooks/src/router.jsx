import * as React from "react";
import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import FunctionalCompo from "../src/Components/ExampleOfFunctionalComponent"
import ClassCompo from "../src/Components/ExampleOfClassComponent"
import ClassCompoRouter from "../src/Components/ClassCompo/ClassCompoRouter"
import Home from "./Home"
import LoaderCompo from './CommanCompo/LoaderCompo.jsx';
import NavBar from "./CommanCompo/NavBar";



const router = createBrowserRouter([
    {
        path: "/",
        element: (<> <NavBar /> <Home /></>),
    },

    {
        path: "/functionalCompo",
        element: (<> <NavBar /><FunctionalCompo /> </>),
        children: [

            {
                path: "functionalcompo/*",
                element: <Suspense fallback={<LoaderCompo />}><FunctionalCompo /> </Suspense>,
            }]
    },
    {
        path: "/classCompo",
        element: (<> <NavBar /><ClassCompo /></>),
        children: [
            {
                path: "classcompo/*",
                element: <Suspense fallback={<LoaderCompo />}><ClassCompoRouter /></Suspense>,
            }]
    },

]);

export default router


