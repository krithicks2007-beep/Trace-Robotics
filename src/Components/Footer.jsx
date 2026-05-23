import React from 'react';

const Footer = ({ setActivePage }) => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: "fa-brands fa-whatsapp", url: "https://wa.me/917010776537" },
    { icon: "fa-brands fa-instagram", url: "https://instagram.com/trace_robotics?igshid=OGQ5ZDc2ODk3ZA==" },
    { icon: "fa-brands fa-linkedin-in", url: "https://www.linkedin.com/company/trace-robotics/" },
    { icon: "fa-brands fa-youtube", url: "https://www.youtube.com/channel/UCdYwGg6-q30t1U18k3QoQlg" }
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
    {
      value: "+91 7010776537",
      href: "tel:+917010776537",
      icon: "fa-solid fa-phone",
      color: "#E11D48" // Pinkish-red
    },
    {
      value: "info.tracerobotics@gmail.com",
      href: "mailto:info.tracerobotics@gmail.com",
      icon: "fa-solid fa-envelope",
      color: "#0066FF" // Electric blue
    },
    {
      value: "www.tracerobotics.in",
      href: "https://www.tracerobotics.in",
      icon: "fa-solid fa-globe",
      color: "#0EA5E9" // Sky blue
    },
    {
      value: "Punjai Puliampatti, Erode",
      href: "https://maps.google.com/?q=Punjai+Puliampatti,Erode",
      icon: "fa-solid fa-location-dot",
      color: "#EF4444" // Red
    }
  ];

  return (
    <footer style={{
      background: '#E5ECF6', // Soft slate gray-blue matching screenshot
      borderTop: '1px solid #D2DBE7',
      padding: '60px 24px 30px',
      textAlign: 'left',
      fontFamily: 'var(--font-body)'
    }}>
      
      {/* 4-Column Grid Layout */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1.2fr 0.8fr 0.8fr 1.2fr',
        gap: '40px',
        marginBottom: '48px'
      }}>
        
        {/* Column 1: Brand & Socials */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          
          {/* Hexagon Logo + Dual Color Brand Name */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            {/* Outlined blue hexagon matching screenshot */}
            <span style={{
              color: '#0066FF',
              fontSize: '28px',
              fontWeight: '300',
              display: 'flex',
              alignItems: 'center',
              lineHeight: 1
            }}>
              ⬡
            </span>
            <span style={{
              fontSize: '20px',
              fontWeight: '800',
              fontFamily: 'var(--font-heading)',
              color: '#0F172A',
              letterSpacing: '-0.3px'
            }}>
              Trace <span style={{ color: '#0066FF' }}>Robotics</span>
            </span>
          </div>

          <p style={{
            fontSize: '14px',
            lineHeight: '1.6',
            color: '#475569',
            maxWidth: '300px'
          }}>
            Developing intelligent robotic solutions for industry. Building the next generation of robotics engineers.
          </p>

          {/* Social circular buttons with white background and subtle borders */}
          <div style={{ display: 'flex', gap: '12px', marginTop: '4px' }}>
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: '#FFFFFF',
                  border: '1px solid #D2DBE7',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#334155',
                  fontSize: '15px',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.03)',
                  transition: 'all 0.2s ease-in-out'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.color = '#0066FF';
                  e.currentTarget.style.borderColor = '#0066FF';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.color = '#334155';
                  e.currentTarget.style.borderColor = '#D2DBE7';
                }}
              >
                <i className={social.icon}></i>
              </a>
            ))}
          </div>

        </div>

        {/* Column 2: Quick Links */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <h4 style={{
            fontSize: '15px',
            fontWeight: '700',
            color: '#0F172A',
            textTransform: 'none'
          }}>
            Quick Links
          </h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', padding: 0 }}>
            {quickLinks.map((link, index) => (
              <li
                key={index}
                onClick={() => setActivePage(link.target)}
                style={{
                  fontSize: '14.5px',
                  color: '#475569',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#0066FF';
                  e.currentTarget.style.transform = 'translateX(2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#475569';
                  e.currentTarget.style.transform = 'none';
                }}
              >
                {link.label}
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Policies */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <h4 style={{
            fontSize: '15px',
            fontWeight: '700',
            color: '#0F172A',
            textTransform: 'none'
          }}>
            Policies
          </h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', padding: 0 }}>
            {policies.map((policy, index) => (
              <li
                key={index}
                style={{
                  fontSize: '14.5px',
                  color: '#475569',
                  cursor: 'pointer',
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#0066FF'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#475569'}
              >
                {policy}
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Contact Info */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <h4 style={{
            fontSize: '15px',
            fontWeight: '700',
            color: '#0F172A',
            textTransform: 'none'
          }}>
            Contact Info
          </h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px', padding: 0 }}>
            {contactDetails.map((detail, index) => {
              const isLink = !!detail.href;
              const content = (
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                  {/* Colorful circular icon placeholder */}
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: '#FFFFFF',
                    border: '1px solid #D2DBE7',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: detail.color,
                    fontSize: '13px',
                    flexShrink: 0
                  }}>
                    <i className={detail.icon}></i>
                  </div>
                  <span 
                    className="footer-contact-link"
                    style={{ 
                      fontSize: '14px', 
                      color: '#475569', 
                      fontWeight: '500',
                      transition: 'color 0.2s ease'
                    }}
                  >
                    {detail.value}
                  </span>
                </div>
              );

              return (
                <li key={index}>
                  {isLink ? (
                    <a 
                      href={detail.href}
                      target={detail.href.startsWith('http') ? '_blank' : '_self'}
                      rel="noopener noreferrer"
                      style={{ 
                        textDecoration: 'none', 
                        cursor: 'pointer',
                        display: 'block'
                      }}
                      onMouseEnter={(e) => {
                        const span = e.currentTarget.querySelector('.footer-contact-link');
                        if (span) span.style.color = '#0066FF';
                      }}
                      onMouseLeave={(e) => {
                        const span = e.currentTarget.querySelector('.footer-contact-link');
                        if (span) span.style.color = '#475569';
                      }}
                    >
                      {content}
                    </a>
                  ) : (
                    content
                  )}
                </li>
              );
            })}
          </ul>
        </div>

      </div>

      {/* Footer Bottom Center Copyright Bar */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        paddingTop: '24px',
        borderTop: '1px solid #D2DBE7',
        textAlign: 'center'
      }}>
        <p style={{
          fontSize: '13.5px',
          color: '#64748B',
          margin: 0
        }}>
          &copy; {currentYear} Trace Robotics. All Rights Reserved.
        </p>
      </div>

    </footer>
  );
};

export default Footer;
