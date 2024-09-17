import React from 'react';
import PublicationCard from './PublicationCard';
import Wrapper from '../assets/wrappers/PublicationsWrapper';

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
