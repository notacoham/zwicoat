import React from 'react';
import Magazine from './Magazine';

const MagazineList = ({ items }) => {
  return (
    <>
      {items.map((item) => {
        return (
          <div className="magazine-list" key={item.id}>
            <Magazine key={item.id} {...item} />
          </div>
        );
      })}
    </>
  );
};

export default MagazineList;
