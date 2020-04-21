import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class Header extends Component{
    renderLogin(){
        switch(this.props.auth){
            case null:
                return;
            case false:
                return <li><a href="/auth/google">Log In</a></li>;
            default:
                return <li><a href="/api/logout">Logout</a></li>
        }
    }
    render(){
        return (
            <nav>
                <div className="nav-wrapper">
                    <a className="left brand-logo" href="/">Finance On Demand</a>
                    <ul className="right">
                        <li><Link to="/tools">Tools</Link></li>
                        <li><Link to="/privacy">Privacy</Link></li>
                        <li><Link to="/partners">Partners</Link></li>
                        <li><Link to="/facts">Facts</Link></li>
                        {this.renderLogin()}
                    </ul>
                </div>
            </nav>
        )
    }
}

function mapStateToProps({auth}){
    return {auth}
}

export default connect(mapStateToProps)(Header)