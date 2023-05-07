import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'

import Home from '../src/pages/Home';
import About from '../src/pages/About';
import Contact from '../src/pages/Contact';
import Services from '../src/pages/Services';
import Header from '../src/component/Header';
import Footer from '../src/component/Footer';

const App = () => {
  return (
    
    <BrowserRouter>
    <Header/>
    <Routes>

    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/services' element={<Services/>}/>


    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App