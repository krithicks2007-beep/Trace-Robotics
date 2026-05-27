import { useEffect, useRef, useState } from 'react';

const slides = [
  {
    image: "/front1.jpg?v=11",
    title: "Trace Robotics Lab",
    subtitle: "Pioneering intelligent automation and robotic systems"
  },
  {
    image: "/front2.png?v=11",
    title: "Smart Factory Integration",
    subtitle: "Connecting advanced sensors, AI, and industrial logic controllers."
  },
  {
    image: "/front3.png?v=11",
    title: "Autonomous Fleet Operations",
    subtitle: "Streamlining logistics with cutting-edge mobile robots"
  },
  {
    image: "/front44.png",
    title: "Mobile Robot Starter Kit",
    subtitle: "Everything you need to build, learn, and innovate. Perfect for students, educators, and makers ready to bring ideas to life.",
    variant: "starter-kit",
    features: [
      { icon: "fa-solid fa-robot", label: "Easy to Build" },
      { icon: "fa-solid fa-code", label: "Programmable" },
      { icon: "fa-solid fa-battery-full", label: "Rechargeable" },
      { icon: "fa-solid fa-wifi", label: "Expandable" }
    ]
  }
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const root = heroRef.current;
    if (!root) return;

    const handlePointerMove = (event) => {
      const { innerWidth, innerHeight } = window;
      const x = (event.clientX / innerWidth - 0.5).toFixed(3);
      const y = (event.clientY / innerHeight - 0.5).toFixed(3);

      root.style.setProperty('--motion-x', x);
      root.style.setProperty('--motion-y', y);
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });

    return () => {
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
    <section className="hero-slider-section" ref={heroRef}>
      <div className="slider-wrapper">
        <div className="slider-track">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`slide-item ${slide.variant === 'starter-kit' ? 'starter-kit-slide' : ''} ${index === currentSlide ? 'active' : ''}`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="slide-img hero-motion-img"
              />
              {slide.variant === 'starter-kit' ? (
                <div className="starter-hero-content">
                  <div className="starter-hero-copy">
                    <h1 className="starter-hero-title">
                      Mobile Robot <span>Starter Kit.</span>
                    </h1>
                    <p className="starter-hero-subtitle">{slide.subtitle}</p>
                  </div>
                  <div className="starter-hero-features">
                    {slide.features.map((feature) => (
                      <div className="starter-hero-feature" key={feature.label}>
                        <div className="starter-hero-icon">
                          <i className={feature.icon}></i>
                        </div>
                        <span>{feature.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <>
                  <div className="slide-overlay" />
                  <div className="slide-caption">
                    <h1 className="slide-title">{renderTitle(slide.title)}</h1>
                    <p className="slide-subtitle">{slide.subtitle}</p>
                  </div>
                </>
              )}
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
  );
};

export default HeroSlider;
