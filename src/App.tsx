import React from 'react';
import './App.css';
import Cards from './components/cards';
import {Routes,Route} from "react-router-dom"
import HomePage from './components/Home';
import NotFound from './components/notFound';
import Navbar from './components/navlink';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path="/project" element={<Cards/>} />
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
