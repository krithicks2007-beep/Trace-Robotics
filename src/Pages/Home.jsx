import { useEffect, useRef } from 'react';

const Home = ({ setActivePage }) => {
  const homeRef = useRef(null);

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

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="fade-in-active home-page" ref={homeRef}>
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
