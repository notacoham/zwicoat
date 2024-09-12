import React from 'react';
import Wrapper from '../assets/wrappers/HeroWrapper';
import heroImg from '../assets/images/logos/hero-img-3.jpeg';

const Hero = () => {
  return (
    <Wrapper>
      <div className="hero-center">
        <div className="hero-content">
          <h1 className="hero-header">ZwiCoat Materials Innovations</h1>
          <h1 className="hero-subheader">
            novel surface modifications of medical implants
          </h1>
        </div>
        <img className="hero-img" src={heroImg} alt="" />
      </div>
    </Wrapper>
  );
};

export default Hero;
