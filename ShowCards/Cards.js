import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC books!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/Harrypotter.jpg'
              text='Fantasy Novels'
              label='Fantasy'
              path='/services'
            />
            <CardItem
              src='images/monk.jpg'
              text='Get Inspired'
              label='Motivation'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/winnie.jpg'
              text='Young Brains'
              label='Kids'
              path='/services'
            />
            <CardItem
              src='images/travel.jpg'
              text='For Travel Freaks'
              label='Travel'
              path='/services'
            />
            <CardItem
              src='images/horror.jpg'
              text='Ready to get Scared?'
              label='Horror'
              path='/about'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;