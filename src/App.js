import React from 'react';
import Navbar from './Navbar/Navbar';
import './styles/style.css';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div>
      <Navbar /> 
      <Routes>
        <Route path="/learn" element=''/>
        <Route path="/about" element='' />
        <Route path="/why" element='' />
      </Routes>
    </div>
  );
}

export default App;
