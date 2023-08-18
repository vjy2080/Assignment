import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Headers from './Component/Header.jsx';
import Home from './home.jsx';
import ProductPage from './product.jsx';
import About from './about.jsx';
import Contact from './contact.jsx';
import Login from './Component/Login.jsx';


const App = () => {
  return (
    <>
      <Headers />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<ProductPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;