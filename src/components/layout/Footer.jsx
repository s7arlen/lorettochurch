import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Heart } from 'lucide-react';
import './Footer.css';

const FooterChurchEmblem = () => (
  <svg width="44" height="44" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="26" cy="26" r="24" stroke="#C9A45C" strokeWidth="1.2" fill="none" opacity="0.5"/>
    <circle cx="26" cy="26" r="20" stroke="#C9A45C" strokeWidth="0.8" fill="none" opacity="0.25"/>
    <rect x="24.5" y="10" width="3" height="22" rx="1" fill="#C9A45C"/>
    <rect x="17" y="18" width="18" height="3" rx="1" fill="#C9A45C"/>
    <circle cx="26" cy="36" r="2" fill="#C9A45C" opacity="0.6"/>
    <text x="26" y="44" textAnchor="middle" fill="#C9A45C" fontSize="7" fontFamily="Cormorant Garamond, serif" opacity="0.7">✦</text>
  </svg>
);

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const YoutubeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33zM9.75 15.02V8.48l5.75 3.27-5.75 3.27z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__top-line" aria-hidden="true" />

      <div className="footer__main">
        <div className="container footer__grid">
          {/* Identity */}
          <div className="footer__col footer__col--identity">
            <div className="footer__emblem">
              <FooterChurchEmblem />
            </div>
            <div className="footer__church-name">
              <span className="footer__our-lady">Our Lady of Loretto</span>
              <span className="footer__church-label">Church</span>
            </div>
            <p className="footer__tagline">
              A parish community of Faith,<br />Hope and Service.
            </p>
            <div className="footer__divider" aria-hidden="true">✦ ✦ ✦</div>
            <p className="footer__diocese">
              Diocese of Mangalore<br />
              Loretto • Mangalore • Karnataka, India
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer__col">
            <h3 className="footer__heading">Quick Links</h3>
            <ul className="footer__links">
              <li><Link to="/about/our-parish">Our Parish</Link></li>
              <li><Link to="/about/history">Church History</Link></li>
              <li><Link to="/about/our-patroness">Our Patroness</Link></li>
              <li><Link to="/faith/mass-timings">Mass Timings</Link></li>
              <li><Link to="/faith/sacraments">Sacraments</Link></li>
              <li><Link to="/organizations">Parish Organizations</Link></li>
              <li><Link to="/events">Upcoming Events</Link></li>
              <li><Link to="/news">Latest News</Link></li>
              <li><Link to="/media/gallery">Photo Gallery</Link></li>
              <li><Link to="/media/newsletter">Parish Newsletter</Link></li>
            </ul>
          </div>

          {/* Parish */}
          <div className="footer__col">
            <h3 className="footer__heading">Parish</h3>
            <ul className="footer__links">
              <li><Link to="/parish/parish-priest">Parish Priest</Link></li>
              <li><Link to="/parish/pastoral-team">Pastoral Team</Link></li>
              <li><Link to="/parish/parish-council">Parish Council</Link></li>
              <li><Link to="/parish/wards">Parish Wards</Link></li>
              <li><Link to="/parish/office">Parish Office</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
            <h3 className="footer__heading" style={{marginTop: '1.5rem'}}>Follow Us</h3>
            <div className="footer__social">
              <a href="#" className="footer__social-link" aria-label="Facebook" rel="noopener noreferrer">
                <FacebookIcon />
              </a>
              <a href="#" className="footer__social-link" aria-label="YouTube" rel="noopener noreferrer">
                <YoutubeIcon />
              </a>
              <a href="#" className="footer__social-link" aria-label="Instagram" rel="noopener noreferrer">
                <InstagramIcon />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="footer__col">
            <h3 className="footer__heading">Contact Us</h3>
            <ul className="footer__contact-list">
              <li>
                <MapPin size={15} className="footer__contact-icon" />
                <span>Our Lady of Loretto Church,<br />Loretto, Mangalore<br />Karnataka — 575 [PLACEHOLDER], India</span>
              </li>
              <li>
                <Phone size={15} className="footer__contact-icon" />
                <a href="tel:[PLACEHOLDER]">[PLACEHOLDER — Parish Phone]</a>
              </li>
              <li>
                <Mail size={15} className="footer__contact-icon" />
                <a href="mailto:[PLACEHOLDER]">[PLACEHOLDER — Parish Email]</a>
              </li>
              <li>
                <Clock size={15} className="footer__contact-icon" />
                <span>Parish Office:<br />Mon–Sat: 9:00 AM – 12:00 PM<br />4:00 PM – 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p className="footer__copyright">
            © {currentYear} Our Lady of Loretto Church, Loretto, Mangalore. All rights reserved.
          </p>
          <p className="footer__powered-by">
            Powered by <span className="footer__powered-brand">AppVertex</span>
          </p>
          <p className="footer__made-with">
            Made with <Heart size={12} aria-label="love" className="footer__heart" /> for the Parish Community
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
