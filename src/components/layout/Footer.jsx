import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const FooterChurchEmblem = () => (
  <svg width="40" height="40" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="26" cy="26" r="24" stroke="#C6A15B" strokeWidth="1.2" fill="none" opacity="0.6"/>
    <circle cx="26" cy="26" r="20" stroke="#C6A15B" strokeWidth="0.8" fill="none" opacity="0.3"/>
    <rect x="24.5" y="10" width="3" height="22" rx="1" fill="#C6A15B"/>
    <rect x="17" y="18" width="18" height="3" rx="1" fill="#C6A15B"/>
    <circle cx="26" cy="36" r="2" fill="#C6A15B" opacity="0.8"/>
  </svg>
);

const FacebookIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const YoutubeIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33zM9.75 15.02V8.48l5.75 3.27-5.75 3.27z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer__content">
          {/* Brand & Identity */}
          <div className="footer__brand">
            <FooterChurchEmblem />
            <h2 className="footer__title">Our Lady of Loretto Church</h2>
            <p className="footer__subtitle">Loretto • Mangalore • Diocese of Mangalore</p>
          </div>

          {/* Clean Horizontal Links */}
          <nav className="footer__nav" aria-label="Footer navigation">
            <Link to="/about/our-parish">About</Link>
            <Link to="/faith/mass-timings">Mass Timings</Link>
            <Link to="/events">Events</Link>
            <Link to="/news">News</Link>
            <Link to="/media/gallery">Gallery</Link>
            <Link to="/contact">Contact</Link>
          </nav>

          {/* Social Icons */}
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

          {/* Thin Gold Divider */}
          <div className="footer__gold-line" aria-hidden="true" />

          {/* Bottom Bar: Copyright & Credit */}
          <div className="footer__bottom">
            <p className="footer__copyright">
              © {currentYear} Our Lady of Loretto Church, Loretto, Mangalore. All rights reserved.
            </p>
            <p className="footer__credit">
              Powered by{' '}
              <a
                href="https://appvertex.in"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__credit-brand"
              >
                AppVertex
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
