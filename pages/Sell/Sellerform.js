import React from 'react';

import useForm from './usesellerform';
import './Seller.css';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import { useState } from "react";

const FormSignup = ({ submitForm }) => {
 
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [bookname, setBookname] = useState("");
  const [mode, setMode] = useState("");
  const [bookList, setBookList] = useState([]);

  const addBooks = () => {
    Axios.post("http://localhost:3001/booksell", {
      username: username,
      email: email,
      bookname: bookname,
      mode: mode 
    }).then(() => {
      setBookList([
        ...bookList,
        {
          username: username,
          email: email,
          bookname: bookname,
          mode: mode      
        },
      ]);
    });
  };

  return (
    <div className='form-content-right'>
      <form className='form' noValidate>
        <h1>
          Fill out these few details so that others can check out and get back to you 
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>Name</label>
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder='Enter your Name'
            onChange={(event) => {
              setUsername(event.target.value);}}
          />
          
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your email'
            
            onChange={(event) => {
              setEmail(event.target.value);}}
          />
          
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Book Name</label>
          <input
            className='form-input'
            type='text'
            name='bookname'
            placeholder='Enter the book Name'
            onChange={(event) => {
              setBookname(event.target.value);}}
          />
          
        </div>
 
        <div className='form-inputs'>
          <label className='form-label'>Select the mode</label>
          
          <select 
            className='form-input'
            name='mode'
            onChange={(event) => {
              setMode(event.target.value);}}
          >
          <option >
                Sell</option>
          <option >
                Free Donation</option>
          <option >
                Rent</option>
          <option >
                Book Exchange</option>
          </select>
         
        </div>
        <button className='form-input-btn' type='submit' onClick={addBooks}>
          SUBMIT
        </button>
        <span className='form-input-login'>
          Want to check out the books? Click  
          <Link to='/display'>
          <a> here</a>
          </Link>
        </span>
      </form>
    </div>
  );
};

export default FormSignup;