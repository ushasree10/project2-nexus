import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';
import Team from './Components/Team';
import Contact from './Components/Contact';
import FAQ from './Components/faq';
import Footer from './Components/Footer';

const App = () => {
  const [isScrolledPastHome, setIsScrolledPastHome] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.pageYOffset;
    const headerHeight = document.querySelector('.header').offsetHeight; // Get header height
    setIsScrolledPastHome(scrollPosition > headerHeight);
  };

  window.addEventListener('scroll', handleScroll);

  return (
    <Router>
      <div className="app">
        <Header />
        <div className={`content ${isScrolledPastHome ? 'scrolled-past-home' : ''}`}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
