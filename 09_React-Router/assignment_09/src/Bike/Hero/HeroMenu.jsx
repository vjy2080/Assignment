import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function HeroMenu() {
    return (
        <div>
            <ol>
                <li><Link className='text-white' to="KarizmaXMR210">Karizma XMR 210</Link></li>
                <li><Link className='text-white' to="XPulse400">XPulse 400</Link></li>
                <li><Link className='text-white' to="Xtreme160R">Xtreme 160R</Link></li>
            </ol>

            <Outlet></Outlet>
        </div>
    );
}
