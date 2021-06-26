import React from 'react';
import './Display.css';
import Axios from 'axios';
import { useState,useEffect} from "react";

const Display = () => {
  
  const [bookList, setBookList] = useState({
    showbooks:[]
  })
  useEffect(() => {
    Axios.get("http://localhost:3001/showbooks").then((response) => {
      setBookList({showbooks:response.data})
      console.log(response.data);
    });

}, [])

  return (<div className="showbooks">
  {bookList.showbooks.map((val) => (
   
      <div className="books">
        <div>
          <h3>Name: {val.username}</h3>
          <h3>Email: {val.email}</h3>
          <h3>Book Name: {val.bookname}</h3>
          <h3>Preferred Mode: {val.mode}</h3>
          
        </div>
      </div>
  ) 
  )}
  </div>
)
}
export default Display;