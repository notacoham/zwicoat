import React from 'react';
import Wrapper from '../assets/wrappers/HeroWrapper';
import heroImg from '../assets/images/logos/home-page-img-cropped.png';

const Hero = () => {
  return (
    <Wrapper>
      <div className="hero-center">
        <div className="hero-content load-fade">
          <h1 className="hero-header" data-text="ZwiCoat Materials Innovations">
            ZwiCoat Materials Innovations
          </h1>
          <h1 className="hero-subheader">
            novel surface modifications of medical implants
          </h1>
        </div>
        <div className="img-center">
        <img className="hero-img load-fade" src={heroImg} alt="crossectional elemental map of a zwitterion-coated cochlear implant" />
        <div className="shadow load-fade-shadow"></div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Hero;
