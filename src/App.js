import React from 'react';
import {  Switch, Route, } from 'react-router-dom';
import './App.css';
import home from './home';
import Orders from './Orders.js';
import Cart from './Cart';
import SelectedBookpage from './SlectedBookpage';
function App() {
  return (
    <Switch>
       <Route path="/" exact component={home} />
       <Route path="/orders" exact component={Orders} />
       <Route path="/cart" exact component={Cart} />
       <Route path="/bookdetails" exact component={SelectedBookpage} />
    </Switch>

  );
}

export default App;
