'use client';

import { IoCloseSharp } from "react-icons/io5";
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

        <dialog className="dialog" ref={dialogRef}>
          {activeMember && (
          <div className='dialog-center'>
            <nav className='dialog-nav'>
              <img src={activeMember.img} alt={'Pictured here is ' + activeMember.name + '' + activeMember.title} />
              <div className="dialog-nav-headers">
                <h1>{activeMember.name}</h1>
                <h2>{activeMember.title}</h2>
              </div>
            </nav>
            <p>{activeMember.bio}</p>
            <button onClick={() => dialogRef.current?.close()}>
              <IoCloseSharp style={{margin: '0 auto'}}/>
            </button>
          </div>
          )}
        </dialog>
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
