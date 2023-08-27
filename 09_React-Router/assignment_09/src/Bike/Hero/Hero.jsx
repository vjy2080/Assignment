import React from 'react';
import { Route, Routes } from "react-router-dom";
import HeroMenu from './HeroMenu';
import XPulse400 from './Bike/Hero/XPulse400';
import Xtreme160R from './Bike/Hero/Xtreme160R';
import KarizmaXMR210 from './Karizmaxmr210';

export default function Hero() {
    return (
        <Routes>
            <Route path="/" element={<HeroMenu />} />
            <Route path="/KarizmaXMR210" element={<KarizmaXMR210 />} />
            <Route path="/XPulse400" element={<XPulse400 />} />
            <Route path="/Xtreme160R" element={<Xtreme160R />} />
        </Routes>
    );
}
