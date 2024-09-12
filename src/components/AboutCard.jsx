import React from 'react';
import Wrapper from '../assets/wrappers/AboutCardWrapper';

const AboutCard = () => {
  return (
    <Wrapper>
      <div className="about-center">
        <h1 className="about-header">About us</h1>
        <p className="about-body">
          ZCMI originated from a collaboration between two University of Iowa
          scientists, who were focused on creating biocompatible surfaces for
          directing nerve growth. The breakthrough came when they discovered
          that organic matter did not adhere to their zwitterionic surfaces,
          unveiling the potential of these surfaces to significantly reduce
          implant-induced inflammation, scarring, and infection— processes that
          all begin with organic matter adhering to implant surfaces. At its
          core, ZCMI is committed to developing ultra-low fouling coatings,
          aimed at establishing new benchmarks in implant safety and enhancing
          patient outcomes. By focusing on minimizing scarring and inflammation
          associated with medical implants, ZCMI is leading a paradigm shift in
          the medical implant industry, moving away from accepting these
          complications as inevitable.​
        </p>
        <div className="btn-container">
          <button className="btn">Info</button>
          <button className="btn">Team</button>
        </div>
      </div>
    </Wrapper>
  );
};

export default AboutCard;
