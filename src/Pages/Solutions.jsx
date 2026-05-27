const Solutions = ({ setActivePage }) => {
  const cards = [
    {
      title: "1. Manufacturing Automation",
      desc: "End-to-end automation solutions to optimize manufacturing processes and increase output.",
      image: "/Manufacturing Automation.png"
    },
    {
      title: "2. Intralogistics Automation",
      desc: "Smart material handling solutions for warehouses and distribution centers.",
      image: "/Intralogistics Automation.png"
    },
    {
      title: "3. Quality Inspection",
      desc: "AI-powered vision inspection systems to ensure consistent quality and reduce defects.",
      image: "/Quality Inspection.png"
    },
    {
      title: "4. Turnkey Solutions",
      desc: "From concept to deployment, we deliver complete turnkey automation solutions.",
      image: "/Turnkey Solutions.png"
    }
  ];

  return (
    <div className="fade-in-active full-page-grid-layout" style={{ margin: '0 auto' }}>
      <div className="grid-section-header">
        <div className="section-pill-container center">
          <div className="section-pill">OUR SOLUTIONS</div>
        </div>
        <h2 className="grid-section-title">
          Intelligent Solutions for Real-World Challenges.
        </h2>
        <p className="grid-section-subtitle">
          We design and implement smart automation solutions that improve productivity, enhance safety, and drive sustainable growth.
        </p>
      </div>

      <div className="feature-cards-grid">
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

export default Solutions;
