import React from 'react';
import Wrapper from '../assets/wrappers/HydrogelsWrapper';
import img from '../assets/images/logos/vector-lines.png';

const Hydrogels = () => {
  return (
    <Wrapper>
      <div className="hydrogels-center">
        <div className="hydrogels-img">
          <img src={img} alt="vector-lines" />
        </div>
        <div className="hydrogels-content">
          <h1 className="hydrogels-header">
            Hydrogels with superior surface properties
          </h1>
          <p className="hydrogels-body">
            ZCMI's patented zwitterionic thin film coatings create a hydration
            barrier between the body and the implant. Instead of seeing a
            silicone surface, cells and proteins instead just see water.
          </p>
          <button className="btn">Learn More</button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Hydrogels;
