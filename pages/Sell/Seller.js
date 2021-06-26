import React, { useState } from 'react';
import './Seller.css';
import Sellerform from './Sellerform';
import { Link } from 'react-router-dom';


const Seller = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
        <span className='close-btn'><Link to='/'>×</Link></span>
        <div className='form-content-left'>
          <img className='form-img' src='images/image4.jpg' alt='BOOKS' />
        </div>
        
          <Sellerform submitForm={submitForm} />
     
        
      </div>
    </>
  );
};

export default Seller;