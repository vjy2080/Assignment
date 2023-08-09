import React from 'react';
import Home from "./Home"
import FunctionalCompo from "../src/Components/ExampleOfFunctionalComponent"
import ClassCompo from "../src/Components/ExampleOfClassComponent"
import { Routes, Route } from 'react-router-dom';


export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/functionalCompo' element={<FunctionalCompo />} />
        <Route path='/classCompo' element={<ClassCompo />} />
      </Routes>
    </div>
  );
}
