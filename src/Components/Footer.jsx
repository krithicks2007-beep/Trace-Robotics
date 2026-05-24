import React from 'react';

const Footer = ({ setActivePage }) => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: "fa-brands fa-whatsapp", url: "https://wa.me/917010776537", label: "WhatsApp" },
    { icon: "fa-brands fa-instagram", url: "https://instagram.com/trace_robotics?igshid=OGQ5ZDc2ODk3ZA==", label: "Instagram" },
    { icon: "fa-brands fa-linkedin-in", url: "https://www.linkedin.com/company/trace-robotics/", label: "LinkedIn" },
    { icon: "fa-brands fa-youtube", url: "https://www.youtube.com/channel/UCdYwGg6-q30t1U18k3QoQlg", label: "YouTube" }
  ];

  const quickLinks = [
    { label: "Home", target: "home" },
    { label: "Industry", target: "solutions" },
    { label: "Support", target: "support" },
    { label: "Contact", target: "contact" }
  ];

  const policies = [
    "Privacy Policy",
    "Terms & Conditions",
    "Shipping & Refund Policy",
    "Warranty Policy"
  ];

  const contactDetails = [
    { value: "+91 7010776537", href: "tel:+917010776537", icon: "fa-solid fa-phone", color: "#E11D48" },
    { value: "info.tracerobotics@gmail.com", href: "mailto:info.tracerobotics@gmail.com", icon: "fa-solid fa-envelope", color: "#0066FF" },
    { value: "www.tracerobotics.in", href: "https://www.tracerobotics.in", icon: "fa-solid fa-globe", color: "#0EA5E9" },
    { value: "Punjai Puliampatti, Erode", href: "https://maps.google.com/?q=Punjai+Puliampatti,Erode", icon: "fa-solid fa-location-dot", color: "#EF4444" }
  ];

  return (
    <footer className="footer-wrapper">
      <div className="footer-container">

        {/* Column 1: Brand & Socials */}
        <div className="footer-brand-col">
          <div className="footer-logo-row">
            <span className="footer-hex-icon">⬡</span>
            <span className="footer-logo-text">
              Trace <span className="footer-logo-blue">Robotics</span>
            </span>
          </div>
          <p className="footer-desc">
            Developing intelligent robotic solutions for industry. Building the next generation of robotics engineers.
          </p>
          <div className="footer-socials">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label={social.label}
              >
                <i className={social.icon} />
              </a>
            ))}
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-column">
          <h4 className="footer-col-heading">Quick Links</h4>
          <ul className="footer-link-list">
            {quickLinks.map((link, index) => (
              <li
                key={index}
                className="footer-link-item"
                onClick={() => setActivePage(link.target)}
              >
                {link.label}
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Policies */}
        <div className="footer-column">
          <h4 className="footer-col-heading">Policies</h4>
          <ul className="footer-link-list">
            {policies.map((policy, index) => (
              <li key={index} className="footer-link-item footer-policy-item">
                {policy}
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Contact Info */}
        <div className="footer-column">
          <h4 className="footer-col-heading">Contact Info</h4>
          <ul className="footer-contact-list">
            {contactDetails.map((detail, index) => (
              <li key={index}>
                <a
                  href={detail.href}
                  target={detail.href.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  className="footer-contact-item"
                >
                  <div
                    className="footer-contact-icon"
                    style={{ color: detail.color }}
                  >
                    <i className={detail.icon} />
                  </div>
                  <span className="footer-contact-value">{detail.value}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Footer Bottom Bar */}
      <div className="footer-bottom">
        <p className="footer-copyright">
          &copy; {currentYear} Trace Robotics. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
