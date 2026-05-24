import React, { useState, useEffect } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Solutions from './Pages/Solutions';
import Products from './Pages/Products';
import Support from './Pages/Support';
import Contact from './Pages/Contact';
import './App.css';

function App() {
  const [activePage, setActivePage] = useState('home');

  // Smooth scroll helper with header offset to prevent overlap
  const handleNavClick = (id) => {
    setActivePage(id);
    if (id === 'home') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      const header = document.querySelector('.header-wrapper');
      const headerHeight = header ? header.getBoundingClientRect().height : 0;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - headerHeight,
        behavior: 'smooth'
      });
    }
  };

  // Intersection Observer to highlight navbar links on scroll
  useEffect(() => {
    const sections = ['home', 'solutions', 'products', 'support', 'contact'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px', // Trigger when section is in the middle 20% of viewport
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActivePage(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const whatsappNumber = "7010776537";
  const whatsappUrl = `https://wa.me/91${whatsappNumber}`;

  return (
    <div className="app-container">
      {/* Dynamic Header with Scroll actions */}
      <Header activePage={activePage} setActivePage={handleNavClick} />

      {/* Main Single-Page Scroll Content */}
      <main className="main-content">
        <div id="home">
          <Home setActivePage={handleNavClick} />
        </div>

        <div id="solutions" className="solutions-section-wrapper">
          <Solutions setActivePage={handleNavClick} />
        </div>

        <div id="products">
          <Products setActivePage={handleNavClick} />
        </div>

        <div style={{ height: '1px', background: 'var(--border-light)', maxWidth: '1200px', margin: '0 auto' }}></div>

        <div id="support">
          <Support setActivePage={handleNavClick} />
        </div>

        <div style={{ height: '1px', background: 'var(--border-light)', maxWidth: '1200px', margin: '0 auto' }}></div>

        <div id="contact">
          <Contact />
        </div>
      </main>

      {/* Persistent Floating WhatsApp widget */}
      <a 
        href={whatsappUrl} 
        className="whatsapp-float-widget" 
        target="_blank" 
        rel="noopener noreferrer"
        title="Direct Consultation on WhatsApp"
        aria-label="Direct Consultation on WhatsApp"
      >
        <i className="fa-brands fa-whatsapp"></i>
      </a>

      {/* Footer with Scroll actions */}
      <Footer setActivePage={handleNavClick} />
    </div>
  );
}

export default App;
