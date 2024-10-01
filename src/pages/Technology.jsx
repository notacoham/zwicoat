import React, { useState } from 'react';
import Wrapper from '../assets/wrappers/TechnologyPage';
import MagazineList from '../components/MagazineList.jsx';
import { publications } from '../data.js';
import { BsArrowRight } from 'react-icons/bs';
const Technology = () => {
  const [items, setItems] = useState(publications);

  return (
    <Wrapper>
      <div className="tech-hero-center">
        <h1 className="tech-title">Technology:</h1>
        <h2 className="tech-header">
          Coatings that prevent scarring and infection
        </h2>
      </div>
      <div className="tech-content-center">
        <p className="tech-content-body">
          The safety and effectiveness of medical implants, from complex
          neurostimulators to basic tubes, are undermined by damage to the
          surrounding native tissues, known as the foreign body response.
          Despite the complex and far-reaching effects of the foreign body
          response, its physical origin is simple: protein and cell adhesion to
          implanted biomaterials. Here at ZCMI we leverage the unique properties
          of zwitterionic polymers to effectively block the adhesion of protein
          and cells, obstructing the mechanisms that result in fibrosis and
          infection. Our patented technology creates strongly-adhered
          antifouling coatings through a simple, light-initiated reaction,
          offering a more durable and scalable solution.
        </p>
      </div>
      <div className="tech-publications">
        <h1 style={{textTransform: 'none', lineHeight:'3rem'}} className="tech-content-header">
          Compelling {<i>in vivo</i>} and {<i>in vitro</i>} results.{<br></br>}
          Read about them in our recent publications:
        </h1>
      </div>
      <div className="turn-page-center">
        <h2 className="turn-page-header">
          Turn the page to find out more
          <BsArrowRight />
        </h2>
      </div>
      <div className="publications-container">
        <MagazineList items={items} />
      </div>
    </Wrapper>
  );
};

export default Technology;
