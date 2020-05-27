import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../actions/index';

import AboutUs from './AboutUs/AboutUs';
import Blogs from './Blog/ViewAllBlogs';
import CreditCard from './Calculators/CreditCard'
import ContactUs from './Contact/Contact';
import Facts from './Facts/Facts'
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Landing from './Landing/Landing';
import ManageFacts from './Admin/ManageFacts';
import ManagePolls from './Admin/ManagePolls';
import ManageProfile from './Profile/ManageProfile';
import NewBlog from './Blog/NewBlog';
import Partners from './Partners/Partners';
import Privacy from './Privacy/Privacy';
import Tools from './Tools//Tools';
import ViewBlog from './Blog/ViewBlog';


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
              <Route path="/about" component={AboutUs}></Route>
              <Route exact path='/articles' component={Blogs}></Route>
              <Route exact path ="/articles/new" component={NewBlog}></Route>
              <Route path ="/article/:id" component={ViewBlog}></Route>
              <Route  path="/contact" component={ContactUs}></Route>
              <Route  exact path="/facts" component={Facts}></Route>
              <Route  path="/facts/manageFacts" component={ManageFacts}></Route>
              <Route  path="/polls/managePolls" component={ManagePolls}></Route>
              <Route exact path="/manage-profile" component={ManageProfile}></Route>
              <Route  path="/partners" component={Partners}></Route>
              <Route  path="/privacy" component={Privacy}></Route>
              <Route  exact path="/tools" component={Tools}></Route>
              <Route  path="/tools/creditcard" component={CreditCard}></Route>
              <Footer />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default connect(null, actions)(App)
