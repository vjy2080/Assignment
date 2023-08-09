import React, { Component } from 'react';
import ClassComponentMenu from './ClassComponentMenu.jsx';
import { Route, Routes } from 'react-router-dom';
import ExampleOfMounting from './ExampleOfMounting.jsx';

class ClassCompoRouter extends Component {
    render() {
        return (
            <Routes>
                <Route path="/" element={<ClassComponentMenu />}>
                    <Route path="mounting" element={<ExampleOfMounting />} />
                    <Route path="b" lazy="b" />
                </Route>
            </Routes>
        );
    }
}

export default ClassCompoRouter;
