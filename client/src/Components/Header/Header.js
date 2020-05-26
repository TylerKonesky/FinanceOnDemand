import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import './Header.css'

class Header extends Component{
    renderLogin(){
        switch(this.props.user){
            case null:
                return;
            case false:
                return <li><a href="/auth/google">Log In</a></li>;
            default:
                return <li><a href="/api/logout">Logout</a></li>
        }
    }
    renderAdmin(){
        switch(this.props.user){
            case null:
                return;
            default:
                if(this.props.user.userType === 'admin'){
                    return <li><a href="/facts/manageFacts">Admin</a></li>
                }else{
                    return;
                }
        }
    }
    render(){
        return (
            <nav>
                <div className="nav-wrapper blue-grey header-wrapper">
                    <a className="left brand-logo header-text" href="/">Finance On Demand &trade;</a>
                    <ul className="right">
                        {this.renderAdmin()}
                        <li><Link to="/tools">Tools</Link></li>
                        <li><Link to="/articles">Articles</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/facts">Facts</Link></li>
                        {this.renderLogin()}
                    </ul>
                </div>
            </nav>
        )
    }
}

function mapStateToProps({user}){
    return {user}
}

export default connect(mapStateToProps)(Header)