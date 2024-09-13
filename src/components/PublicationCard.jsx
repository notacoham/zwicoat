import React from 'react';
import Wrapper from '../assets/wrappers/PublicationCardWrapper';

const PublicationCard = ({ img, title, authors, summary, journal, link }) => {
  return (
    <Wrapper>
      <article className="article-item">
        <img src={img} alt={title} />
        <div className="article-info">
          <div className="article-content">
            <h1>{title}</h1>
            <p>Authors: {authors}</p>
            <p>Journal: {journal}</p>
            <p>Summary: {summary}</p>
            <p>Link: {link}</p>
          </div>
        </div>
      </article>
    </Wrapper>
  );
};

export default PublicationCard;
