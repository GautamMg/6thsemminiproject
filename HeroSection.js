import React from 'react';

import { Button } from '../Button/Button';
import './HeroSection.css';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-2 (1).mp4' autoPlay loop muted />
      <h1>It’s Book O’Clock</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Link to='/login'>
        <button>
        
          LOGIN
        </button>
        </Link>
        <Link to='/sign-up'>
        <button>
          SIGN-UP
        </button>
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;