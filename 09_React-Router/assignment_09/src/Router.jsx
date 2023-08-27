import React, { Suspense } from 'react';
import { createBrowserRouter } from "react-router-dom";
import Home from './CommonCompo/Home';
import NavBar from './CommonCompo/NavBar';
import Bike from './Bike/Bike';
import About from './CommonCompo/About';
import BikeLoader from './CommonCompo/Loader/Loader';



const HeroRoute = React.lazy(() => {
    return new Promise((resolve) => {
        setTimeout(
            () => resolve(import("../src/Bike/Hero/Hero")),
            3000
        );
    });
});

const RoyalEnfieldRoute = React.lazy(() => {
    return new Promise((resolve) => {
        setTimeout(
            () => resolve(import("../src/Bike/Royal_Enfield/RoyalEnfield")),
            3000
        );
    });
});

const router = createBrowserRouter([
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

   

    // import RoyalEnfield from './Bike/Royal_Enfield/RoyalEnfield';
    // import Hunter350 from './Bike/Royal_Enfield/Hunter350';
    // import Meteor from './Bike/Royal_Enfield/Meteor';
    // import Thunderbird350X from './Bike/Royal_Enfield/Thunderbird350X';


    // {
    //     path: "/Hero",
    //     element: <Hero />,
    //     children: [
    //         {
    //             path: "KarizmaXMR210",
    //             element: <KarizmaXMR210 />,
    //         },
    //         {
    //             path: "XPulse400",
    //             element: <XPulse400 />,
    //         },
    //         {
    //             path: "Xtreme160R",
    //             element: <Xtreme160R />,
    //         },
    //     ],
    // },
    // {
    //     path: "/RoyalEnfield",
    //     element: <RoyalEnfield />,

    //     children: [
    //         {
    //             path: "Hunter350",
    //             element: <Hunter350 />,
    //         },
    //         {
    //             path: "Meteor",
    //             element: <Meteor />,
    //         },
    //         {
    //             path: "Thunderbird350X",
    //             element: <Thunderbird350X />,
    //         },
    //     ],
    // },
]);

export default router;