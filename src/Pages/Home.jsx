import React, { useState, useEffect, useRef } from 'react';
const Home = ({ setActivePage }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const homeRef = useRef(null);

  const slides = [
    {
      image: "/front1.jpg?v=10",
      pill: "ROBOTICS LAB",
      title: "Trace Robotics Lab",
      subtitle: "Pioneering intelligent automation and robotic systems",
      btnText: "Explore Solutions",
      btnTarget: "solutions"
    },
    {
      image: "/front2.png?v=10",
      pill: "INTELLIGENT SYSTEMS",
      title: "Smart Factory Integration",
      subtitle: "Connecting advanced sensors, AI, and industrial logic controllers.",
      btnText: "Explore Products",
      btnTarget: "products"
    },
    {
      image: "/front3.png?v=10",
      pill: "AUTOMATION SOLUTIONS",
      title: "Autonomous Fleet Operations",
      subtitle: "Streamlining logistics with cutting-edge mobile robots",
      btnText: "Explore Solutions",
      btnTarget: "solutions"
    },
    {
      image: "/front44.png",
      pill: "STARTER KIT",
      title: "Mobile Robot Starter Kit",
      subtitle: "Everything you need to build, learn, and innovate. Perfect for students and makers.",
      btnText: "Explore Products",
      btnTarget: "products"
    }
  ];

  const focusCards = [
    {
      title: "AI & ROBOTICS",
      desc: "Intelligent robots and AI-driven solutions designed to automate complex tasks, enhance accuracy, and adapt to dynamic environments.",
      icon: "fa-solid fa-robot",
      features: [
        { icon: "fa-solid fa-robot", label: "Intelligent Robotics" },
        { icon: "fa-solid fa-brain", label: "AI & Machine Learning" },
        { icon: "fa-solid fa-eye", label: "Computer Vision" }
      ]
    },
    {
      title: "INDUSTRIAL AUTOMATION",
      desc: "End-to-end automation solutions that improve productivity, reduce downtime, and ensure consistent quality across processes.",
      icon: "fa-solid fa-gears",
      features: [
        { icon: "fa-solid fa-server", label: "PLC & Control Systems" },
        { icon: "fa-solid fa-industry", label: "Machine Automation" },
        { icon: "fa-solid fa-gear", label: "Motion & Drive Solutions" }
      ]
    },
    {
      title: "INDUSTRY 4.0",
      desc: "Smart, connected, and data-driven solutions that turn real-time data into actionable insights for a more efficient and future-ready factory.",
      icon: "fa-solid fa-industry",
      features: [
        { icon: "fa-solid fa-cloud", label: "IIoT & Connectivity" },
        { icon: "fa-solid fa-chart-line", label: "Data Analytics & Dashboards" },
        { icon: "fa-solid fa-shield-halved", label: "Predictive Maintenance" }
      ]
    },
    {
      title: "ENGINEERING SOLUTIONS",
      desc: "End-to-end engineering solutions across mechanical, electronics, and software to bring your ideas to life from concept to deployment.",
      icon: "fa-solid fa-code",
      features: [
        { icon: "fa-solid fa-cube", label: "Mechanical CAD Design" },
        { icon: "fa-solid fa-microchip", label: "Embedded Board Development" },
        { icon: "fa-solid fa-code", label: "Software Development" }
      ]
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4500);
    return () => clearInterval(timer);
  }, [currentSlide, slides.length]);

  useEffect(() => {
    const root = homeRef.current;
    if (!root) return;

    const revealItems = root.querySelectorAll('.js-reveal, .js-section-pop');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18, rootMargin: '0px 0px -8% 0px' }
    );

    revealItems.forEach((item) => observer.observe(item));

    const handlePointerMove = (event) => {
      const { innerWidth, innerHeight } = window;
      const x = (event.clientX / innerWidth - 0.5).toFixed(3);
      const y = (event.clientY / innerHeight - 0.5).toFixed(3);

      root.style.setProperty('--motion-x', x);
      root.style.setProperty('--motion-y', y);
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('pointermove', handlePointerMove);
    };
  }, []);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const renderTitle = (title) => {
    if (title === 'Trace Robotics Lab') {
      return <span className="slide-title-highlight">{title}</span>;
    }

    const words = title.split(' ');
    if (words.length <= 1) return title;
    const lastWord = words.pop();
    return (
      <>
        {words.join(' ')} <span className="slide-title-highlight">{lastWord}</span>
      </>
    );
  };

  return (
    <div className="fade-in-active home-page" ref={homeRef}>
      <section className="hero-slider-section js-section-pop">
        <div className="slider-wrapper">
          <div className="slider-track">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`slide-item ${index === currentSlide ? 'active' : ''}`}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="slide-img hero-motion-img"
                />
                <div className="slide-overlay" />
                <div className="slide-caption">
                  <h1 className="slide-title">{renderTitle(slide.title)}</h1>
                  <p className="slide-subtitle">{slide.subtitle}</p>
                </div>
              </div>
            ))}
          </div>

          <button className="slider-btn prev" onClick={handlePrev} aria-label="Previous Slide">
            <i className="fa-solid fa-chevron-left" />
          </button>
          <button className="slider-btn next" onClick={handleNext} aria-label="Next Slide">
            <i className="fa-solid fa-chevron-right" />
          </button>

          <div className="slider-dots">
            {slides.map((_, index) => (
              <div
                key={index}
                className={`slider-dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
                role="button"
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="about-section js-section-pop">
        <div className="about-focus-container">
          <div className="about-focus-header js-reveal">
            <div className="about-eyebrow">
              <span></span>
              WHAT WE FOCUS ON
              <span></span>
            </div>
            <h2 className="about-focus-title">
              Smart Solutions. <span>Intelligent Future.</span>
            </h2>
            <p className="about-focus-subtitle">
              At Trace Robotics, we focus on four core areas that drive <strong>innovation</strong>,
              <strong> efficiency</strong>, and <strong> transformation</strong> for modern industries.
            </p>
          </div>

          <div className="about-focus-grid">
            {focusCards.map((card, index) => (
              <article
                className="focus-card js-reveal"
                key={card.title}
                style={{ transitionDelay: `${index * 90}ms` }}
              >
                <div className="focus-card-icon">
                  <i className={card.icon}></i>
                </div>
                <div className="focus-card-body">
                  <h3>{card.title}</h3>
                  <div className="focus-card-divider"></div>
                  <p>{card.desc}</p>
                </div>
                <div className="focus-feature-row">
                  {card.features.map((feature) => (
                    <div className="focus-feature" key={feature.label}>
                      <i className={feature.icon}></i>
                      <span>{feature.label}</span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="about-focus-footer js-reveal">
            <div className="about-footer-brand">
              <span className="about-footer-mark">TR</span>
              <span>TRACE<br />ROBOTICS</span>
            </div>
            <p>Building intelligent automation and digital solutions for a smarter, safer, and more productive tomorrow.</p>
            <button className="about-footer-cta" onClick={() => setActivePage('contact')}>
              Let's Build the Future Together
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
