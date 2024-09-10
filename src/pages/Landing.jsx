import React from 'react';
import Hero from '../components/Hero';
import InflammationInfoCard from '../components/InflammationInfo';
import Hydrogels from '../components/Hydrogels';
import AboutCard from '../components/AboutCard';
import ContactCard from '../components/ContactCard';

const Landing = () => {
  return (
    <>
      <Hero />
      <InflammationInfoCard />
      <Hydrogels />
      <AboutCard />
      <ContactCard />
    </>
  );
};

export default Landing;
