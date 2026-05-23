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

  // Opens default mail client pre-filled with the message
  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Inquiry from ${formData.name} — ${formData.interest || 'General'}`);
    const body = encodeURIComponent(
      `Hi Trace Robotics Team,\n\nName: ${formData.name}\nEmail: ${formData.email}\nInterested In: ${formData.interest}\n\nRequirements:\n${formData.requirements}\n\nLooking forward to hearing from you.`
    );
    window.location.href = `mailto:info.tracerobotics@gmail.com?subject=${subject}&body=${body}`;
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
    <div className="fade-in-active" style={{ maxWidth: '1200px', margin: '60px auto', padding: '0 24px' }}>

      {/* Centered Pill and Title */}
      <div style={{ marginBottom: '48px', textAlign: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
          <div style={{
            background: '#E5EFFF',
            color: '#0066FF',
            padding: '6px 20px',
            borderRadius: '20px',
            fontSize: '12px',
            fontWeight: '700',
            letterSpacing: '1px'
          }}>
            CONTACT
          </div>
        </div>
        <h2 style={{
          fontSize: '42px',
          fontWeight: '800',
          color: 'var(--text-dark)',
          fontFamily: 'var(--font-heading)',
          letterSpacing: '-0.5px'
        }}>
          Let's Build Something Amazing
        </h2>
      </div>

      {/* Grid: Left info cards — Right form */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: '48px', alignItems: 'start', textAlign: 'left' }}>

        {/* Left: 4 Clickable Info Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {infoItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : '_self'}
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <div
                style={{
                  background: '#FFFFFF',
                  border: '1px solid #E2E8F0',
                  borderRadius: '16px',
                  padding: '20px 24px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '20px',
                  boxShadow: '0 4px 20px rgba(0, 102, 255, 0.02)',
                  transition: 'all 0.25s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 102, 255, 0.08)';
                  e.currentTarget.style.borderColor = '#BFDBFE';
                  const valSpan = e.currentTarget.querySelector('.contact-value-text');
                  if (valSpan) valSpan.style.color = '#0066FF';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 102, 255, 0.02)';
                  e.currentTarget.style.borderColor = '#E2E8F0';
                  const valSpan = e.currentTarget.querySelector('.contact-value-text');
                  if (valSpan) valSpan.style.color = 'var(--text-dark)';
                }}
              >
                {/* Rounded Icon */}
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: item.iconBg,
                  color: item.iconColor,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '18px',
                  flexShrink: 0
                }}>
                  <i className={item.icon}></i>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                  <span style={{ fontSize: '11px', fontWeight: '700', color: '#94A3B8', letterSpacing: '0.5px' }}>
                    {item.label}
                  </span>
                  <span 
                    className="contact-value-text"
                    style={{
                      fontSize: '15px',
                      fontWeight: '700',
                      color: 'var(--text-dark)',
                      fontFamily: 'var(--font-heading)',
                      transition: 'color 0.2s ease'
                    }}
                  >
                    {item.value}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Right: Contact Form (sends via mailto) */}
        <div>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

            {/* Name */}
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your Name"
              style={{
                padding: '16px 20px',
                borderRadius: '12px',
                border: '1px solid #E2E8F0',
                background: '#FFFFFF',
                fontFamily: 'var(--font-body)',
                fontSize: '14.5px',
                color: 'var(--text-dark)',
                outline: 'none',
                transition: 'border-color 0.2s ease'
              }}
              onFocus={(e) => e.target.style.borderColor = '#0066FF'}
              onBlur={(e) => e.target.style.borderColor = '#E2E8F0'}
            />

            {/* Email */}
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Your Email"
              style={{
                padding: '16px 20px',
                borderRadius: '12px',
                border: '1px solid #E2E8F0',
                background: '#FFFFFF',
                fontFamily: 'var(--font-body)',
                fontSize: '14.5px',
                color: 'var(--text-dark)',
                outline: 'none',
                transition: 'border-color 0.2s ease'
              }}
              onFocus={(e) => e.target.style.borderColor = '#0066FF'}
              onBlur={(e) => e.target.style.borderColor = '#E2E8F0'}
            />

            {/* Interest Dropdown */}
            <div style={{ position: 'relative' }}>
              <select
                name="interest"
                required
                value={formData.interest}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  padding: '16px 20px',
                  borderRadius: '12px',
                  border: '1px solid #E2E8F0',
                  background: '#FFFFFF',
                  fontFamily: 'var(--font-body)',
                  fontSize: '14.5px',
                  color: formData.interest ? 'var(--text-dark)' : '#94A3B8',
                  outline: 'none',
                  appearance: 'none',
                  cursor: 'pointer',
                  transition: 'border-color 0.2s ease'
                }}
                onFocus={(e) => e.target.style.borderColor = '#0066FF'}
                onBlur={(e) => e.target.style.borderColor = '#E2E8F0'}
              >
                <option value="" disabled hidden>What are you interested in?</option>
                <option value="Autonomous Mobile Robots (AMR)">Autonomous Mobile Robots (AMR)</option>
                <option value="Custom Industrial Automation">Custom Industrial Automation</option>
                <option value="AI & Sensor Integration">AI & Sensor Integration</option>
                <option value="Robot Training">Robot Training</option>
                <option value="PLC Training">PLC Training</option>
                <option value="Other Inquiry">Other Inquiry</option>
              </select>
              <div style={{
                position: 'absolute', right: '20px', top: '50%',
                transform: 'translateY(-50%)', color: '#94A3B8', pointerEvents: 'none'
              }}>
                <i className="fa-solid fa-chevron-down" style={{ fontSize: '13px' }}></i>
              </div>
            </div>

            {/* Requirements Textarea */}
            <textarea
              name="requirements"
              required
              rows="5"
              value={formData.requirements}
              onChange={handleInputChange}
              placeholder="Tell us about your requirements..."
              style={{
                padding: '16px 20px',
                borderRadius: '12px',
                border: '1px solid #E2E8F0',
                background: '#FFFFFF',
                fontFamily: 'var(--font-body)',
                fontSize: '14.5px',
                color: 'var(--text-dark)',
                outline: 'none',
                resize: 'none',
                transition: 'border-color 0.2s ease'
              }}
              onFocus={(e) => e.target.style.borderColor = '#0066FF'}
              onBlur={(e) => e.target.style.borderColor = '#E2E8F0'}
            ></textarea>

            {/* Send Message Button → triggers mailto */}
            <button
              type="submit"
              className="btn-blue"
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                padding: '16px 24px',
                fontSize: '15.5px',
                borderRadius: '30px'
              }}
            >
              <span>Send Message</span>
              <i className="fa-solid fa-paper-plane"></i>
            </button>

          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;
