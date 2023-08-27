import React from 'react';
import { Link, Outlet } from "react-router-dom";


export default function Bike() {
    return (
        <>

            <div className="container">
                <div className="row d-flex justify-content-center mt-2">
                    <div className="text-center  w-50 pt-2 rounded ">
                        <div>
                            <Link className='text-decoration-none btn btn-success px-4' to="hero">Hero</Link>
                        </div>
                        <div>
                            <Link className='text-decoration-none btn btn-success px-3 mt-3' to="royalEnfield">Royal-Enfield</Link>
                        </div>
                    </div>
                </div>
                <div className="row my-3 p-3 border border-secondary rounded">
                    <div className="col">
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>

        </>
    );
}
