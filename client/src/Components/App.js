import React, { Component } from 'react';
import {BrowserRouter, Route, Link, Redirect, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './Header/Header';
import Landing from './Landing/Landing';
import Partners from './Partners/Partners';
import Privacy from './Privacy/Privacy';
import Tools from './Tools//Tools';
import Facts from './Facts/Facts'
import Footer from './Footer/Footer';
import ManageFacts from './Facts/ManageFacts';
import CreditCard from './Calculators/CreditCard'
import * as actions from '../actions/index';
import ContactUs from './Contact/Contact';

class App extends Component{
  componentDidMount(){
    this.props.fetchUser()
  }

  render(){
    return(
      <div>
        <BrowserRouter>
        
          <div>
              <Header />
              <Route exact path="/" component={Landing}></Route>
              <Route  path="/partners" component={Partners}></Route>
              <Route  path="/privacy" component={Privacy}></Route>
              <Route  exact path="/tools" component={Tools}></Route>
              <Route  path="/tools/creditcard" component={CreditCard}></Route>
              <Route  exact path="/facts" component={Facts}></Route>
              <Route  path="/facts/manageFacts" component={ManageFacts}></Route>
              <Route  path="/contact" component={ContactUs}></Route>
              <Footer />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default connect(null, actions)(App)
