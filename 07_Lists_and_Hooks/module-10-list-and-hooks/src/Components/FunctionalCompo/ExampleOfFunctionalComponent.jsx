import React from 'react';
import { Link, Outlet } from "react-router-dom";


export default function ExampleOfFunctionalComponent() {
  return (
    <>
      <div className="main">
        <h2 className='text-center'>React Lifecycle Methods for Functional Components</h2>
        <div className="row my-3 p-3 border border-secondary rounded">
          <div className="col d-flex justify-content-center ">
            <div className="text-center border w-50 pt-2 rounded border-info">
              <h4> <Link to="FunctionalCompo">Functional Component</Link></h4>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Outlet></Outlet>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
