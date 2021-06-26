import React from 'react';
import './Selectopt.css';
import Selectcard from './Selectcard';



function Selectopt() {
  return (
    <div className='cards'>
      <h1>Which one today?!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <Selectcard
              src='images/image5.jpg'
              text='Need some books ? check em out'
              label='Buyer'
              path='/display'
            />
            <Selectcard
              src='images/image6.jpg'
              text='Have some books ? Add those here'
              label='Seller'
              path='/seller'
            />
          </ul>
      
        </div>
      </div>
    </div>
  );
}

export default Selectopt;