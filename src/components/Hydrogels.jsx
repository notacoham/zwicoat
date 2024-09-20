import Wrapper from '../assets/wrappers/HydrogelsWrapper';
import img from '../assets/images/logos/home-page-body-img-edited.png';
import { NavLink } from 'react-router-dom';

const Hydrogels = () => {
  return (
    <Wrapper>
      <div className="hydrogels-center fade-in">
        <div className="hydrogels-img ">
          <img src={img} alt="vector-lines" />
        </div>
        <div className="hydrogels-content">
          <h1 className="hydrogels-header">
            Hydrogels with superior surface properties
          </h1>
          <p className="hydrogels-body ">
            ZCMI's patented zwitterionic thin film coatings create a hydration
            barrier between the body and the implant. Instead of seeing a
            silicone surface, cells and proteins instead just see water.
          </p>
          <NavLink to="/technology" className="btn ">
            Learn More
          </NavLink>
        </div>
      </div>
    </Wrapper>
  );
};

export default Hydrogels;
