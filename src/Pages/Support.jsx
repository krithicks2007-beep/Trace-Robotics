import React from 'react';

const Support = ({ setActivePage }) => {
  const cards = [
    {
      icon: "fa-solid fa-chalkboard-user",
      title: "Robot Training",
      desc: "Hands-on industrial robot programming and operation."
    },
    {
      icon: "fa-solid fa-network-wired",
      title: "PLC Training",
      desc: "Practical PLC programming and automation control."
    },
    {
      icon: "fa-solid fa-screwdriver-wrench",
      title: "Support & Maintenance",
      desc: "Reliable support, troubleshooting."
    }
  ];

  return (
    <div className="fade-in-active split-page-layout">
      {/* Left Column: Real Image */}
      <div className="layout-media-side">
        <div>
          <img
            src="/support.png"
            alt="Support and Training"
          />
        </div>
      </div>

      {/* Right Column: Details & Cards aligned exactly like Solutions */}
      <div className="layout-content-side">
        <div className="section-pill-container">
          <div className="section-pill">Support & Training</div>
        </div>

        <h2 className="section-title">
          Professional Support & Training
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
          <span>Explore Courses</span>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Support;
