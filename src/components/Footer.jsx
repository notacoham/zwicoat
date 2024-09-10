import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="footer-center">
        <span className="footer-logo">ZCMI</span>
        <div className="footer-links">
          <NavLink to="/about" className="footer-link">
            About
          </NavLink>
          <NavLink to="/contact" className="footer-link">
            Contact
          </NavLink>
        </div>
        <div className="footer-info">
          <p className="footer-contacts">test@test.com</p>
          <p className="footer-contacts">(801) 719-1411</p>
          <p className="footer-contacts">123 Address Lane</p>
          <p className="footer-contacts">Iowa City, Iowa 12345</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
