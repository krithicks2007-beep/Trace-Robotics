import traceLiteImage from '../../pic/Trace light.png';
import traceSenseImage from '../../pic/trace sence.png';
import trace360Image from '../../pic/Trace 360.png';
import traceScaraImage from '../../pic/Trace SCARA.png';

const Product2 = () => {
  const highlights = [
    
  ];

  const products = [
    {
      title: 'Trace Lite',
      tagline: 'Compact. Smart. Industrial.',
      image: traceLiteImage,
      features: [
        { icon: 'fa-solid fa-crosshairs', text: 'LiDAR SLAM Technology' },
        { icon: 'fa-solid fa-location-crosshairs', text: 'Up to 100 m Mapping Range' },
        { icon: 'fa-solid fa-bullseye', text: '+20 mm Accuracy' },
        { icon: 'fa-regular fa-clock', text: 'Up to 6 Hours Operating Time' },
        { icon: 'fa-solid fa-arrows-up-down-left-right', text: '2.8 kg Lightweight Design' }
      ]
    },
    {
      title: 'Trace Sense',
      tagline: 'IoT Smart Automation Device',
      image: traceSenseImage,
      features: [
        { icon: 'fa-solid fa-wifi', text: 'ESP32 Wi-Fi SoC' },
        { icon: 'fa-solid fa-dice-three', text: '3 Channel Relay' },
        { icon: 'fa-solid fa-network-wired', text: 'MQTT Protocol' },
        { icon: 'fa-regular fa-clock', text: 'Time Scheduling' },
        { icon: 'fa-solid fa-bolt', text: 'Energy Meter' }
      ]
    },
    {
      title: 'Trace 360',
      tagline: 'Mobile Robot Starter Kit',
      image: trace360Image,
      features: [
        { icon: 'fa-solid fa-robot', text: 'Robot Chassis with Wheels' },
        { icon: 'fa-solid fa-microchip', text: 'Arduino Nano' },
        { icon: 'fa-solid fa-gears', text: 'Motor Driver' },
        { icon: 'fa-solid fa-ruler-horizontal', text: 'Ultrasonic Sensor' },
        { icon: 'fa-solid fa-route', text: 'Line Follower Sensor' }
      ]
    },
    {
      title: 'Trace SCARA',
      tagline: '4-Axis SCARA Robot',
      image: traceScaraImage,
      features: [
        { icon: 'fa-solid fa-robot', text: '4 Axis SCARA Robot' },
        { icon: 'fa-solid fa-plug', text: '230 V AC Power Supply' },
        { icon: 'fa-solid fa-ethernet', text: 'EtherCAT Communication' },
        { icon: 'fa-solid fa-gauge-high', text: 'High Repeatability' },
        { icon: 'fa-solid fa-arrows-up-down-left-right', text: 'Compact & Reliable Design' }
      ]
    }
  ];

  return (
    <section className="products-showcase-section fade-in-active">
      <div className="products-showcase-container">
        <div className="products-hero-copy">
          <div className="section-pill products-pill">OUR PRODUCTS</div>
          <h2 className="products-hero-title">
            Smart Solutions. <span>Smarter Future.</span>
          </h2>
          <p className="products-hero-subtitle">
            Innovative IoT devices and robotics kits designed to simplify, automate,
            and empower a connected world.
          </p>
        </div>

        <div className="products-highlight-row" aria-label="Product strengths">
          {highlights.map((item) => (
            <div className="products-highlight-item" key={item.label}>
              <div className="products-highlight-icon">
                <i className={item.icon}></i>
              </div>
              <span>{item.label}</span>
            </div>
          ))}
        </div>

        <div className="products-card-grid">
          {products.map((product) => (
            <article className="product-card" key={product.title}>
              <div className="product-image-wrap">
                <img src={product.image} alt={product.title} className="product-image" />
              </div>

              <div className="product-card-body">
                <h3 className="product-card-title">{product.title}</h3>
                <p className="product-card-tagline">{product.tagline}</p>

                <ul className="product-feature-list">
                  {product.features.map((feature) => (
                    <li key={feature.text}>
                      <i className={feature.icon}></i>
                      <span>{feature.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="product-actions">
                <button className="product-btn product-btn-primary" type="button">
                  <i className="fa-solid fa-arrow-up-from-bracket"></i>
                  Request Quote
                </button>
                <button className="product-btn product-btn-secondary" type="button">
                  <i className="fa-solid fa-download"></i>
                  Download Brochure
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Product2;
