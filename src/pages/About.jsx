import React from 'react';
import { Link } from 'react-router-dom';
import TeamMember from '../components/TeamMember';

const About = () => {
  return (
    <>
      <div className="about-page-hero">
        <h1 className="about-page-title">About</h1>
        <h2 className="about-page-header">The story. The Team.</h2>
      </div>
      <div className="about-page-team">
        <p className="about-page-bio">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit corrupti
          aut accusantium libero nostrum commodi nulla odio molestiae eius ab!
        </p>
        <div className="team">
          <TeamMember />
        </div>
      </div>
    </>
  );
};

export default About;
