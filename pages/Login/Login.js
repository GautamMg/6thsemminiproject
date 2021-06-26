import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import { useState } from "react";


const FormButton = props => (
  <Link to='/Selectopt'>
  <div id="button" class="row">
    <button >{props.title}</button>
  </div>
  </Link>
);

const FormInput = props => (
  <div class="row">
    <label>{props.description}</label>
    <input type={props.type} placeholder={props.placeholder}/>
  </div>  
);



const Login = () => {
    const [logusername, setLogusername] = useState("");
    const [logpassword, setLogpassword] = useState("");

    const setLogin= () => {
            Axios.get("http://localhost:3001/login", {
            username: logusername,
            password: logpassword
        }).then((response) => {
            console.log(response);
          
        });
    }
    return (
        <>
        
        <div id="loginform">
        <h2 id="headerTitle">Login</h2>
            <FormInput description="Username" placeholder="Enter your username" type="text" onChange={(event) => {
                    setLogusername(event.target.value);}}/>
            <FormInput description="Password" placeholder="Enter your password" type="password" onChange={(event) => {
                    setLogpassword(event.target.value);}}/>
            <FormButton onClick={setLogin} title="Log in"/>
        </div>
        </>
        );
}

export default Login;