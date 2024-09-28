import React from 'react';

const TeamMember = ({ name, title, img }) => {
  return (
    <div className="single-member appear-up">
      <img className="slide-img" src={img} alt={'Pictured here is ' + name + '' + title} />
      <h1 className="member-name">{name}</h1>
      <h2 className="member-title">{title}</h2>
    </div>
  );
};

export default TeamMember;
