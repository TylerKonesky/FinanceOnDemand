import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './Header';
import Landing from './Landing';
import Partners from './Partners';
import Privacy from './Privacy';
import Tools from './Tools';
import Facts from './Facts'
import Test from './Test';

export default class App extends Component{
  render(){
    return(
      <div>
        <BrowserRouter>
          <div>
              <Header />
              <Route exact path="/" component={Landing}></Route>
              <Route  path="/test" component={Test}></Route>
              <Route  path="/partners" component={Partners}></Route>
              <Route  path="/privacy" component={Privacy}></Route>
              <Route  path="/tools" component={Tools}></Route>
              <Route  path="/facts" component={Facts}></Route>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}
