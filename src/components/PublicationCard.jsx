import React from 'react';
import Wrapper from '../assets/wrappers/PublicationCardWrapper';
import { NavLink } from 'react-router-dom';

const PublicationCard = ({ img, title, authors, summary, journal, link }) => {
  return (
    <div className="article-item">
      <img className="article-img" src={img} alt={title} />
      <div className="article-info">
        <div className="article-content">
          <h1 className="article-title">{title}</h1>
          <p className="article-detail">Authors: {authors}</p>
          <p className="article-detail">Journal: {journal}</p>
          <p className="article-detail">Summary: {summary}</p>
          <NavLink className="btn" to={link}>
            Read the Full Paper
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default PublicationCard;
