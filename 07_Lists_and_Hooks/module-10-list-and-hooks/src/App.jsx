import React from 'react';
import MountingLifecycle from '../src/MountingLifecycle.png'
import UpdatingLifecycle from '../src/UpdatingLifecycle.png'
import UnmountingLifecycle from '../src/UnmountingLifecycle.png'

export default function App() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="text-center mt-3">React Component Lifecycle</h1>
            <hr className='hr' />
            <h3 className='my-3 text-primary'>What is React Component Lifecycle?</h3>
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
            <hr className='hr' />
            <h3 className='my-3 text-primary'>React Lifecycle Methods for Class Components</h3>
            <ol>
              <li>Components are nothing but individual blocks of code that are put together.</li>
              <li>These components have a lifecycle and react life cycle methods are a series of events that happen throughout this lifecycle.</li>
              <li>Class components rely on life cycle methods for performing tasks such as state management, and calling external APIs. </li>
              <li>To a beginner, these can look complex.</li>
            </ol>
            <h4 className='my-3 text-decoration-underline'>Mounting Lifecycle</h4>
            <ul>
              <li>In the mounting phase, the react component is created and added to the DOM.</li>
            </ul>
            <div className='border d-flex justify-content-center'>
              <img src={MountingLifecycle} alt="MountingLifecycle" width={400} />
            </div>
            <h5 className='my-3'> The constructor function is used to :</h5>
            <ul>
              <li>Initialize local state or any other third-party libraries.</li>
              <li>Binding event handlers to the instance.</li>
            </ul>
            <h5 className='my-3'> static getDerivedStateFromProps( )</h5>
            <ul>
              <li>static getDerivedStateFromProps( ) is a react life cycle method that is designed to replace componentWillReceiveProps.</li>
              <li>getDerivedStateFromProps is invoked just before calling the render method, it happens both on initial and subsequent mount.</li>
              <li>This method should return an object to update the state or null to update nothing.</li>
              <li>The main purpose of this method is to make sure that the state and props are in sync.</li>
              <li>static getDerivedStateFromProps() takes in props and state as arguments and returns an object to update the state.</li>
            </ul>

            <h5 className='my-3'> render()</h5>

            <ul>
              <li>Render function is called after the static getDerivedStateFromProps method.</li>
              <li>This method is required in a class component.</li>
              <li>To render elements to the DOM we can return JSX inside of the render method.</li>
              <li>The render method should be pure, we cannot use setState or interact with external APIs.</li>
            </ul>

            <h5 className='my-3'> componentDidMount()</h5>

            <ul>
              <li> Once the render method is called, the component is inserted into the DOM and then the componentDidMount() method is called.</li>
              <li> This method is the place where you update your state and call external APIs.</li>
            </ul>
            <h4 className='my-3 text-decoration-underline'>Updating Lifecycle Methods</h4>

            <ul>
              <li>In React the component is rerendered whenever a change is made to the state or the props of that component.</li>
              <li>This rerendering of the element is called updating.</li>
            </ul>

            <div className='border d-flex justify-content-center'>
              <img src={UpdatingLifecycle} alt="UpdatingLifecycle" width={400} />
            </div>

            <h5 className='my-3'> static getDerivedStateFromProps( )</h5>
            <ul>
              <li>static getDerivedStateFromProps() is the first React lifecycle method that is called in the update phase.</li>
              <li>getDerivedStateFromProps() is called before the render method and it updates the value of the state</li>
            </ul>
            <h5 className='my-3'> shouldComponentUpdate( )</h5>
            <ul>
              <li>Normally, the component is updated every time a state or prop changes but the shouldComponentUpdate() method gives us control over this behavior.</li>
              <li>This method returns a true or false value which decides whether the component will rerender or not.</li>
            </ul>
            <h5 className='my-3'> render( )</h5>

            <ul>
              <li>After shouldComponentUpdate() the render() method is called to update the DOM with the latest state changes.</li>
            </ul>

            <h5 className='my-3'> getSnapshotBeforeUpdate( )</h5>
            <ul>
              <li>The getSnapshotBeforeUpdate() method stores the previous values of the state after the DOM is updated.</li>
              <li>getSnapshotBeforeUpdate() method does not work alone, the value it returns is passed on to the componentDidUpdate() method as a third parameter.</li>
            </ul>

            <h5 className='my-3'> componentDidUpdate( )</h5>
            <ul>
              <li>This method receives two arguments prevProps and prevState.</li>
              <li>We can pass a third argument with the name snapshot which is returned from getSnapshotBeforeUpdate().</li>
            </ul>
            <h4 className='my-3 text-decoration-underline'>Unmounting Lifecycle Methods</h4>
            <ul>
              <li>These are the methods that will be invoked when the component reached its unmounting phase.</li>
            </ul>
            <div className='border d-flex justify-content-center'>
              <img src={UnmountingLifecycle} alt="UnmountingLifecycle" width={400} />
            </div>
            <h5 className='my-3'> componentWillUnmount( )</h5>
            <ul>
              <li>This method is called just before the component is unmounted or destroyed.</li>
              <li>Unmounting is simply removing the component from the DOM so that we cannot modify its state or rerender it.</li>
            </ul>

            <h4 className='my-3 text-decoration-underline'>Error Handling Lifecycle Methods</h4>
            <ul>
              <li>These methods are our saviors in times of code emergency. </li>
              <li>Code emergency is a term I made up just now to make errors and bugs sound fancy.</li>
            </ul>

            <hr className='hr' />
            <h3 className='my-3 text-primary'>React Lifecycle Methods for Functional Components</h3>
            <ol>
              <li> React hooks rely on these methods in the background and give the developers an abstract way to manage state, call APIs, etc. </li>
              <li> The knowledge of react life cycle methods is essential to understand the concept behind the hooks and it makes it easy for the developer to write better code. </li>
              <li>The simplest definition of a functional component is a simple JavaScript pure function that takes an argument called props and returns a React element (JSX).</li>
              <li>Functional components do not use any render methods.</li>
              <li>When a function is returned, it can no longer be maintained because functional components work from top to bottom.</li>
              <li>Functional components cannot use React lifecycle methods, such as componentDidMount.</li>
            </ol>
            <h4 className='my-3 text-decoration-underline'>useState</h4>
            <ul>
              <li>The useState hook is used to store state for a functional component. </li>
              <li>This hook accepts one parameter: initialState, which will be set as the initial stateful value. </li>
              <li>And returns two values: the stateful value, and the update function to update the stateful value. </li>
              <li>The update function accepts one argument, newState, which replaces the existing stateful value. </li>
            </ul>
            <h4 className='my-3 text-decoration-underline'>useEffect</h4>
            <ul>
              <li>As with the render() method of a class-based component, the main body of a functional component should be kept pure.</li>
              <li>With the useEffect hook, you're able to create side effects while maintaining the component's purity.</li>
              <li>Within this hook, you can send network requests, make subscriptions, and change the state value.</li>
              <li>This function can return another function called the clean-up function.</li>
              <li>Which can be used to clean up the side effects (i.e. when the component is destroyed) like unsubscribing to a store.</li>
            </ul>

          </div>
        </div>
      </div>
    </>
  );
}
