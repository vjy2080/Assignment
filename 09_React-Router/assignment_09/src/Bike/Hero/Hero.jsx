import React from 'react';
import { Outlet } from "react-router-dom";

export default function Hero() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="slider">
                            <hr />
                            <ol>
                                <li>Karizma XMR 210</li>
                                <li>XPulse 400</li>
                                <li>Xtreme 160R</li>
                            </ol>

                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
