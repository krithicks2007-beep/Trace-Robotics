import React from 'react';

const Products = ({ setActivePage }) => {
  const cards = [
    {
      icon: "fa-solid fa-microchip",
      title: "Tracelite Core",
      desc: "Essential features, entry-level solution"
    },
    {
      icon: "fa-solid fa-shield-halved",
      title: "TracePro",
      desc: "Advanced capabilities for industrial use"
    },
    {
      icon: "fa-solid fa-rocket",
      title: "TracePrime",
      desc: "High-performance, fully integrated solution."
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
            src="/robot3.jpg"
            alt="Flagship Hardware Products"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
          />
        </div>
      </div>

      {/* Right Column: Details & Feature Cards aligned exactly like Solutions */}
      <div className="layout-content-side">
        <div className="section-pill-container">
          <div className="section-pill">Products</div>
        </div>

        <h2 className="section-title">
          Our Flagship Hardware
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
          <span>Explore Products</span>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Products;
