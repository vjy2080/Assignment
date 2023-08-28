import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function RoyalEnfieldMenu() {
    return (
        <div>
            <ol className=' fs-5 fw-bold '>
                <li><Link className='text-dark text-decoration-none' to="hunter350" >Hunter 350</Link></li>
                <li><Link className='text-dark text-decoration-none' to="meteor" >Meteor</Link></li>
                <li><Link className='text-dark text-decoration-none' to="thunderbird350X" >Thunderbird 350X</Link></li>
            </ol>
            <hr className='border border-primary border-2 opacity-50 my-3' />
            <Outlet />
        </div>
    );
}
