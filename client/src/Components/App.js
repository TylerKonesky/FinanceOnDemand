import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './Header';
import Landing from './Landing';
import Partners from './Partners';
import Privacy from './Privacy';
import Tools from './Tools';
import Facts from './Facts'
import Footer from './Footer';
import * as actions from '../actions/index';
import ContactUs from './Contact/Contact';

class App extends Component{
  componentDidMount(){
    console.log(this.props.fetchUser())
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
              <Route  path="/tools" component={Tools}></Route>
              <Route  path="/facts" component={Facts}></Route>
              <Route  path="/contact" component={ContactUs}></Route>
              <Footer />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default connect(null, actions)(App)
