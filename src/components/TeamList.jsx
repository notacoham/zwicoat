import React from 'react';
import TeamMember from './TeamMember';

const TeamList = ({ members }) => {
  return (
    <div className="team-center">
      {members.map((member) => {
        return (
          <div className="team-member" key={member.id}>
            <TeamMember {...member} />
          </div>
        );
      })}
    </div>
  );
};

export default TeamList;
