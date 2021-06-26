import React from 'react';
import validate from './validateInfo.js';
import useForm from './useForm';
import './Form.css';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import { useState } from "react";

const FormSignup = () => {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [customerList, setCustomerList] = useState([]);

  const addCustomer = () => {
    Axios.post("http://localhost:3001/create", {
      username: username,
      email: email,
      password: password
    }).then(() => {
      setCustomerList([
        ...customerList,
        {
          username: username,
          email: email,
          password: password         
        },
      ]);
    });
  };


  return (
    <div className='form-content-right'>
      <form  className='form' noValidate>
        <h1>
          Get started with us today! Create your account by filling out the
          information below.
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>Username</label>
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder='Enter your username'
            
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
          <label className='form-label'>Password</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Enter your password'
           
            onChange={(event) => {
              setPassword(event.target.value);}}
          />
          
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Confirm Password</label>
          <input
            className='form-input'
            type='password'
            name='password2'
            placeholder='Confirm your password'
          
            
          />
          
        </div>
        <button className='form-input-btn' type='submit' onClick={addCustomer}>
          Sign up
        </button>
        <span className='form-input-login'>
          Already have an account? Login 
          <Link to='/login'>
          <a> here</a>
          </Link>
        </span>
      </form>
    </div>
  );
};

export default FormSignup;