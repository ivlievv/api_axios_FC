import React                            from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';
import Home                             from './pages/Home.js';
import About                            from './pages/About.js';
import Contacts                         from './pages/Contacts.js';

export default function (props) {
  return (

    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route path='/about'>
          <About/>
        </Route>
        <Route path='/contacts'>
          <Contacts/>
        </Route>
      </Switch>
    </BrowserRouter>

  );
};