import React from 'react';
import Class from '../src/flow-of-mounting-phase.png'

export default function App() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="text-center text-danger mt-3">React Component Lifecycle</h1>
            <h2>What is React Component Lifecycle?</h2>
            <p>The lifecycle of a react component can be broken down into four major steps</p>
            <ol>
              <li>Mounting
                <ul>
                  <li>In the mounting phase, the component is inserted into the DOM along with various react internals.</li>
                </ul>
              </li>
              <li>Updating
                <ul>
                  <li>Once the component is inserted into the DOM it needs to be updated to keep it functional. All these updates happen in the update state.

                  </li>
                </ul>
              </li>
              <li>Unmounting
                <ul>
                  <li>In the unmounting phase, which is the final phase, the component is removed from the DOM.

                  </li>
                </ul>
              </li>
              <li>Error Handling
                <ul>
                  <li>React components can also go through an error-handling phase which occurs when there is some bug.

                  </li>
                </ul>
              </li>

            </ol>
            <h2 className='text-primary'>React Lifecycle Methods for Class Components</h2>
            <ol>
              <li>Components are nothing but individual blocks of code that are put together.</li>
              <li>These components have a lifecycle and react life cycle methods are a series of events that happen throughout this lifecycle.</li>
              <li>Class components rely on life cycle methods for performing tasks such as state management, and calling external APIs. </li>
              <li>To a beginner, these can look complex.</li>

            </ol>
            <img src={class} alt="" />

            <h2 className='text-primary'>React Lifecycle Methods for Functional Components</h2>
            <ol>
              <li> React hooks rely on these methods in the background and give the developers an abstract way to manage state, call APIs, etc. </li>
              <li> The knowledge of react life cycle methods is essential to understand the concept behind the hooks and it makes it easy for the developer to write better code. </li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}
