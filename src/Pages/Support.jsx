import React from 'react';

const Support = ({ setActivePage }) => {
  const cards = [
    {
      icon: "fa-solid fa-chalkboard-user",
      title: "1. Robot Training",
      desc: "Hands-on industrial robot programming and operation training for your team.",
      image: "/Robot Training.png"
    },
    {
      icon: "fa-solid fa-network-wired",
      title: "2. PLC Training",
      desc: "Practical PLC programming and automation control training for engineers.",
      image: "/PLC Training.png"
    },
    {
      icon: "fa-solid fa-screwdriver-wrench",
      title: "3. Support & Maintenance",
      desc: "Reliable ongoing support, troubleshooting and preventive maintenance services.",
      image: "/support &maintenance.png"
    }
  ];

  return (
    <div className="fade-in-active full-page-grid-layout">
      <div className="grid-section-header">
        <div className="section-pill-container center">
          <div className="section-pill">SUPPORT & TRAINING</div>
        </div>
        <h2 className="grid-section-title">
          Professional Support & Training Services.
        </h2>
        <p className="grid-section-subtitle">
          We empower your team with the knowledge and assistance they need to operate, maintain, and scale automation systems confidently.
        </p>
      </div>

      <div className="feature-cards-grid support-cards-grid">
        {cards.map((card, index) => (
          <div className="modern-card" key={index}>
            <div className="card-icon-box-modern">
              <i className={card.icon}></i>
            </div>
            <h3 className="card-title-modern">{card.title}</h3>
            <div className="card-divider"></div>
            <p className="card-desc-modern">{card.desc}</p>
            {card.image && (
              <img src={card.image} alt={card.title} className="card-img-modern" />
            )}
            <div
              className="card-link-modern"
              onClick={() => setActivePage('contact')}
            >
              Learn More <i className="fa-solid fa-arrow-right"></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Support;
