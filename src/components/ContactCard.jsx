import React from 'react';
import Wrapper from '../assets/wrappers/ContactCardWrapper';
import { NavLink } from 'react-router-dom';

const ContactCard = () => {
  return (
    <Wrapper>
      <div className="contact-center fade-in">
        <h1 className="contact-header ">Want to get in touch?</h1>
        <NavLink to="/contact" className="contact-btn btn ">
          Contact Us
        </NavLink>
      </div>
    </Wrapper>
  );
};

export default ContactCard;
