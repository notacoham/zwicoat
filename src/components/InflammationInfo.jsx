import React from 'react';
import Wrapper from '../assets/wrappers/InflammationInfoWrapper';

const InflammationInfoCard = () => {
  return (
    <Wrapper>
      <div className="inflammation-center">
        <h1 className="inflammation-header">
          Ultra-low Fouling Surfaces that prevent inflammation and infection
        </h1>
        <p className="inflammation-body">
          Scarring and inflammation are often accepted as unavoidable side
          effects of medical implants. ZCMI is dedicated to changing this
          paradigm by developing coatings that dramatically reduce the body's
          response to foreign objects. The key? A thin hydration barrier between
          the body and the implant.
        </p>
      </div>
    </Wrapper>
  );
};

export default InflammationInfoCard;
