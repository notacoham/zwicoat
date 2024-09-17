import React from 'react';
import Wrapper from '../assets/wrappers/AboutPageWrapper';
import 'react-multi-carousel/lib/styles.css';
import Carousel from '../components/Carousel';

const About = () => {
  return (
    <Wrapper>
      <div className="about-page-hero">
        <h1 className="about-page-title">About</h1>
        <h2 className="about-page-header">Meet the team behind Zwicoat.</h2>
      </div>
      <div className="about-page-team">
        <p className="about-page-bio">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque rem
          sequi, saepe error nostrum fugit eum modi mollitia laboriosam, qui
          nesciunt laborum assumenda ipsum libero unde accusantium a. Quae
          corrupti sequi eveniet cum repudiandae exercitationem mollitia placeat
          odio maiores, est eaque non officia quibusdam ipsa porro libero. Ipsa,
          cum error!
        </p>
        <Carousel />
      </div>
    </Wrapper>
  );
};

export default About;
