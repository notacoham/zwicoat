import React from 'react';
import PublicationCard from '../components/PublicationCard';

const Technology = () => {
  return (
    <>
      <div className="tech-hero-center">
        <h1 className="tech-title">Technology</h1>
        <h2 className="tech-header">Smart meets smooth.</h2>
      </div>
      <div className="tech-content-center">
        <p className="tech-content-body">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto odit
          doloremque saepe ducimus quis fugit sapiente maxime, repellat
          molestiae ipsum?
        </p>
        <h1 className="tech-content-header">
          Compelling in vivo and in vitro results
        </h1>
      </div>
      <div className="tech-publications">
        <h1 className="publications-header">
          Read about them in our recent publications
        </h1>
        <PublicationCard />
      </div>
    </>
  );
};

export default Technology;
