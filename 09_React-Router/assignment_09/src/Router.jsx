import React from 'react';
import * as ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Hero from './Bike/Hero/Hero';
import Hero from './Bike/Royal_Enfield/Royal_Enfield';
import Karizma_XMR_210 from './Bike/Hero/karizma_xmr_210';
import XPulse_400 from './Bike/Hero/XPulse_400';
import Xtreme_160R from './Bike/Hero/Xtreme_160R';
import Hunter_350 from './Bike/Royal_Enfield/Hunter_350';
import Meteor from './Bike/Royal_Enfield/Meteor';
import Thunderbird_350X from './Bike/Royal_Enfield/Thunderbird_350X';

const router = createBrowserRouter([
    {
        path: "/Hero",
        element: <Hero />,
        children: [
            {
                path: "Karizma_XMR_210",
                element: <Karizma_XMR_210 />,
            },
            {
                path: "XPulse_400",
                element: <XPulse_400 />,
            },
            {
                path: "Xtreme_160R",
                element: <Xtreme_160R />,
            },
        ],
    },
    {
        path: "/Royal_Enfield",
        element: <Royal_Enfield />,

        children: [
            {
                path: "Hunter_350",
                element: <Hunter_350 />,
            },
            {
                path: "Meteor",
                element: <Meteor />,
            },
            {
                path: "Thunderbird_350X",
                element: <Thunderbird_350X />,
            },
        ],
    },
]);
