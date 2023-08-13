import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import ClassComponentMenu from './ClassComponentMenu.jsx';
import ExampleOfMounting from './01_ExampleOfMounting.jsx';
import ExampleOfUpdating from './02_ExampleOfUpdating.jsx';
import ExampleOfUnmounting from './03_ExampleOfUnmounting.jsx';
import ExampleOfErrorHandling from './04_ExampleOfErrorHandling.jsx';

class ClassCompoRouter extends Component {
    render() {
        return (
            <Routes>
                <Route path="/" element={<ClassComponentMenu />}>
                    <Route path="mounting" element={<ExampleOfMounting />} />
                    <Route path="updating" element={<ExampleOfUpdating />} />
                    <Route path="unmounting" element={<ExampleOfUnmounting />} />
                    <Route path="error" element={<ExampleOfErrorHandling />} />
                </Route>
            </Routes>
        );
    }
}

export default ClassCompoRouter;
