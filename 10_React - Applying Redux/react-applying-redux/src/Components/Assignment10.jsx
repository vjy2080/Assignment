import React from 'react';
import './Assignment10.css'

export default function Assignment10() {
    return (
        <>
            <div className="main">
                <header>
                    <h1>Part 3 : ReactJs</h1>
                    <h2>Module-13 React - Applying Redux</h2>
                    <h3>Vijay G. Prajapati</h3>
                </header>
                <ol>
                    <hr className="hr" />
                    <li>
                        What is Redux?
                    </li>
                    <p>
                        <b>Answer :- </b>
                        <ul>
                            <li>Redux is a state management tool, which is used to store the state of different variables in our react application.</li>
                            <li>It makes complex react applications easier by centralizing the application state.</li>
                            <li>Redux is an open-source JavaScript library used to manage application state.</li>
                            <li>React uses Redux for building the user interface.</li>
                            <li>It was first introduced by Dan Abramov and Andrew Clark in 2015.</li>
                            <li>It allows React components to read data from a Redux Store, and dispatch Actions to the Store to update data.</li>
                            <li>Redux helps apps to scale by providing a sensible way to manage state through a unidirectional data flow model.</li>
                            <li>React Redux is conceptually simple.</li>
                            <li>It subscribes to the Redux store, checks to see if the data which your component wants have changed, and re-renders your component.</li>
                        </ul>
                    </p>
                    <hr />
                    <li> What is Redux Thunk used for?</li>
                    <p>
                        <b>Answer :- </b>
                        <ul>
                            <li>Redux supports middleware, and middleware functions run between dispatching an action and the moment it reaches the reducer.</li>
                            <li>Redux middlewares can be used for logging, routing, asynchronous actions, etc.</li>
                            <li>Thunk allows us to return functions instead of objects from redux actions.</li>
                            <li>Plain redux doesn't allow complex logic inside action functions, you can only perform simple synchronous updates by dispatching actions.</li>
                            <li>This middleware extends its ability and lets you write complex logic that interacts with the store.</li>
                            <li>Thunk doesn't interfere with the action until it returns a function.</li>
                            <li>Thunk allows us to dispatch actions manually, which gives us the power to incorporate some logic or run some asynchronous code before dispatching an action.</li>
                            <li>A thunk function may contain any arbitrary logic, sync, or async, and can call dispatch or getState at any time.</li>
                            <li>Before moving any further let's understand the difference between the flow of redux with and without thunk.</li>
                            <li>The function returned from action is called a thunk function which is called with two arguments :</li>
                            <ol>
                                <li>dispatch: It is a method used to dispatch actions, that can be received by reducers.</li>
                                <li>getState: It gives access to store inside the thunk function.</li>
                            </ol>
                        </ul>
                        <h4>Redux flow without thunk</h4>
                        <img src="https://media.geeksforgeeks.org/wp-content/uploads/20220418234132/redux.png" alt="Redux flow without thunk" />
                        <h4>Redux flow with thunk</h4>
                        <img src="https://media.geeksforgeeks.org/wp-content/uploads/20220419010950/reduxwiththunk.png" alt="Redux flow with thunk" />
                    </p>
                    <hr />
                    <li> What is Pure Component? When to use Pure Component over Component?</li>
                    <p>
                        <b>Answer :- </b>
                        <ul>

                            <li>To achieve performance optimization, React introduces a valuable tool called pure components.</li>
                            <li>At the core of pure components lies the concept of shallow comparison,</li>
                            <li>which involves comparing the current and next props and state.</li>
                            <li>This comparison enables React to determine whether a re-rendering of the component is necessary,</li>
                            <li>thus minimizing unnecessary rendering and enhancing overall performance.</li>
                            <li>We may choose React.PureComponent over React.Component if any of the below conditions is satisfied:
                                <ol>
                                    <li>State/Props should be an immutable object</li>
                                    <li>State/Props should not have a hierarchy</li>
                                    <li>You should call forceUpdate &#40; &#41; when data changes</li>
                                </ol>
                            </li>
                        </ul>
                    </p>
                    <hr />
                    <li> What is the second argument that can optionally be passed tosetState and what is its purpose?</li>
                    <p>
                        <b>Answer :- </b>
                        <ul>
                            <li>The second argument that can optionally be passed to setState is a callback function,</li>
                            <li>which gets called immediately after the setState is completed and the components get re-rendered. </li>
                            <li>If you want your program to update the value of a state using setState,</li>
                            <li>Then perform certain actions on the updated value of state then you must specify those actions in a function.</li>
                            <li>Which should be the second argument of the setState.</li>
                            <li>If we would not do so then those actions will be performed on the previous value of state because of asynchronous nature of setState.</li>
                        </ul>
                    </p>
                </ol>
            </div>
        </>
    );
}
