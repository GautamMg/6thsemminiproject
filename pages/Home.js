import React from 'react';
import '../../App.css';
import Cards from '../ShowCards/Cards';
import HeroSection from '../Heropage/HeroSection';

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
    </>
  );
}

export default Home;