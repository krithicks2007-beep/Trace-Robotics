import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: '',
    requirements: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Inquiry from ${formData.name} - ${formData.interest || 'General'}`);
    const body = encodeURIComponent(
      `Hi Trace Robotics Team,\n\nName: ${formData.name}\nEmail: ${formData.email}\nInterested In: ${formData.interest}\n\nRequirements:\n${formData.requirements}\n\nLooking forward to hearing from you.`
    );
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=info.tracerobotics@gmail.com&su=${subject}&body=${body}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  const infoItems = [
    {
      label: "PHONE",
      value: "+91 7010776537",
      href: "tel:+917010776537",
      icon: "fa-solid fa-phone",
      iconColor: "#E11D48",
      iconBg: "#FFE4E6"
    },
    {
      label: "EMAIL",
      value: "info.tracerobotics@gmail.com",
      href: "mailto:info.tracerobotics@gmail.com",
      icon: "fa-solid fa-envelope",
      iconColor: "#0066FF",
      iconBg: "#E5EFFF"
    },
    {
      label: "WEBSITE",
      value: "www.tracerobotics.in",
      href: "https://www.tracerobotics.in",
      icon: "fa-solid fa-globe",
      iconColor: "#0EA5E9",
      iconBg: "#E0F2FE"
    },
    {
      label: "LOCATION",
      value: "Punjai Puliampatti, Erode",
      href: "https://maps.google.com/?q=Punjai+Puliampatti,Erode",
      icon: "fa-solid fa-location-dot",
      iconColor: "#EF4444",
      iconBg: "#FEE2E2"
    }
  ];

  return (
    <div className="fade-in-active contact-container">

      {/* Centered Pill and Title */}
      <div className="contact-header">
        <div className="section-pill-container">
          <div className="section-pill center">Contact</div>
        </div>
        <h2 className="contact-title">Let's Build Something Amazing</h2>
      </div>

      {/* Grid: Left info cards — Right form */}
      <div className="contact-layout">

        {/* Left: 4 Clickable Info Cards */}
        <div className="contact-info-col">
          {infoItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : '_self'}
              rel="noopener noreferrer"
              className="contact-info-card"
            >
              <div
                className="contact-info-icon-box"
                style={{ background: item.iconBg, color: item.iconColor }}
              >
                <i className={item.icon} />
              </div>
              <div className="contact-info-text">
                <span className="contact-info-label">{item.label}</span>
                <span className="contact-info-value">{item.value}</span>
              </div>
            </a>
          ))}
        </div>

        {/* Right: Contact Form */}
        <div className="contact-form-col">
          <form onSubmit={handleSubmit} className="contact-form">

            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your Name"
              className="contact-input"
            />

            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Your Email"
              className="contact-input"
            />

            <div className="contact-select-wrapper">
              <select
                name="interest"
                required
                value={formData.interest}
                onChange={handleInputChange}
                className="contact-input contact-select"
              >
                <option value="" disabled hidden>What are you interested in?</option>
                <option value="Industry ---- AMR & Automation">Industry ---- AMR & Automation</option>
                <option value="Support ---- workspace & Courses">Support ---- workspace & Courses</option>
                <option value="AI & Sensor Integration">AI & Sensor Integration</option>
                <option value="Robot Training">Robot Training</option>
                <option value="PLC Training">PLC Training</option>
                <option value="Other Inquiry">Other Inquiry</option>
              </select>
              <div className="contact-select-arrow">
                <i className="fa-solid fa-chevron-down" />
              </div>
            </div>

            <textarea
              name="requirements"
              required
              rows="5"
              value={formData.requirements}
              onChange={handleInputChange}
              placeholder="Tell us about your requirements..."
              className="contact-input contact-textarea"
            />

            <button type="submit" className="btn-blue contact-submit-btn">
              <span>Send Message</span>
              <i className="fa-solid fa-paper-plane" />
            </button>

          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;
