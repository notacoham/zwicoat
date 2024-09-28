'use client';

import TeamMember from './TeamMember';
import { useEffect, useRef, useState } from 'react';

const TeamList = ({ members }) => {
  const dialogRef = useRef(null);
  const [activeMember, setActiveMember] = useState();

  useEffect(() => {
    if (!activeMember) return;
    dialogRef.current?.showModal();
  }, [activeMember]);

  return (
    <div className="team-center">
      <div className="dialog-center">
        <dialog className="dialog" ref={dialogRef}>
          {activeMember && <div>{activeMember.name}</div>}
        </dialog>
      </div>
      {members.map((member) => {
        return (
          <>
            <button
              onClick={() => setActiveMember(member)}
              className="team-member"
              key={member.id}
            >
              <TeamMember {...member} />
            </button>
          </>
        );
      })}
    </div>
  );
};

export default TeamList;
