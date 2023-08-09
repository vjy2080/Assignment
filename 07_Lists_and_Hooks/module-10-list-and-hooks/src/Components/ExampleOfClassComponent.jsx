import React from 'react';
import { Link, Outlet } from "react-router-dom";


export default function ExampleOfClassComponent() {
    return (
        <>
            <div className="container">
                <h2 className='text-center'>React Lifecycle Methods for Class Components</h2>
                <div className="row my-3 p-3 border border-secondary rounded">
                    <div className="col">
                        <div className="text-center border w-50 pt-2 rounded border-info">
                            <h3>
                                <Link to="classcompo">Class Component</Link>
                            </h3>
                        </div>
                        <div className="col">

                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}
