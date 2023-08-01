import React from 'react';
import ImageOfLifeCycleInClassCompo from '../src/flow-of-mounting-phase.png'
import UpdatingLifecycle from '../src/UpdatingLifecycle.jpg'

export default function App() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="text-center text-danger mt-3">React Component Lifecycle</h1>
            <h2 className='text-primary'>What is React Component Lifecycle?</h2>
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
            <img src={ImageOfLifeCycleInClassCompo} alt="ImageOfLifeCycleInClassCompo" width={400} />
            <h4>The constructor function is used to :</h4>
            <ul>
              <li>Initialize local state or any other third-party libraries.</li>
              <li>Binding event handlers to the instance.</li>
            </ul>
            <h4>static getDerivedStateFromProps( )</h4>
            <ul>
              <li>static getDerivedStateFromProps( ) is a react life cycle method that is designed to replace componentWillReceiveProps.</li>
              <li>getDerivedStateFromProps is invoked just before calling the render method, it happens both on initial and subsequent mount.</li>
              <li>This method should return an object to update the state or null to update nothing.</li>
              <li>The main purpose of this method is to make sure that the state and props are in sync.</li>
              <li>static getDerivedStateFromProps() takes in props and state as arguments and returns an object to update the state.</li>
            </ul>

            <h4>render()</h4>

            <ul>
              <li>Render function is called after the static getDerivedStateFromProps method.</li>
              <li>This method is required in a class component.</li>
              <li>To render elements to the DOM we can return JSX inside of the render method.</li>
              <li>The render method should be pure, we cannot use setState or interact with external APIs.</li>
            </ul>

            <h4>componentDidMount()</h4>

            <ul>
              <li> Once the render method is called, the component is inserted into the DOM and then the componentDidMount() method is called.</li>
              <li> This method is the place where you update your state and call external APIs.</li>
            </ul>
            <h4>Updating Lifecycle Methods</h4>

            <ul>
              <li>In React the component is rerendered whenever a change is made to the state or the props of that component.</li>
              <li>This rerendering of the element is called updating.</li>
            </ul>

            <img src={UpdatingLifecycle} alt="UpdatingLifecycle" width={400} />


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
