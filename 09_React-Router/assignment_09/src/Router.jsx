import React, { Suspense } from 'react';
import { createBrowserRouter } from "react-router-dom";
import Home from './CommonCompo/Home';
import NavBar from './CommonCompo/NavBar';
import Bike from './Bike/Bike';
import About from './CommonCompo/About';
import BikeLoader from './CommonCompo/Loader/Loader';
import Dashboard from './components/Dashboard/Dashboard';
import Preferences from './components/Preferences/Preferences';
import Login from './components/Login/Login';



const HeroRoute = React.lazy(() => {
    return new Promise((resolve) => {
        setTimeout(
            () => resolve(import("./Bike/Hero/HeroRoute")),
            3000
        );
    });
});

const RoyalEnfieldRoute = React.lazy(() => {
    return new Promise((resolve) => {
        setTimeout(
            () => resolve(import("./Bike/Royal_Enfield/RoyalEnfieldRoute")),
            3000
        );
    });
});

const [token, setToken] = useState();

if (!token) {
    return <Login setToken={setToken} />
}


const router = createBrowserRouter([
    {
        path: "/dashboard",
        element: <Dashboard />,
        path: "/preferences",
        element: <Preferences />,

    },
    {
        path: "/",
        element: <>
            <NavBar />
            <Home />
        </>
    },
    {
        path: "/bike",
        element: (
            <>
                <NavBar />
                <Bike />
            </>
        ),

        children: [
            {
                path: "hero/*",
                element: (
                    <Suspense fallback={<BikeLoader />}>
                        <HeroRoute />
                    </Suspense>
                ),
            },
            {
                path: "royalEnfield/*",
                element: (
                    <Suspense fallback={<BikeLoader />}>
                        <RoyalEnfieldRoute />
                    </Suspense>
                ),
            },
        ],
    },

    {
        path: "/about",
        element: <>
            <NavBar />
            <About />
        </>
    },



]);

export default router;