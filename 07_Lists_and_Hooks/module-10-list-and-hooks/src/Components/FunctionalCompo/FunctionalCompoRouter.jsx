import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import FunctionalComponentMenu from './FunctionalComponentMenu.jsx';
import ExampleOfuseState from './01_ExampleOfuseState.jsx';
import ExampleOfuseEffect from './02_ExampleOfuseEffect.jsx';

class ClassCompoRouter extends Component {
    render() {
        return (
            <Routes>
                <Route path="/" element={<FunctionalComponentMenu />}>
                    <Route path="useState" element={<ExampleOfuseState />} />
                    <Route path="useEffect" element={<ExampleOfuseEffect />} />
                </Route>
            </Routes>
        );
    }
}

export default ClassCompoRouter;
