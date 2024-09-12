import React from 'react';
import Wrapper from '../assets/wrappers/ContactCardWrapper';

const ContactCard = () => {
  return (
    <Wrapper>
      <div className="contact-center">
        <h1 className="contact-header">Want to get in touch?</h1>
        <button className="contact-btn btn">Contact Us</button>
      </div>
    </Wrapper>
  );
};

export default ContactCard;
