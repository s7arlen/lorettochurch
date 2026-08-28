import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Heart } from 'lucide-react';
import './Navbar.css';

const navItems = [
  { label: 'Home', path: '/' },
  {
    label: 'About',
    path: '/about',
    dropdown: [
      { label: 'Our Parish', path: '/about/our-parish' },
      { label: 'Church History', path: '/about/history' },
      { label: 'Our Patroness', path: '/about/our-patroness' },
      { label: 'Diocese', path: '/about/diocese' },
    ],
  },
  {
    label: 'Parish',
    path: '/parish',
    dropdown: [
      { label: 'Parish Priest', path: '/parish/parish-priest' },
      { label: 'Pastoral Team', path: '/parish/pastoral-team' },
      { label: 'Parish Council', path: '/parish/parish-council' },
      { label: 'Wards', path: '/parish/wards' },
      { label: 'Parish Office', path: '/parish/office' },
    ],
  },
  {
    label: 'Faith',
    path: '/faith',
    dropdown: [
      { label: 'Mass Timings', path: '/faith/mass-timings' },
      { label: 'Sacraments', path: '/faith/sacraments' },
      { label: 'Catechism', path: '/faith/catechism' },
      { label: 'Prayer', path: '/faith/prayer' },
    ],
  },
  {
    label: 'Organizations',
    path: '/organizations',
    dropdown: [
      { label: 'Youth Ministry', path: '/organizations/youth-ministry' },
      { label: "Women's Association", path: '/organizations/womens-association' },
      { label: "Men's Association", path: '/organizations/mens-association' },
      { label: 'Parish Choir', path: '/organizations/parish-choir' },
      { label: 'Altar Servers', path: '/organizations/altar-servers' },
      { label: 'Catechism', path: '/organizations/catechism' },
      { label: 'Legion of Mary', path: '/organizations/legion-of-mary' },
    ],
  },
  {
    label: 'News & Events',
    path: '/news',
    dropdown: [
      { label: 'Latest News', path: '/news' },
      { label: 'Upcoming Events', path: '/events' },
    ],
  },
  {
    label: 'Media',
    path: '/media',
    dropdown: [
      { label: 'Gallery', path: '/media/gallery' },
      { label: 'Videos', path: '/media/videos' },
      { label: 'Parish Newsletter', path: '/media/newsletter' },
    ],
  },
  { label: 'Contact', path: '/contact' },
];

const NavbarCrossEmblem = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="navbar__emblem-svg">
    <path d="M12 2V22M7 7H17" stroke="#7A1F2B" strokeWidth="2.2" strokeLinecap="round"/>
    <circle cx="12" cy="7" r="1.5" fill="#C6A15B"/>
  </svg>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
    setOpenDropdown(null);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenDropdown(null);
        setIsMobileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <nav
      ref={navRef}
      className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container navbar__container">
        {/* Brand Logo & Name */}
        <Link to="/" className="navbar__brand" aria-label="Our Lady of Loretto Church Home">
          <NavbarCrossEmblem />
          <div className="navbar__brand-text">
            <span className="navbar__brand-title">Our Lady of Loretto</span>
            <span className="navbar__brand-sub">CHURCH • MANGALORE</span>
          </div>
        </Link>

        {/* Desktop Nav Items */}
        <ul className="navbar__list" role="menubar">
          {navItems.map((item) => (
            <li
              key={item.label}
              className={`navbar__item ${item.dropdown ? 'navbar__item--has-dropdown' : ''} ${isActive(item.path) ? 'navbar__item--active' : ''}`}
              role="none"
              onMouseEnter={() => item.dropdown && setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                to={item.path}
                className="navbar__link"
                role="menuitem"
                aria-haspopup={item.dropdown ? 'true' : undefined}
                aria-expanded={openDropdown === item.label ? 'true' : 'false'}
              >
                {item.label}
                {item.dropdown && <ChevronDown size={13} className="navbar__chevron" aria-hidden="true" />}
              </Link>

              {item.dropdown && (
                <div
                  className={`navbar__dropdown ${openDropdown === item.label ? 'navbar__dropdown--open' : ''}`}
                  role="menu"
                  aria-label={`${item.label} submenu`}
                >
                  <div className="navbar__dropdown-inner">
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.label}
                        to={sub.path}
                        className="navbar__dropdown-link"
                        role="menuitem"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Donate / Support CTA */}
        <div className="navbar__actions">
          <Link to="/contact" className="navbar__donate-btn">
            <Heart size={14} className="navbar__donate-icon" />
            <span>Donate / Support</span>
          </Link>

          {/* Mobile Toggle */}
          <button
            className="navbar__mobile-toggle"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileOpen}
            aria-controls="mobile-nav"
          >
            {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        id="mobile-nav"
        className={`navbar__mobile ${isMobileOpen ? 'navbar__mobile--open' : ''}`}
        aria-hidden={!isMobileOpen}
      >
        <div className="navbar__mobile-header">
          <div className="navbar__mobile-brand">
            <NavbarCrossEmblem />
            <span>Loretto Church</span>
          </div>
          <button
            className="navbar__mobile-close"
            onClick={() => setIsMobileOpen(false)}
            aria-label="Close menu"
          >
            <X size={22} />
          </button>
        </div>
        <div className="navbar__mobile-inner">
          <ul className="navbar__mobile-list">
            {navItems.map((item) => (
              <li key={item.label} className="navbar__mobile-item">
                <div className="navbar__mobile-row">
                  <Link to={item.path} className="navbar__mobile-link">
                    {item.label}
                  </Link>
                  {item.dropdown && (
                    <button
                      className={`navbar__mobile-expand ${openDropdown === item.label ? 'open' : ''}`}
                      onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                      aria-label={`Expand ${item.label}`}
                    >
                      <ChevronDown size={16} />
                    </button>
                  )}
                </div>
                {item.dropdown && openDropdown === item.label && (
                  <ul className="navbar__mobile-sub">
                    {item.dropdown.map((sub) => (
                      <li key={sub.label}>
                        <Link to={sub.path} className="navbar__mobile-sub-link">
                          {sub.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <div className="navbar__mobile-donate-wrapper">
            <Link to="/contact" className="btn btn--primary navbar__mobile-donate-btn">
              <Heart size={15} /> Donate / Support Parish
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div
          className="navbar__overlay"
          onClick={() => setIsMobileOpen(false)}
          aria-hidden="true"
        />
      )}
    </nav>
  );
};

export default Navbar;
