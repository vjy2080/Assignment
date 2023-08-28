import React from 'react';
import { Route, Routes } from "react-router-dom";
import HeroMenu from './HeroMenu';
import XPulse400 from './XPulse400';
import Xtreme160R from './Xtreme160R';
import KarizmaXMR210 from './Karizmaxmr210';

export default function Hero() {
    return (<>
        <Routes>
            <Route path="/" element={<HeroMenu />} >
                <Route path="/karizmaXMR210" element={<KarizmaXMR210 />} />
                <Route path="/xPulse400" element={<XPulse400 />} />
                <Route path="/xtreme160R" element={<Xtreme160R />} />
            </Route>
        </Routes>

    </>
    );
}
