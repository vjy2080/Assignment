import React from 'react';
// import * as ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";
import Hero from './Bike/Hero/Hero';
import RoyalEnfield from './Bike/Royal_Enfield/RoyalEnfield';
import KarizmaXMR210 from './Bike/Hero/Karizmaxmr210';
import XPulse400 from './Bike/Hero/XPulse400';
import Xtreme160R from './Bike/Hero/Xtreme160R';
import Hunter350 from './Bike/Royal_Enfield/Hunter350';
import Meteor from './Bike/Royal_Enfield/Meteor';
import Thunderbird350X from './Bike/Royal_Enfield/Thunderbird350X';

const router = createBrowserRouter([
    {
        path: "/Hero",
        element: <Hero />,
        children: [
            {
                path: "KarizmaXMR210",
                element: <KarizmaXMR210 />,
            },
            {
                path: "XPulse400",
                element: <XPulse400 />,
            },
            {
                path: "Xtreme160R",
                element: <Xtreme160R />,
            },
        ],
    },
    {
        path: "/RoyalEnfield",
        element: <RoyalEnfield />,

        children: [
            {
                path: "Hunter350",
                element: <Hunter350 />,
            },
            {
                path: "Meteor",
                element: <Meteor />,
            },
            {
                path: "Thunderbird350X",
                element: <Thunderbird350X />,
            },
        ],
    },
]);

export default router;