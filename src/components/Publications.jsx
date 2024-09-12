import React from 'react';
import PublicationCard from './PublicationCard';

const Publications = ({ items }) => {
  return (
    <div className="publications-center">
      {items.map((item) => {
        return <PublicationCard key={item.id} {...item} />;
      })}
    </div>
  );
};

export default Publications;
