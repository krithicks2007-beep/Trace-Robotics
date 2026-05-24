import React, { useState, useEffect } from 'react';

const Home = ({ setActivePage }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [aboutSlide, setAboutSlide] = useState(0); // 0: About Us / Values, 1: Our Vision

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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4500);
    return () => clearInterval(timer);
  }, [currentSlide, slides.length]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  // Helper function to render the slide title with the last word highlighted in blue
  const renderTitle = (title) => {
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
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="slide-img"
                />
                {/* Gradient overlay */}
                <div className="slide-overlay" />
                {/* Slide Caption */}
                <div className="slide-caption">
                  <h1 className="slide-title">{renderTitle(slide.title)}</h1>
                  <p className="slide-subtitle">{slide.subtitle}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Slider controls */}
          <button className="slider-btn prev" onClick={handlePrev} aria-label="Previous Slide">
            <i className="fa-solid fa-chevron-left" />
          </button>
          <button className="slider-btn next" onClick={handleNext} aria-label="Next Slide">
            <i className="fa-solid fa-chevron-right" />
          </button>

          {/* Slider indicators */}
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

      {/* About Us Section */}
      <section className="about-section">
        <div className="about-slider-container">
          {/* Left Arrow */}


          {/* Slide Content */}
          <div className="about-slide-content">
            {aboutSlide === 0 ? (
              <div className="about-slide-item fade-in-active">


                <h2 className="about-heading">
                  Building Smarter Automation for a <span className="highlight-blue">Better Tomorrow</span>
                </h2>

                <p className="about-description">
                  Trace Robotics is an automation and robotics company focused on solving real industrial problems through{' '}
                  <span className="highlight-blue-bold">intelligent engineering solutions</span>. We help manufacturing industries improve productivity, quality, safety, traceability, and operational efficiency by delivering practical automation systems tailored to their workflow.
                </p>

                {/* Values Card Container */}
                <div className="values-grid-container">
                  <div className="modern-card">
                    <div className="card-icon-box-modern">
                      <i className="fa-solid fa-bullseye" />
                    </div>
                    <h4 className="card-title-modern">Customer Focus</h4>
                    <div className="card-divider"></div>
                    <p className="card-desc-modern">We build solutions that solve real problems and create lasting impact.</p>
                  </div>
                  <div className="modern-card">
                    <div className="card-icon-box-modern">
                      <i className="fa-solid fa-lightbulb" />
                    </div>
                    <h4 className="card-title-modern">Innovation</h4>
                    <div className="card-divider"></div>
                    <p className="card-desc-modern">We continuously explore new technologies to deliver future-ready solutions.</p>
                  </div>
                  <div className="modern-card">
                    <div className="card-icon-box-modern">
                      <i className="fa-solid fa-shield-halved" />
                    </div>
                    <h4 className="card-title-modern">Quality & Reliability</h4>
                    <div className="card-divider"></div>
                    <p className="card-desc-modern">We ensure the highest standards in engineering, testing, and deployment.</p>
                  </div>
                  <div className="modern-card">
                    <div className="card-icon-box-modern">
                      <i className="fa-solid fa-chart-simple" />
                    </div>
                    <h4 className="card-title-modern">Integrity</h4>
                    <div className="card-divider"></div>
                    <p className="card-desc-modern">We believe in transparent communication and long-term partnerships.</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="about-slide-item fade-in-active">
                <div className="section-pill-container center">
                  <div className="section-pill">OUR VISION</div>
                </div>

                <h2 className="about-heading">
                  Enabling Smarter Factories, <span className="highlight-blue">Safer Workplaces</span>
                </h2>

                <div className="vision-slide-container">
                  <div className="vision-icon-box-large">
                    <i className="fa-solid fa-eye" />
                  </div>
                  <p className="vision-large-text">
                    To become the most trusted automation partner for manufacturing industries in India and beyond — enabling smarter factories, safer workplaces, and more efficient operations.
                  </p>
                </div>
              </div>
            )}
          </div>


        </div>
      </section>
    </div>
  );
};

export default Home;
