import React from 'react';
import { Outlet } from "react-router-dom";


export default function RoyalEnfield() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="slider">
                            <ol>
                                <li>Hunter 350</li>
                                <li>Meteor</li>
                                <li>Thunderbird 350X</li>
                            </ol>

                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
