import { Link } from "react-router-dom";
import React from 'react';

export default function NavBar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
                <div className="container-fluid">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i className="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item mx-3">
                                <Link className="text-warning" to="/">Home</Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link className="text-warning" to="/ClassCompo">Example Of Class Component</Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link className="text-warning" to="/functionalCompo">Example Of Functional Component</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
