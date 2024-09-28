import React from 'react';

const TeamMember = ({ name, title, img }) => {
  return (
    <div className="single-member appear-up">
      <img className="slide-img" src={img} alt={name} />
      <h1 className="member-name">{name}</h1>
      <h2 className="member-title">{title}</h2>
    </div>
  );
};

export default TeamMember;
