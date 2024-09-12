import React from 'react';
import { NavLink } from 'react-router-dom';
import Wrapper from '../assets/wrappers/FooterWrapper';

const Footer = () => {
  return (
    <Wrapper>
      <footer>
        <div className="footer-center">
          <div className="footer-logo">
            <h1 className="footer-header">ZCMI</h1>
            <button className="btn contact-btn">Contact Us</button>
          </div>
          <div className="footer-links">
            <NavLink to="/technology" className="footer-link">
              Technology
            </NavLink>
            <NavLink to="/about" className="footer-link">
              About
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
    </Wrapper>
  );
};

export default Footer;
