import React from 'react';
import ReactFlipCard from 'reactjs-flip-card';

const TeamMember = ({ name, title, img, bio }) => {
  const styles = {
    card: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '2rem',
      height: '100%',
      padding: '1rem',
    },
  };

  return (
    // <ReactFlipCard
    //   frontStyle={styles.card}
    //   backStyle={styles.card}
    //   frontComponent={
    //     <div className="member-front">
    //       <img className="slide-img" src={img} alt={name} />
    //       <h1 className="member-name">{name}</h1>
    //       <h2 className="member-title">{title}</h2>
    //     </div>
    //   }
    //   backComponent={
    //     <div className="member-back">
    //       <p className="member-bio">{bio}</p>
    //     </div>
    //   }
    // />

    <div className="single-member appear-up">
      <img className="slide-img" src={img} alt={name} />
      <h1 className="member-name">{name}</h1>
      <h2 className="member-title">{title}</h2>
    </div>
  );
};

export default TeamMember;
