import React from 'react';

const Solutions = ({ setActivePage }) => {
  const cards = [
    {
      icon: "fa-solid fa-circle-nodes",
      title: "Autonomous Mobile Robots (AMR)",
      desc: "Intelligent material handling and internal logistics automation with our cutting-edge AMR fleet."
    },
    {
      icon: "fa-solid fa-gears",
      title: "Custom Industrial Automation",
      desc: "We develop tailored automation solutions to improve productivity, efficiency, and safety across your operations."
    },
    {
      icon: "fa-solid fa-microchip",
      title: "AI & Sensor Integration",
      desc: "Our solutions integrate robotics, sensors, and AI technologies to optimize manufacturing and warehouse operations."
    }
  ];

  return (
    <div className="fade-in-active split-page-layout">
      {/* Left Column: Real Image */}
      <div className="layout-media-side">
        <div style={{
          width: '100%',
          aspectRatio: '4 / 3',
          borderRadius: '24px',
          overflow: 'hidden',
          boxShadow: '0 20px 60px rgba(0, 102, 255, 0.08)'
        }}>
          <img
            src="/robot1.jpg"
            alt="Autonomous Robotics Solutions"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
          />
        </div>
      </div>

      {/* Right Column: Details & Feature Cards */}
      <div className="layout-content-side">
        <div className="section-pill-container">
          <div className="section-pill">Solution</div>
        </div>

        <h2 className="section-title">
          Autonomous Solutions for Smart Factories
        </h2>

        <div className="card-stack">
          {cards.map((card, index) => (
            <div className="stack-card" key={index}>
              <div className="card-icon-box">
                <i className={card.icon}></i>
              </div>
              <div className="card-details">
                <h3 className="card-title">{card.title}</h3>
                <p className="card-desc">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="btn-blue" onClick={() => setActivePage('contact')}>
          <span>Learn More</span>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Solutions;
