import React from 'react';
import Magazine from './Magazine';

const MagazineList = ({ items }) => {
  return (
    <>
      {items.map((item) => {
        return (
          <div className="magazine-list">
            <h1 className="magazine-header">Publication {item.id}:</h1>
            <Magazine key={item.id} {...item} />
          </div>
        );
      })}
    </>
  );
};

export default MagazineList;
