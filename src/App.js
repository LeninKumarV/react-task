import React from 'react';
import './App.css';
import { Routes, Route} from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Services from './component/Services';
import Contact from './component/Contact';
import Error from './component/Error';
import Navbar from './component/Navbar';
import Footer from './component/Footer';


function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/about' Component={About}/>
        <Route path='/services' Component={Services}/>
        <Route path='/contact' Component={Contact}/>
        <Route Component={Error}/>
      </Routes>
      <Footer/>
       </>
  );
}

export default App;
