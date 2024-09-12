import React from 'react';
import Wrapper from '../assets/wrappers/HeroWrapper';

const Hero = () => {
  return (
    <Wrapper>
      <div className="hero-center">
        <div className="hero-content">
          <h1 className="hero-header">ZwiCoat Materials Innovations</h1>
          <h1 className="hero-subheader">
            novel surface modifications of medical implants
          </h1>
          {/* <p className="hero-body">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
            laboriosam nemo odit aperiam perspiciatis quasi.
          </p> */}
        </div>
        {/* <div className="hero-img"></div> */}
      </div>
    </Wrapper>
  );
};

export default Hero;
