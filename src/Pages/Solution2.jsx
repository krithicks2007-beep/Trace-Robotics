import weldingRobotImage from '../../pic/Welding Robot.png';
import machineTendingImage from '../../pic/Machine Trending Robot.png';
import pickPlaceImage from '../../pic/pick and place robot.png';
import machineVisionImage from '../../pic/Machine Vision Robot.png';

const Solution2 = () => {
  const services = [
    {
      title: 'Welding Robot',
      image: weldingRobotImage,
      desc: 'High-precision welding solutions for consistent quality and efficiency.',
      features: [
        'MIG, TIG & Spot Welding',
        'Seam Tracking',
        'High Accuracy',
        'Safety & Quality Assurance'
      ]
    },
    {
      title: 'Machine Tending Robot',
      image: machineTendingImage,
      desc: 'Automate loading and unloading tasks to maximize machine uptime.',
      features: [
        'CNC & VMC Tending',
        'Reduced Cycle Time',
        '24/7 Unattended Operation',
        'Flexible Integration'
      ]
    },
    {
      title: 'Pick and Place Robot',
      image: pickPlaceImage,
      desc: 'Fast and accurate pick-and-place solutions for handling products with ease.',
      features: [
        'High Speed & Precision',
        'Multiple Payload Options',
        'Vision-Guided Picking',
        'Smooth & Reliable Operation'
      ]
    },
    {
      title: 'Machine Vision Robot',
      image: machineVisionImage,
      desc: 'Intelligent vision systems for inspection, measurement, and guidance.',
      features: [
        'Defect Detection',
        'Dimension Measurement',
        'Guided Robotics & Bin Picking',
        'Real-time Data & Reporting'
      ]
    }
  ];

  const reasons = [
    { icon: 'fa-regular fa-lightbulb', title: 'Custom Solutions', text: 'Tailored to your process needs' },
    { icon: 'fa-solid fa-gear', title: 'End-to-End Support', text: 'From design to installation' },
    { icon: 'fa-solid fa-bullseye', title: 'Proven Results', text: 'Boost productivity and ROI' },
    { icon: 'fa-solid fa-shield-halved', title: 'Quality & Reliability', text: 'Built with safety and reliability' },
    { icon: 'fa-solid fa-headset', title: 'Expert Team', text: 'Skilled engineers and support' },
    { icon: 'fa-solid fa-globe', title: 'Global Standards', text: 'Compliant with industry norms' }
  ];

  return (
    <section className="solutions2-section fade-in-active">
      <div className="solutions2-container">
        <div className="products-hero-copy solutions2-hero-copy">
          <div className="section-pill products-pill">OUR SOLUTIONS</div>
          <h2 className="products-hero-title solutions2-title">Our Robotic Services</h2>
          <p className="products-hero-subtitle">
            Automation services designed to improve precision, uptime, quality, and production flow.
          </p>
        </div>

        <div className="solutions2-card-grid">
          {services.map((service) => (
            <article className="solution2-card" key={service.title}>
              <img src={service.image} alt={service.title} className="solution2-card-image" />
              <h3 className="solution2-card-title">{service.title}</h3>
              <div className="solution2-card-body">
                <p className="solution2-card-desc">{service.desc}</p>
                <ul className="solution2-feature-list">
                  {service.features.map((feature) => (
                    <li key={feature}>
                      <i className="fa-solid fa-check"></i>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="product-actions solution2-actions">
                <button className="product-btn product-btn-primary" type="button">
                  <i className="fa-regular fa-file-lines"></i>
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

        <div className="solutions2-why">
          <h3 className="solutions2-why-title">Why Choose Trace Robotics?</h3>
          <div className="solutions2-reasons">
            {reasons.map((reason) => (
              <div className="solutions2-reason" key={reason.title}>
                <i className={reason.icon}></i>
                <h4>{reason.title}</h4>
                <p>{reason.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution2;
