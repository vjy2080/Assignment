import React from 'react';
import { Route, Routes } from "react-router-dom";
import RoyalEnfieldMenu from './RoyalEnfieldMenu';
import Hunter350 from './Hunter350';
import Meteor from './Meteor';
import Thunderbird350X from './Thunderbird350X';

export default function RoyalEnfieldRoute() {
    return (
        <>
            <Routes>
                <Route path="/" element={<RoyalEnfieldMenu />} >
                    <Route path="/hunter350" element={<Hunter350 />} />
                    <Route path="/meteor" element={<Meteor />} />
                    <Route path="/thunderbird350X" element={<Thunderbird350X />} />
                </Route>
            </Routes>
        </>
    );
}

