import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import About from './components/pages/About';
import Form from './components/pages/Signup/Form';
import Login from './components/pages/Login/Login';
import Selectopt from './components/Selectoption/Selectopt';
import Seller from './components/pages/Sell/Seller';
import Display from './components/pages/DisplayBooks/Display';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/about' component={About} />
          <Route path='/sign-up' component={Form} />
          <Route path='/login' component={Login} />
          <Route path='/selectopt' component={Selectopt}/>
          <Route path='/seller' component={Seller}/>
          <Route path='/display' component={Display}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
