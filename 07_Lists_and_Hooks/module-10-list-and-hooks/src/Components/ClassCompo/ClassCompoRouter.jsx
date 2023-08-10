import React, { Component } from 'react';
import ClassComponentMenu from './ClassComponentMenu.jsx';
import { Route, Routes } from 'react-router-dom';
import ExampleOfMounting from './ExampleOfMounting.jsx';
import ExampleOfUpdating from './ExampleOfUpdating.jsx';
import ExampleOfUnmounting from './ExampleOfUnmounting.jsx';

class ClassCompoRouter extends Component {
    render() {
        return (
            <Routes>
                <Route path="/" element={<ClassComponentMenu />}>
                    <Route path="mounting" element={<ExampleOfMounting />} />
                    <Route path="updating" element={<ExampleOfUpdating />} />
                    <Route path="unmounting " element={<ExampleOfUnmounting />} />
                    {/* <Route path="b" lazy="b" /> */}
                </Route>
            </Routes>
        );
    }
}

export default ClassCompoRouter;
