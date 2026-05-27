const Support = ({ setActivePage }) => {
  const cards = [
    {
      title: "1. Robot Training",
      desc: "Hands-on industrial robot programming and operation training for your team.",
      image: "/Robot Training.png"
    },
    {
      title: "2. PLC Training",
      desc: "Practical PLC programming and automation control training for engineers.",
      image: "/PLC Training.png"
    },
    {
      title: "3. Support & Maintenance",
      desc: "Reliable ongoing support, troubleshooting and preventive maintenance services.",
      image: "/support &maintenance.png"
    },
    {
      title: "4. Embedded System Training",
      desc: "Practical embedded programming and hardware interfacing training for engineers and developers.",
      image: "/Embedded system training.jpg"
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
            {card.image && (
              <img src={card.image} alt={card.title} className="card-img-modern" />
            )}
            <h3 className="card-title-modern">{card.title}</h3>
            <div className="card-divider"></div>
            <p className="card-desc-modern">{card.desc}</p>
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
