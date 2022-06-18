import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProfileOverview from '../PortfolioSections/ProfileOverview/ProfileOverview';
import About from './About';
import ContactForm from './ContactForm';
import Skills from './Skills';

const MainContainer = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<ProfileOverview />} />
        <Route path='/about' element={<About />} />
        <Route path='/contactForm' element={<ContactForm />} />
        <Route path='/skills' element={<Skills />} />
      </Routes>
    </>
  );
};

export default MainContainer;
