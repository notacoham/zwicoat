import React, { useRef } from 'react';

import Slider from 'react-slick';
import TeamMember from './TeamMember';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';

const TeamMembers = ({ members }) => {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 8000,
    centerMode: true,
    focusOnSelect: true,
  };
  return (
    <div className="slick-container">
      <Slider
        ref={(slider) => {
          sliderRef = slider;
        }}
        {...settings}
      >
        {members.map((member) => {
          return (
            <div className="slide" key={member.id}>
              <TeamMember {...member} />
            </div>
          );
        })}
      </Slider>
      {/* <button onClick={previous} className="slide-btn">
        <IoIosArrowBack size="3em" />
      </button>
      <button onClick={next} className="slide-btn">
        <IoIosArrowForward size="3em" />
      </button> */}
    </div>
  );
};

export default TeamMembers;
