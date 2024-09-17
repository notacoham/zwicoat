import React, { useState } from 'react';
import TeamMembers from '../components/TeamMembers';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { team } from '../data.js';

const About = () => {
  const [members, setMembers] = useState(team);

  return (
    <>
      <div className="about-page-hero">
        <h1 className="about-page-title">About:</h1>
        <h2 className="about-page-header">Meet the team behind Zwicoat</h2>
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
      </div>
      <TeamMembers members={members} />
    </>
  );
};

export default About;
