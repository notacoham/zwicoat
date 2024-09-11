import React from 'react';
import Wrapper from '../assets/wrappers/HeroWrapper';

const Hero = () => {
  return (
    <Wrapper>
      <div className="hero-center">
        <div className="hero-content">
          <h1 className="hero-header">Hero 1</h1>
          <h1 className="hero-subheader">Hero 2</h1>
          <p className="hero-body">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
            laboriosam nemo odit aperiam perspiciatis quasi.
          </p>
        </div>
        <div className="hero-img">Image</div>
      </div>
    </Wrapper>
  );
};

export default Hero;
