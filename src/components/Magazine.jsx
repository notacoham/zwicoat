import React from 'react';
import HTMLFlipBook from 'react-pageflip';

const Magazine = ({
  id,
  title,
  img,
  coverImg,
  authors,
  journal,
  summary,
  link,
}) => {
  return (
    <div className="magazine-center">
      <HTMLFlipBook showCover={true} width={500} height={700}>
        <div className="cover-page">
          <h1 className="magazine-title">{title}</h1>
          <img className="cover-img" src={coverImg} alt="Cover Image" />
        </div>
        <div className="inside-cover-page">
          <h2 className="magazine-inside-title">{title}</h2>
          <p className="magazine-authors">Authors: {authors}</p>
          <p className="magazine-journal">Journal: {journal}</p>
          <img src={img} alt="Inside Image" className="magazine-inside-img" />
        </div>
        <div className="content-page">
          <p className="magazine-summary">{summary}</p>
        </div>
        <div className="back-cover-page">
          <h1 className="magazine-learn-more">Want to read the full paper?</h1>
          <button className="magazine-link">{link}</button>
        </div>
      </HTMLFlipBook>
    </div>
  );
};

export default Magazine;
