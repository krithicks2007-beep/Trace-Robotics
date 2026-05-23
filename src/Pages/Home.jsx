import React, { useState, useEffect } from 'react';

const Home = ({ setActivePage }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/front1.jpg",
      title: "Trace Robotics Lab",
      subtitle: "Pioneering intelligent automation and robotic systems"
    },
    {
      image: "/front2.jpg",
      title: "Smart Factory Integration",
      subtitle: "Connecting advanced sensors, AI, and industrial logic controllers"
    },
    {
      image: "/front3.jpg",
      title: "Autonomous Fleet Operations",
      subtitle: "Streamlining logistics with cutting-edge mobile robots"
    }
  ];

  // Auto-play every 4 seconds, resetting the timer when the slide changes
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, [currentSlide, slides.length]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="fade-in-active">
      {/* Hero Slider Section */}
      <section className="hero-slider-section">
        <div className="slider-wrapper">
          <div className="slider-track">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`slide-item ${index === currentSlide ? 'active' : ''}`}
              >
                {/* Real image filling the slide */}
                <img
                  src={slide.image}
                  alt={slide.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    display: 'block'
                  }}
                />
                {/* Gradient overlay for text legibility */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)'
                }}></div>
                {/* Slide Caption */}
                <div style={{
                  position: 'absolute',
                  bottom: '70px',
                  left: '48px',
                  right: '48px',
                  textAlign: 'left',
                  color: '#FFFFFF',
                  zIndex: 5
                }}>
                  <h1 style={{
                    fontSize: '42px',
                    fontWeight: '800',
                    marginBottom: '8px',
                    fontFamily: 'var(--font-heading)',
                    textShadow: '0 2px 8px rgba(0,0,0,0.4)',
                    letterSpacing: '-0.5px'
                  }}>
                    {slide.title}
                  </h1>
                  <p style={{
                    fontSize: '17px',
                    opacity: 0.9,
                    maxWidth: '560px',
                    lineHeight: '1.5',
                    textShadow: '0 1px 4px rgba(0,0,0,0.3)'
                  }}>
                    {slide.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Slider controls */}
          <button className="slider-btn prev" onClick={handlePrev} aria-label="Previous Slide">
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <button className="slider-btn next" onClick={handleNext} aria-label="Next Slide">
            <i className="fa-solid fa-chevron-right"></i>
          </button>

          {/* Slider indicators */}
          <div className="slider-dots">
            {slides.map((_, index) => (
              <div
                key={index}
                className={`slider-dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              ></div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="about-section">
        <div className="section-pill-container">
          <div className="section-pill center">About Us</div>
        </div>

        <div className="about-text">
          <p>
            Trace Robotics is an automation and robotics company focused on solving real industrial problems through <span>intelligent engineering solutions</span>. We help manufacturing industries improve productivity, quality, safety, traceability, and operational efficiency by delivering practical automation systems tailored to their workflow.
          </p>
          <p>
            Our expertise combines robotics, embedded systems, mechanical design, control systems, industrial software, and smart automation to build solutions that are reliable, scalable, and industry-ready. From concept to deployment, we work closely with industries to transform manual, repetitive, and inefficient processes into smarter automated operations.
          </p>
        </div>

        {/* Vision Card */}
        <div className="vision-card">
          <div className="vision-icon-box">
            <i className="fa-solid fa-bolt"></i>
          </div>
          <div>
            <h4 className="vision-title">Our Vision</h4>
            <p className="vision-desc">
              To become the most trusted automation partner for manufacturing industries in India and beyond — enabling smarter factories, safer workplaces, and more efficient operations.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
