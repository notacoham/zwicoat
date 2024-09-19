import React, { useState } from 'react';
import TeamMembers from '../components/TeamMembers';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { team } from '../data.js';
import TeamList from '../components/TeamList.jsx';

const About = () => {
  const [members, setMembers] = useState(team);

  return (
    <>
      <div className="about-page-hero">
        <h1 className="about-page-title">About:</h1>
        <h2 className="about-page-header">Meet the team behind ZwiCoat</h2>
      </div>

      <div className="about-page-team">
        <p className="about-page-bio">
          ZCMI originated from a collaboration between two University of Iowa
          scientists focused on directing nerve growth. Their breakthrough came
          when they covalently grafted zwitterions to PDMS, resulting in
          surfaces that repelled organic matter. Today, ZCMI is dedicated to
          commercializing these ultra-low fouling coatings. Our mission is to
          challenge the acceptance of fibrosis as an inevitable side effect of
          implanted devices, improve patient outcomes, and set new standards in
          implant safety.
        </p>
        <h2 className="leadership-header">Leadership Team</h2>
      </div>
      <TeamList members={members} />
      {/* <TeamMembers members={members} /> */}
    </>
  );
};

export default About;
