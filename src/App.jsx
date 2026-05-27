import { useState, useEffect } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import HeroSlider from './Components/HeroSlider';
import Home from './Pages/Home';
import Solutions from './Pages/Solutions';
import Products from './Pages/Products';
import Product2 from './Pages/Product2';
import Support from './Pages/Support';
import Contact from './Pages/Contact';
import './App.css';

const routePages = ['solutions', 'products', 'support', 'contact'];
const pageRoutes = {
  home: '/',
  solutions: '/solutions',
  products: '/products',
  support: '/support',
  contact: '/contact'
};

const getPageFromPath = () => {
  const path = window.location.pathname.replace(/\/$/, '') || '/';
  return Object.entries(pageRoutes).find(([, route]) => route === path)?.[0] || 'home';
};

function App() {
  const initialPage = getPageFromPath();
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [activePage, setActivePage] = useState(initialPage);
  const [pendingScrollTarget, setPendingScrollTarget] = useState(null);

  const navigateToRoute = (id) => {
    const nextPath = pageRoutes[id] || '/';
    if (window.location.pathname !== nextPath) {
      window.history.pushState({}, '', nextPath);
    }
    setActivePage(id);
    setCurrentPage(id);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Smooth scroll helper with header offset to prevent overlap
  const scrollToSection = (id) => {
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

  const handleNavClick = (id) => {
    if (routePages.includes(id) || id === 'home') {
      navigateToRoute(id);
      return;
    }

    if (currentPage !== 'home') {
      if (window.location.pathname !== pageRoutes.home) {
        window.history.pushState({}, '', pageRoutes.home);
      }
      setCurrentPage('home');
      setActivePage(id);
      setPendingScrollTarget(id);
      return;
    }

    setActivePage(id);
    scrollToSection(id);
  };

  useEffect(() => {
    const handlePopState = () => {
      const page = getPageFromPath();
      setCurrentPage(page);
      setActivePage(page);
      window.scrollTo({ top: 0 });
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  useEffect(() => {
    if (!pendingScrollTarget || currentPage !== 'home') return;

    const frameId = window.requestAnimationFrame(() => {
      scrollToSection(pendingScrollTarget);
      setPendingScrollTarget(null);
    });

    return () => {
      window.cancelAnimationFrame(frameId);
    };
  }, [currentPage, pendingScrollTarget]);

  // Intersection Observer to highlight navbar links on scroll
  useEffect(() => {
    if (currentPage !== 'home') {
      return;
    }

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
  }, [currentPage]);

  const whatsappNumber = "7010776537";
  const whatsappUrl = `https://wa.me/91${whatsappNumber}`;

  const renderMainContent = () => {
    if (currentPage === 'solutions') {
      return (
        <>
          <div id="home">
            <HeroSlider />
          </div>
          <div id="solutions" className="solutions-section-wrapper">
            <Solutions setActivePage={handleNavClick} />
          </div>
        </>
      );
    }

    if (currentPage === 'products') {
      return (
        <>
          <div id="home">
            <HeroSlider />
          </div>
          <div id="products">
            <Product2 setActivePage={handleNavClick} />
          </div>
        </>
      );
    }

    if (currentPage === 'support') {
      return (
        <>
          <div id="home">
            <HeroSlider />
          </div>
          <div id="support">
            <Support setActivePage={handleNavClick} />
          </div>
        </>
      );
    }

    if (currentPage === 'contact') {
      return (
        <>
          <div id="home">
            <HeroSlider />
          </div>
          <div id="contact">
            <Contact />
          </div>
        </>
      );
    }

    return (
      <>
        <div id="home">
          <HeroSlider />
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
      </>
    );
  };

  return (
    <div className="app-container">
      {/* Dynamic Header with Scroll actions */}
      <Header activePage={activePage} setActivePage={handleNavClick} />

      {/* Main Content */}
      <main className="main-content">
        {renderMainContent()}
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
