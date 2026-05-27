const Products = ({ setActivePage }) => {
  const cards = [
    {
      title: "1. Industrial Robot Arms",
      desc: "High-precision robotic arms for welding, handling, assembling, and more.",
      image: "/Industrial Robot Arms.png"
    },
    {
      title: "2. AMR / AGV Systems",
      desc: "Autonomous mobile robots for material transport and smart intralogistics.",
      image: "/AMR AGV Systems.png"
    },
    {
      title: "3. Control & Drive Systems",
      desc: "Advanced control solutions for seamless motion and process control.",
      image: "/Control and Driven System.png"
    },
    {
      title: "4. Vision Systems",
      desc: "Intelligent vision solutions for inspection, guidance, and quality assurance.",
      image: "/vision system.png"
    }
  ];

  return (
    <div className="fade-in-active full-page-grid-layout products-page-section">
      <div className="grid-section-header">
        <div className="section-pill-container center">
          <div className="section-pill">OUR PRODUCTS</div>
        </div>
        <h2 className="grid-section-title">
          Advanced Robotics. Built for Performance.
        </h2>
        <p className="grid-section-subtitle">
          Our products are engineered to deliver precision, reliability, and efficiency across diverse industrial applications.
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

export default Products;
