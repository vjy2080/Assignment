import React, { useEffect } from 'react';
import { Link, Outlet, useNavigate } from "react-router-dom";



export default function Bike() {
    const navigate = useNavigate()

    useEffect(() => {
        if (!localStorage.getItem('userEmail')) {
            navigate('/login')
        }
    })

    return (
        <>

            <div className="container">
                <div className="row  mt-2">
                    <div className="  w-50 pt-2 rounded ">
                        <div>
                            <Link className='text-decoration-none btn btn-success px-4' to="hero">Hero</Link>
                        </div>
                        <div>
                            <Link className='text-decoration-none btn btn-success px-3 mt-3' to="royalEnfield">Royal-Enfield</Link>
                        </div>
                    </div>
                </div>
                <div className="row bgAbout my-3 p-3 border border-secondary rounded">
                    <div className="col">
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>

        </>
    );
}
