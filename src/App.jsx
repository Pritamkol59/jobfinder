import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes,Route } from 'react-router-dom'

import Home from '../src/pages/Home';
import About from '../src/pages/About';
import Contact from '../src/pages/Contact';
import Services from '../src/pages/Services';
import Header from '../src/component/Header';
import Footer from '../src/component/Footer';
import Users from './pages/Users';

import Globalstorage from './utils/Globalstorage';

const App = () => {
  const [userPhoto, setUserPhoto] = useState('');

  useEffect(() => {
    const { user } = Globalstorage();
    if (user) {
      setUserPhoto(JSON.parse(user).photoUrl);
    } else {
      setUserPhoto('');
    }
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/users" element={<Users />} />
      </Routes>
      <Footer userPhoto={userPhoto} />
    </BrowserRouter>
  );
};

export default App