import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function HeroMenu() {
    return (
        <div>
            <ol className=' fs-5 fw-bold '>
                <li><Link className='text-dark text-decoration-none' to="karizmaXMR210">Karizma XMR 210</Link></li>
                <li><Link className='text-dark text-decoration-none' to="xPulse400">XPulse 400</Link></li>
                <li><Link className='text-dark text-decoration-none' to="xtreme160R">Xtreme 160R</Link></li>
            </ol>
            <hr className='border border-primary border-2 opacity-50 my-3' />

            <Outlet />

        </div>
    );
}
