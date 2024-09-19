import React from 'react';
import { NavLink } from 'react-router-dom';
import Wrapper from '../assets/wrappers/FooterWrapper';

const Footer = () => {
  return (
    <Wrapper>
      <footer className="footer-fade">
        <div className="footer-center">
          <div className="footer-logo">
            <h1 className="footer-header">ZCMI</h1>
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
            <p className="footer-contacts">admin@zwicoat.com</p>
            <p className="footer-contacts">(917) 609-4598</p>
            <p className="footer-contacts">205 N Madison St. Room #220</p>
            <p className="footer-contacts">Iowa City, Iowa 52242</p>
          </div>
        </div>
      </footer>
    </Wrapper>
  );
};

export default Footer;
