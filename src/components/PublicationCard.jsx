import React from 'react';

const PublicationCard = ({ img, title, authors, summary, journal, link }) => {
  return (
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
  );
};

export default PublicationCard;
