import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Nav from './components/nav/nav';
import About from './pages/about';

export default function App() {
  return (
    <div className='App'>
      <Nav />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>      
    </div>
    
  );
};

